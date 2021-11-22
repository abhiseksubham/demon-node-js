# Clone App

Demo Application Using Node.js

## Installation

```bash
npm install
```

## Run the app

```bash
node server.js
```

## Verify
Open the browser and enter http://localhost:3000


# Express & MongoDb Templates

## Install MongoDB in your machine first.
```bash
Install MongoDB in your machine first.
https://docs.mongodb.com/manual/installation/
```

## Run the command.
```bash
npm install express mongoose cors –save
```

## Configure MongoDB database & Mongoose.
```bash
In the app folder, we create a separate config folder for configuration with db.config.js file like this: 
module.exports = { url: "mongodb://localhost:27017/demo_db" };
```

## Define Mongoose
```bash
Now create app/models/index.js with the following code:

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
module.exports = db;

Don’t forget to call connect() method in server.js:
...
const app = express();
app.use(...);
const db = require("./app/models");
db.mongoose
.connect(db.url, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
console.log("Connected to the database!");
})
.catch(err => {
console.log("Cannot connect to the database!", err);
process.exit();
});
```



