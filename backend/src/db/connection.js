const mongoose = require('mongoose')
require('dotenv').config({ path: '../../.env' })

mongoose.set('strictQuery', false)
const mongoDB = process.env.MONGO_DB

main()
async function main() {
    try {
        await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB server: ${mongoDB}`);
    }
    catch (err) {
        console.log(`Error connecting to database: ${err}`)
    };
}
//we can use this funtoin to close our application in case you no longer need the database connection.
async function closeConnection() {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB.');
}

