import { InputType} from "@nestjs/graphql";
import { FindAllArgs } from "src/types/findAll.args";




@InputType()
export class GetSeriesArgs extends FindAllArgs {}