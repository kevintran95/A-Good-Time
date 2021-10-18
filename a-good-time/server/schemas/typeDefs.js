const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    email: String!
    password: String!
    events: [Event]
    participants: [Participant]
  }

  type Event {
    _id: ID
    eventName: String
    eventDate: String
    eventStart: String
    eventEnd: String
    eventType: String
    participants: [Participant]!
  }

  type Participant {
    _id: ID
    participantName: String
    description: String
    events: [Event]!
  }

  type Query {
    events: [Event]
    event(eventName: String!): Event
    participants: [Participant]
    participant(participantName: String!): Participant
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addEvent(eventName: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!): Event
    addParticipant(participantName: String!, description: String!): Participant
    removeEvent(eventID: ID!): Event
    removeParticipant(eventID: ID!): Participant

    how ?????
    -----------------------------------
    updateEvent 
    updateParticipant
  }
`;

module.exports = typeDefs;
