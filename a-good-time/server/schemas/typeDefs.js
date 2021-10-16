const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    events: [Event]
    participants: [Participant]
  }

  type Event {
    _id: ID
    name: String
    eventDate: String
    eventStart: String
    eventEnd: String
    eventType: String
    participants: [Participant]!
  }

  type Participant {
    _id: ID
    name: String
    description: String
    events: [Event]!
  }


`;

module.exports = typeDefs;
