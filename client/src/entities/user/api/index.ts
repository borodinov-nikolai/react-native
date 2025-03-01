import { graphql } from "@/src/shared/gql";



export const GET_ME = graphql(`
        query getMe {
            getMe {
                id
                login
                firstName
                secondName
                phone
                social
                email
                city
                street
                house
                building
                apartment
                cart
                userSeries {
                    id
                    checkedItems {
                        id
                    }
                    saved
                    seriesId
                    updatedAt
                    series {
                        id
                        name
                        preview {
                            id
                            url
                        }
                        products {
                            id
                        }
                    }
                }
                userNfts {
                    id
                    checkedItems {
                        id
                    }
                    saved
                    nftId
                    updatedAt
                    nft {
                        id
                        name
                        event1_date
                        preview {
                            id
                            url
                        }
                        products {
                            id
                        }
                    }
                }
            }
        }
    `)

export const UPDATE_ME = graphql(`
    mutation updateMe($input: UpdateMeInput!) {
        updateMe(updateMeInput: $input){
            id
        }
    }
    `) 