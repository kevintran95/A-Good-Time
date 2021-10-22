import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
    query events {
        events {
            eventName,
            eventDate, 
            eventStart,
            eventEnd,
            eventType,
            eventDescription,
        }
    }
`;

export const QUERY_EVENT = gql`
    query event {
        event {
            eventName,
            eventDate, 
            eventStart,
            eventEnd,
            eventType,
            eventDescription,
        }
    }
`;

