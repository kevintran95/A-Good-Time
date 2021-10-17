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

  type Query {
    events: [Event]
    event(name: String!): Event
    participants: [Participant]
    participant(name: String!): Participant
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addEvent(name: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!): Event
    addParticipant(name: String!, description: String!): Participant
    removeEvent(eventID: ID!): Event
    removeParticipant(eventID: ID!): Participant

    how ?????
    -----------------------------------
    updateEvent 
    updateParticipant
  }
`;

module.exports = typeDefs;
