import { gql } from '@apollo/client';

export const QUERY_EVENTS = gql`
    query events {
        events {
            promoterName,
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
            promoterName,
            eventName,
            eventDate, 
            eventStart,
            eventEnd,
            eventType,
            eventDescription,
        }
    }
`;

