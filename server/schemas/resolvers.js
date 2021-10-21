const {AuthenticationError} = require('apollo-server-express');
const {User, Event, Participant} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        events: async () => {
            return Event.find().populate('participants');
        },

        event: async (parent, { eventName }) => {
            return Event.findOne({ eventName });
        },

        eventDate: async (parent, { eventDate }) => {
            return Event.findOne({ eventDate });
        },

        participants: async () => {
            return Participant.find().populate('events');
        },

        participant: async (parent, { participantName }) => {
            return Participant.findOne({ participantName });
        },
    },

    Mutation: {
        addUser: async (parent, { userName, userType, email, password }) => {
            const user = await User.create({ userName, userType, email, password });
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { userName, password }) => {
            const user = await User.findOne({ userName });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },

        addEvent: async (parent, { promoterName, eventName, eventDate, eventStart, eventEnd, eventType, eventDescription }) => {
            const event = await Event.create({ promoterName, npmeventName, eventDate, eventStart, eventEnd, eventType, eventDescription });
            return event;
        },

        addParticipant: async (parent, { eventName, participantName, participantDescription }) => {
            const participant = await Participant.create({ eventName, participantName, participantDescription });
            return participant;
        },

        removeEvent: async (parent, { eventID }) => {
            return Event.findOneAndDelete({ _id: eventID });
        },

        removeParticipant: async (parent, { _id }) => {
            return Participant.findOneAndDelete({ _id: _id });
        },

        updateEvent: async (parent, { _id, eventName, eventDate, eventStart, eventEnd, eventType, eventDescription }) => {
            return Event.findOneAndUpdate({ _id: _id },
                {
                  eventName, eventDate, eventStart, eventEnd, eventType, eventDescription
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        updateParticipant: async (parent, {_id, participantName, participantDescription }) => {
            return Participant.findOneAndUpdate({ _id, _id},
                {
                  participantName, participantDescription
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
