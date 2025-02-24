import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'https://api.petproekt.ru/graphql',
   documents: ['**/*.ts'],
   generates: {
      './shared/gql/': {
        preset: 'client',
      }
   }
}
export default config