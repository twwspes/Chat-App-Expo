import mongoose from 'mongoose';
// const schema = {
//     user_id: String,
//     token: String,
//     devicePlatform: String,
//     deviceName: String,
//     deviceYear: String,
//     systemVersion: String,
// };
// // schema.index({ user_id: 1 });
const schema = new mongoose.Schema(
    {
      user_id: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      },
      devicePlatform: {
        type: String
      },
      deviceName: {
        type: String
      },
      deviceYear: {
        type: String
      },
      systemVersion: {
        type: String
      }
    },
    { versionKey: false }
  );
  
  schema.index({ user_id: 1 });
export default mongoose.model('DeviceToken', schema);
//# sourceMappingURL=DeviceTokenModel.js.map