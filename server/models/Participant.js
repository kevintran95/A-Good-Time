const {Schema, model} = require('mongoose');

const participantSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        trim: true
    },
    participantName: {
        type: String,
        required: true,
        trim: true
    },
    participantDescription: {
        type: String,
        required: true,
        trim: true
    },

    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        },
    ],
});

const Participant = model('Participant', participantSchema);

module.exports = Participant;
