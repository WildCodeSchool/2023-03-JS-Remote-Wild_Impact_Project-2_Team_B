const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const connection = require("./database");

connection
  .getConnection()
  .then(() => {
    console.info("Can reach database");
  })
  .catch((err) => {
    console.error(err);
  });

router.get("/", (req, res) => {
  res.status(200).send("Ceci est la HomePage");
});

router.get("/heroes", (req, res) => {
  connection
    .query("SELECT * FROM heroe")
    .then(([result]) => {
      // donne moi le premier élément du tableau et appelle le result
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/heroes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  connection
    .query(`SELECT * FROM heroe WHERE id = ${id}`)
    .then(([result]) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
