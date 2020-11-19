import mongoose from 'mongoose';
function timestamp() {
    return new Date();
}
// const schema = {
//     sender_id: String,
//     senderName: String,
//     text: String,
//     date: Number
// };
const schema = new mongoose.Schema(
    {
      sender_id: {
        type: String,
        required: true,
      },
      senderName: { 
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      date: {
        type: Number,
        default: timestamp
      }
    },
    { versionKey: false }
  );

export default mongoose.model('Message', schema);
//# sourceMappingURL=MessageModel.js.map