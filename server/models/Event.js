const {Schema, model} = require('mongoose');

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    eventDate: {
        type: Date,
        required: true,
        trim: true
    },
    eventStart: {
        type: String,
        required: true,
        trim: true
    },
    eventEnd: {
        type: String,
        required: true,
        trim: true
    },
    eventType: {
        type: String,
        required: true,
        trim: true
    },

    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        },
    ],
});

const Event = model('Event', eventSchema);

module.exports = Event;
