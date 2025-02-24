import { graphql } from "@/shared/gql";




export const GET_PRODUCTS = graphql(`
       query getProducts($input: GetProductsArgs) {
        products(args: $input) {
          data {
            id
            number
            name
            price
            features
            exclusive
            stock
            series {
              id
              originalName
            }
            catalogPreview {
                id
                name
                url
            }
          }
          meta {
            pagination {
                page
                pageSize
                total
            }
          }
        }
       }
    `)

export const GET_PRODUCT = graphql(`
  query getProduct($input: Int!) {
   product(id: $input) {
       id
       number
       name
       price
       features
       exclusive
       stock
       category
       description
       series {
         id
         originalName
       }
       images {
        id
        name
        url
       }
   }
  }
`)