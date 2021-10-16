const {AuthenticationError} = require('apollo-server-express');
const {User, Thought, Participant} = require('../models');

const resolvers = {
    Query: {
        events: async () => {
            return Event.find().populate('Participant');
        },
        event: async (parent, {name}) => {
            return Event.findOne({name});
        },
        participant: async () => {
            return Participant.find().populate('Event');
        }
    },

    Mutation: {
        addUser: async (parent, {name, type, email, password}) => {
            const user = await User.create({name, type, email, password});
            return {user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if (! user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (! correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            return {user};
        }
    }
}
