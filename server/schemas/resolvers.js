const {AuthenticationError} = require('apollo-server-express');
const {User, Event, Participant} = require('../models');

const resolvers = {
    Query: {
        events: async () => {
            return Event.find().populate('Participant');
        },
        event: async (parent, { eventName }) => {
            return Event.findOne({ eventName });
        },
        participants: async () => {
            return Participant.find().populate('Event');
        },
        participant: async (parent, { participantName }) => {
            return Participant.findOne({ participantName });
        },
    },

    Mutation: {
        addUser: async (parent, { userName, type, email, password }) => {
            const user = await User.create({ userName, type, email, password });
            return {user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (! user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (! correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            return {user};
        },
        addEvent: async (parent, { eventName, eventDate, eventStart, eventEnd, eventType }) => {
            const event = await User.create({ eventName, eventDate, eventStart, eventEnd, eventType });
            return {event};
        },
        addParticipant: async (parent, { participantName, description }) => {
            const participant = await User.create({ participantName, description });
            return {participant};
        },
        removeEvent: async (parent, { eventId }) => {
            return Event.findOneAndDelete({ _id: eventId });
        },
        removeParticipant: async (parent, { participantId }) => {
            return Participant.findOneAndDelete({ _id: participantId });
        },
        updateEvent: async (parent, { eventId, eventName, eventDate, eventStart, eventEnd, eventType }) => {
            return Event.findOneAndUpdate({ _id: eventId },
                {
                    $addToSet: { eventName, eventDate, eventStart, eventEnd, eventType }
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        updateParticipant: async (parent, {participantId, participantName, description }) => {
            return Participant.findOneAndUpdate({ _id, participantId },
                {
                    $addToSet: { participantName, description }
                },
                {
                    new:true,
                    runValidators: true,
                }
            );
        }
    },
};


module.exports = resolvers;