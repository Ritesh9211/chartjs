const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://ritesh:ritesh@cluster0.8xo0k1v.mongodb.net/?retryWrites=true&w=majority";
const databasename = "test"


const dataArray = [];

MongoClient.connect(url).then((client) => {
  
        const connect = client.db(databasename);
      
        // Connect to collection
        const collection = connect.collection("data");
      
        collection.find({})
            .toArray().then((dataObjects) => {
                        // console.log(dataObjects[10]);
                dataObjects.forEach((data) => {
                    dataArray.push(data);
                    })
                    // console.log(dataArray)
            });

    }).catch((err) => {
        console.log(err.Message);
    })
    
module.exports = dataArray;
   
    
   

// const mongoose = require("mongoose");

// const dataSchema = new mongoose.Schema({
//     end_year: String,
//     intensity: Number,
//     sector: String,
//     topic: String,
//     insight: String,
//     url: String,
//     region: String,
//     start_year: String,
//     impact: String,
//     added: String,
//     published: String,
//     country: String,
//     relevance: Number,
//     pestle: String,
//     source: String,
//     title: String,
//     likelihood: Number
// });



// // Create a model based on the schema
// const Data = mongoose.model("Data", dataSchema);

// // Connect to the MongoDB database
// mongoose.connect('mongodb+srv://ritesh:ritesh@cluster0.8xo0k1v.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log("Connection successful");

//     // Query the database
//     Data.find({}, (err, documents) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log("documents",documents);
//         }
//     });
// }).catch((err) => console.log(`No connection: ${err.message}`));



