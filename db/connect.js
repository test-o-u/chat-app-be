require('dotenv').config()

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://thien:thien@vincent.nbybn.mongodb.net/chat-app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}) .then(() => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed')
});
// console.log(process.env.MONGODB_URL);
// console.log(process.env.PORT);