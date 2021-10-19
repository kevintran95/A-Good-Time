const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    userType: String!
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
    eventDescription: String
    participants: [Participant]!
  }

  type Participant {
    _id: ID
    participantName: String
    participantDescription: String
    events: [Event]!
  }

  type Query {
    events: [Event]
    event(eventName: String!): Event
    eventDate(eventDate: String!): Event
    participants: [Participant]
    participant(participantName: String!): Participant
  }

  type Mutation {
    addUser(userName: String!, userType: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User

    addEvent(eventName: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!, eventDescription: String!): Event
    addParticipant(participantName: String!, participantDescription: String!): Participant

    updateEvent(eventName: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!, eventDescription: String!): Event
    updateParticipant(participantName: String!, participantDescription: String!): Participant

    removeEvent(eventID: ID!): Event
    removeParticipant(eventID: ID!): Participant
  }
`;

module.exports = typeDefs;
