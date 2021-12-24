// getting-started.js
const mongoose = require('mongoose');
const app = require('./app');
const uri = "mongodb://localhost:27017/textil";

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    .catch(err => console.log(err));
}

mongoose.connection.once('open', _ =>{
    console.log("Database is connected" + uri);
});
