// getting-started.js
const mongoose = require('mongoose');
const app = require('./app');
const uri = "mongodb://localhost:27017/textil";
const port = 3700;

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect(uri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    .then(()=>{
      app.listen(port, ()=>{
        console.log('server running in localhost:3700');
    });
    })
    .catch(err => console.log(err));
}

mongoose.connection.once('open', _ =>{
    console.log("Database is connected" + uri);
});
