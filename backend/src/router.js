const express = require("express");

const router = express.Router();

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
