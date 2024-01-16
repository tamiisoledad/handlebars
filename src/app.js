import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();
const users = [
  {
    name: "Pepe",
    last_name: "Martinez",
    age: 18,
    email: "pepemartinez@gmail.com",
    tel: "0303456",
  },
  {
    name: "Ana",
    last_name: "Gomez",
    age: 25,
    email: "anagomez@gmail.com",
    tel: "0123456",
  },
  {
    name: "Carlos",
    last_name: "López",
    age: 30,
    email: "carloslopez@gmail.com",
    tel: "0789123",
  },
  {
    name: "Laura",
    last_name: "Fernández",
    age: 22,
    email: "laurafernandez@gmail.com",
    tel: "0456789",
  },
  {
    name: "Javier",
    last_name: "Rodriguez",
    age: 28,
    email: "javierrodriguez@gmail.com",
    tel: "0567890",
  },
];

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const indice = Math.floor(Math.random() * users.length);

  res.render("index", users[indice]);
});

const server = app.listen(8080, () =>
  console.log("Server running in port 8080")
);
