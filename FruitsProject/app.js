//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry,  no name specified!"]
    },
    rating: {
        type: Number,
        min: [1, "out of range"],
        max: [10, "out of range"]
    },
    review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."

});

//fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
    name: "Mango",
    score: 9,
    review: "Decent fruit."
});

mango.save();

Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfuly updated the document");
    }
})

/*
const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple

});
*/
//person.save();


Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);

    } else {


        mongoose.connection.close();

        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
})

/*
Fruit.updateOne({ _id: "5f9022937ce2a04680cd71bc" }, { name: "Peach" }, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully updated the document.");
    }
})
*/
/*
Fruit.deleteOne({ name: "Peach" }, function(err) {
    if (err) {
        console.log(err);

    } else {
        console.log("Successfully deleted the record");
    }
})
*/

/*

Person.deleteMany({ name: "Amy" }, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted all the document");
    }
})
*/