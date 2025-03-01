import { graphql } from "@/src/shared/gql";



export const SIGN_UP = graphql(`
    mutation signUp($input: SignUpInput!) {
        signUp(signUpInput: $input) {
            jwt
        }
    }
        `)

export const SIGN_IN = graphql(`
    mutation signIn($input: SignInInput!) {
        signIn(signInInput: $input) {
            jwt
        }      
    }
        `)

export const SIGN_OUT = graphql(`
    mutation signOut {
        signOut
    }
    `)

export const TOKENS_REFRESH = graphql(`
        mutation tokensRefresh {
            tokensRefresh {
                jwt
            }
        }
        `)