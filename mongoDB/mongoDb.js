
const mongoose = require("mongoose");
const config = require("./config")

//Connection function
async function connect (app) {
    mongoose.connect(config.url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(config.port, ()=>console.log("Listning on port 3000")))
    .catch(err => console.error(err));   
}

//Creating a schema
const restauSchema = new mongoose.Schema({
    address: {
        building: String,        
        coord:[
            {
                0: Number, 
                1: Number,
            }
        ],
        street: String,
        
        zipcode: String,
    },
    borough: String,
     
    cuisine:String,
      
    grades:[
          {
              0: {
                  date: Date,
                  grade: String,
                  score: Number, 
              }
          },
          {
            1: {
                date: Date,
                grade: String,
                score: Number, 
            }
        },
        {
            2: {
                date: Date,
                grade: String,
                score: Number, 
            }
        },
        {
            3: {
                date: Date,
                grade: String,
                score: Number, 
            }
        },       
      ],
    name: String,
    restaurant_id: String,
});

//Creating a model
const Restaurant = mongoose.model("Restaurant", restauSchema);

//MongoDB requests
//get One collection
async function getOne() {
    const restau = await Restaurant.findOne();
    return restau;
}

//get 100 collections
async function getHundred() {
    const restau = await Restaurant.find().limit(100);
    return restau;
}

//get by name
async function getByName(name) {
    const restau = await Restaurant.find({name : name});
    return restau;
}

//Export function
module.exports.connect = connect;
module.exports.getOne = getOne;
module.exports.getHundred = getHundred;
module.exports.getByName = getByName;