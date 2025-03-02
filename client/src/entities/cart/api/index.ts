import { graphql } from "@/shared/gql";



export const GET_CARTITEMS = graphql(`
    query getCartItems($input: GetCartItemsArgs!) {
        cartItems(args: $input) {
            id
            type
            stock
            number
            new
            name
            price
            createdAt
            catalogPreview {
                id
                name
                url
            }
            seriesPreview {
                id
                name
                url
            }
            nftPreview {
                id
                name
                url
            }
            series {
                id
                name
                originalName
            }
        }
    }
    `)