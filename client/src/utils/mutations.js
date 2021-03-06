import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($userName: String!, $password: String!) {
    login(userName:$userName, password:$password) {
        token
        user {
            userName
            password
        }
    } 
  }
`;

export const SIGNUP = gql`
mutation addUser ($userName: String!, $userType: String!, $email: String!, $password: String!) {
    addUser(userName:$userName, userType:$userType, email:$email, password:$password) {
        token
        user {
            userName
        userType
        email
        _id
        }
    } 
  }
`;

export const ADD_EVENT = gql`
mutation addEvent($promoterName: String!, $eventName: String!, $eventDate: String!, $eventStart: String!, $eventEnd: String!, $eventType: String!,  $eventDescription: String!) {
    addEvent(promoterName: $promoterName, eventName: $eventName, eventDate: $eventDate, eventStart: $eventStart, eventEnd: $eventEnd, eventType: $eventType, eventDescription: $eventDescription) {
      promoterName,
      eventName,
      eventDate,
      eventStart,
      eventEnd,
      eventType,
      eventDescription,
      _id
    } 
  }
`;




