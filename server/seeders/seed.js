const db = require('../config/connection');
const { User, Event, Participant} = require('../models');
const profileSeeds = require('./profileSeeds.json');
const eventSeeds = require('./eventSeeds.json');
const participantSeeds = require('./participantSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(profileSeeds);
    await Event.deleteMany({});
    await Event.create(eventSeeds);
    await Participant.deleteMany({});
    await Participant.create(participantSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
