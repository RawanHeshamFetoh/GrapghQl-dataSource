import { gql } from "apollo-server-express";
export const schema = gql`
type Movie {
    id: ID!
    title: String!
    overview: String
    release_date: String
    vote_average: Float
}

type Actor {
    id: ID!
    name: String!
    biography: String
    birthday: String
}

type Query {
    getMovie(id: ID!): Movie
    getActor(id: ID!): Actor
}
`;