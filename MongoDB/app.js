const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "apple",
  rating: 10,
  review: "pretty solid asa fruit"
});
// apple.save()

        // find 
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  }
  else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    })
  }
})
              // update
// Fruit.updateOne({ name: "peach" },{ _id: "62f4fcf2df1962149834935f" }, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("successfully updated the document");
//   }
// })
            //  deleteOne
// Fruit.deleteOne({name:"peach"},function (err) {
//   if(err){
//     console.count(err)
//   }else{
//     console.log("successfully deleted the document");
//   }
// })



// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });

// const orange = new Fruit({
//   name: "orange",
//   rating: 7,
//   review: "pretty solid as a fruit"
// });
// const banana = new Fruit({
//   name: "banana",
//   rating: 10,
//   review: "The best fruit!"
// });
      
            // insert 
// Fruit.insertMany([apple,banana,orange,kiwi],function (err){
// if (err){
//   console.log(err);
// }
// else{
//   console.log("Succesfully saved all the fruits to fruitsdb");
// }
// })



const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit:fruitSchema         //relationship with fruitSchema
})
const Person = mongoose.model("Person", personSchema)

// const person = new Person({
//   name: "john",
//   age: 20
// })
//person.save()
const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit:apple
});
//person.save()

            //  find
// Person.find(function (err,person) {
//   if(err){
//     console.log(err)
//   }
//   else{
//     person.forEach(function(personsname) {
//       console.log(personsname.name);
      
//     })
//   }
// })


        //relationship
Person.updateOne({name:"john"},{favoriteFruit:apple},function(err) {
 if(err){
  console.log(err);
 }
 else{
  console.log("successfully updated")
 }
})


                //deleteMany
// Person.deleteMany({name:"john"},function (err) {
//   if(err){
//     console.log(err)
//   }
//   else{
//    console.log("delete success fully");
//   }
// })