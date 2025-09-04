import mongoose from "mongoose";

const newEventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventFormURL: {
    type: String,
    required: true,
  },
});

const NewEvent = mongoose.model("NewEvent", newEventSchema);
export default NewEvent;
