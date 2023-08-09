const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/book");
const bookArray = require("./bookArray");
const Book = require("./models/book");
const Bond = require("./models/bond");
const cors = require("cors");

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
app.use(cors());

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
let matured_arr = [];
let near_matured_arr = [];
let not_matured_arr = [];
let obj = {};
let a = 0,
  b = 0,
  c = 0;
// importData();
app.get("/", async (req, res) => {
  const result = await Bond.find({});
  console.log(result);
  // res.status(200).json(result);

  result.forEach((ele) => {
    const currentDate = new Date();
    const maturityDateObj = ele.maturitydate;
    const timeDiff = currentDate - maturityDateObj;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysRemaining > 0 && a < 5) {
      matured_arr.push(ele);
      a++;
    } else {
      if (-daysRemaining > 180 && b < 5) {
        not_matured_arr.push(ele);
        b++;
      } else if (c < 5) {
        near_matured_arr.push(ele);
        c++;
      }
    }
  });

  obj["Matured"] = matured_arr;
  obj["Near_matured"] = near_matured_arr;
  obj["Not_matured"] = not_matured_arr;

  res.status(201).json(obj);
  console.log("success");
});

app.get("/getBonds/:id", async (req, res) => {
  // console.log(req.params.id);
  const list = await Bond.find({ _id: req.params.id });
  res.status(200).json(list[0])
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

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
