const db = require('../config/connection');
const { User, Event, Participant} = require('../models');
const profileSeeds = require('./profileSeeds.json');
const eventSeeds = require('./eventSeeds.json');
const participantSeeds = require('./participantSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});  
    await Event.deleteMany({});  
    await Participant.deleteMany({});

    await User.create(profileSeeds);
    for (let i = 0; i < eventSeeds.length; i++) {
      const { _id, eventName } = await Event.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: eventName },
        {
          $addToSet: {
            events: _id,
          },
        }
      );
    }
    
    await Event.create(eventSeeds);
    for (let i = 0; i < participantSeeds.length; i++) {
      const { _id, participantName } = await Participant.create(participantSeeds[i]);
      const event = await Event.findOneAndUpdate(
        { username: participantName },
        {
          $addToSet: {
            participants: _id,
          },
        }
      );
    }

    await Participant.create(participantSeeds);
    for (let i = 0; i < eventSeeds.length; i++) {
      const { _id, eventName } = await Event.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: eventName },
        {
          $addToSet: {
            events: _id,
          },
        }
      );
    }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
