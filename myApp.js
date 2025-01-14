require('dotenv').config();
const mongoose = require('mongoose');
const mongooseURI = process.env.MONGO_URI
const Schema = mongoose.Schema;

mongoose.connect(mongooseURI, { useNewUrlParser: true, useUnifiedTopology: true });

let personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let tomBrown = new Person({
    name: "Thomas Brown",
    age: 25,
    favoriteFoods: ["Pizza", "Chocolate", "Pineapple"]
  });

  tomBrown.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (function (err, people) {
    if (err) return console.error(err);
    done(null, people);
  }));
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (function(err, personFound) {
    if (err) return console.error(err);
    done(null, personFound);
  }));
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (function(err, personFound) {
    if (err) return console.error(err);
    done(null, personFound);
  }));
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (function(err, personFound) {
    if (err) return console.error(err);
    done(null, personFound);
  }))
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({_id: personId}, (function(err, personFound) {
    if (err) return console.error(err);
    
    personFound.favoriteFoods.push(foodToAdd);

    personFound.save(function (err, updatedPerson) {
      if (err) return console.error(err);
      done(null, updatedPerson);
    });
  }));
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
