const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/book");
const bookArray = require("./bookArray");
const Book = require("./models/book");
const Bond = require("./models/bond");
// const myDB = client.db("hackathon");
// const coll = myDB.collection("Book");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://group15:hackathon123@cluster0.ykmfl4t.mongodb.net/hackathon?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const importData = async () => {
  try {
    await userModel.deleteMany();
    await userModel.insertMany(bookArray);
    console.log("data imported!!!");
  } catch (e) {
    console.log(e.message);
  }
};

// importData();

app.get("/", async (req, res) => {
  Bond.find({}).then((bonds) => {
    res.status(201).json(bonds);
    console.log(bonds);
  });
});

app.post("/createBook", async (req, res) => {
  const bookId = req.body.bookId;
  const bookName = req.body.bookName;
  Book.create({
    bookname: bookName,
    id: bookId,
  }).then((book) => res.status(200).json(book));
});

app.post("/createBond", async (req, res) => {
  const bondId = req.body.id;
  const type = req.body.type;
  const issuer = req.body.issuer;
  const maturitydate = req.body.maturitydate;
  const interestrate = req.body.interestrate;
  const facevalue = req.body.facevalue;
  const tenure = req.body.tenure;
  Bond.create({
    bondId: bondId,
    type: type,
    issuer: issuer,
    maturitydate: maturitydate,
    interestrate: interestrate,
    facevalue: facevalue,
    tenure: tenure,
  }).then((bond) => res.status(200).json(bond));
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
