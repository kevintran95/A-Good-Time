const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    userType: String!
    email: String!
    password: String!
    events: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Event {
    _id: ID
    promoterName: String
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
    eventName: String
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

    addUser(userName: String!, userType: String!, email: String!, password: String!): Auth
    login(userName: String!, password: String!): Auth

    addEvent(promoterName: String!, eventName: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!, eventDescription: String!): Event
    addParticipant(eventName: String!, participantName: String!, participantDescription: String!): Participant

    updateEvent(_id: String!, eventName: String!, eventDate: String!, eventStart: String!, eventEnd: String!, eventType: String!, eventDescription: String!): Event
    updateParticipant(_id: String!, participantName: String!, participantDescription: String!): Participant

    removeEvent(eventID: ID!): Event
    removeParticipant(eventID: ID!): Participant
  }
`;

module.exports = typeDefs;
