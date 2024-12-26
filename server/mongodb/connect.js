// import mongoose from 'mongoose';

// const connectDB = (url) => {
//   mongoose.set('strictQuery', true);
//   mongoose.connect(url)
//     .then(() => console.log('connected to mongo'))
//     .catch((err) => {
//       console.error('failed to connect with mongo');
//       console.error(err);
//     });
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = (url = process.env.MONGO_URI) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Failed to connect with MongoDB');
      console.error(err);
    });
};

export default connectDB;
