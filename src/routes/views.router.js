import express from 'express';
const router = express.Router();

const users = [
    {
      name: "Pepe",
      last_name: "Martinez",
      age: 18,
      email: "pepemartinez@gmail.com",
      tel: "0303456",
      role: "admin"
    },
    {
      name: "Ana",
      last_name: "Gomez",
      age: 25,
      email: "anagomez@gmail.com",
      tel: "0123456",
      role: "user"
    },
    {
      name: "Carlos",
      last_name: "López",
      age: 30,
      email: "carloslopez@gmail.com",
      tel: "0789123",
      role: "user"
    },
    {
      name: "Laura",
      last_name: "Fernández",
      age: 22,
      email: "laurafernandez@gmail.com",
      tel: "0456789",
      role: "admin"
    },
    {
      name: "Javier",
      last_name: "Rodriguez",
      age: 28,
      email: "javierrodriguez@gmail.com",
      tel: "0567890",
      role: "user"
    },
  ];

  const food = [
      {name: 'Hamburguesa', price: "100"},
      {name: 'Banana', price: "20"},
      {name: 'Soda', price: "40"},
      {name: 'Ensalada', price: "120"},
      {name: 'Pizza', price: "150"},
  ]

router.get("/", (req, res) => {
    const indice = Math.floor(Math.random() * users.length);

    res.render("index", {
        user: users[indice],
        style: 'index.css',
        isAdmin: users[indice].role === 'admin',
        food
    });
})

export default router;