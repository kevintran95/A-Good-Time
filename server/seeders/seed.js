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
      const { _id, promoterName, eventName } = await Event.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { userName: promoterName },
        {
          $addToSet: {
            events: _id,
          },
        }
      );

      const participant = await Participant.create(participantSeeds[i]);
      const event = await Event.findOneAndUpdate(
        { eventName: eventName },
        {
          $addToSet: {
            participants: participant._id,
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
