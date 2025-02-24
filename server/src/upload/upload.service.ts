import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import * as path from 'path';
import * as fs from 'fs';
import * as Upload from 'graphql-upload/Upload.js';
import * as xlsx from 'xlsx';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UploadService {
    constructor(private readonly db: DbService, private readonly usersService: UsersService) {}

    async createFile(file: Upload) {
        const { mimetype, filename, createReadStream } = file || {};
        const rootPath = process.cwd();
        const dir = mimetype.startsWith('image') ? 'images' : 'others';
        const uploadDir = path.join(rootPath, 'files', dir);
        
   
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }


        let savePath = path.join(uploadDir, filename);
        let uniqueFilename = filename;
        let counter = 1;

        while (fs.existsSync(savePath)) {
            const ext = path.extname(filename);
            const baseName = path.basename(filename, ext);
            uniqueFilename = `${baseName}(${counter})${ext}`;
            savePath = path.join(uploadDir, uniqueFilename);
            counter++;
        }

        const url = `/${dir}/${uniqueFilename}`;


        await new Promise<void>((resolve, reject) => {
            const stream = createReadStream();
            const writeStream = fs.createWriteStream(savePath);

            stream
                .pipe(writeStream)
                .on('finish', resolve)
                .on('error', (error) => {
                    console.error(`Ошибка при сохранении файла ${filename}`, error);
                    reject(error);
                });
        });

        return {url, uniqueFilename}
    }

    async createImage(file: Upload) {

        const {url, uniqueFilename} = await this.createFile(file);
            await this.db.image.create({
                data: {
                    name: uniqueFilename,
                    url
                }
            });
        
    }

    async xlsxService(file: Upload) {
        const { createReadStream, filename } = file;

        const stream = createReadStream();
        const chunks: Buffer[] = [];
  
        stream.on('data', (chunk) => chunks.push(chunk));
        await new Promise((resolve) => stream.on('end', resolve));
    
        const buffer = Buffer.concat(chunks);
 
        const workbook = xlsx.read(buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
    
        const data = xlsx.utils.sheet_to_json(worksheet);

        for (const item of data) {
            await this.usersService.create({
                login: item['Уникальный номер клиента:'],
                password: item['Пароль:'],
                firstName: item['Фамилия и Имя клиента:']?.split(' ')?.[0],
                secondName: item['Фамилия и Имя клиента:']?.split(' ')?.[1]
            });
        }


    }

    async deleteFile(name: string, category: string) {
        const rootPath = process.cwd();
        const filePath = path.join(rootPath, 'files', category, name);
        await fs.promises.unlink(filePath);
        return true;
    }
}