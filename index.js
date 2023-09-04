import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var arr=[];
const today = new Date();
var month = today.getMonth();
var day = today.getDay();
switch(day){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wedenceday";
    break;
  case 4:
    day = "Thurseday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    day = "Saterday";
    break;
}
switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  default:
    month = "December";
    break;
}
app.get("/", (req, res) => {
  res.render("index.ejs", { m: month ,d:day,da:today.getDate(),arr1:arr});
});
app.post("/add", (req, res) => {
  arr.push(req.body["text1"]);
  res.render("index.ejs", { m: month ,d:day,da:today.getDate(),arr1:arr});
});

app.listen(port, () => console.log(`Server Started at Port : ${port}`));
