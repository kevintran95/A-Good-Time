const {Schema, model} = require('mongoose');

const participantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
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