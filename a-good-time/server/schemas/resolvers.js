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
        removeEvent: async (parent, { eventId }) => {
            return Event.findOneAndDelete({ _id: eventId });
        },
        removeParticipant: async (parent, { participantId }) => {
            return Participant.findOneAndDelete({ _id: participantId });
        },
        addEvent: async (parent, { eventId }) => {
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
        addParticipant: async (parent, {participantId }) => {
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
