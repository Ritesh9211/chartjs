const express = require('express');
const router = express.Router();
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
    
   

router.get('/',(req,res)=>{
    res.send("Home page from router");
});




//get user data for contact and home page
router.get('/getdata', (req, res) => {
    res.json(dataArray); // Send dataArray as JSON
});

module.exports = router;