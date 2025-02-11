const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/preis", function (req, res) {
  const raeder = req.body;
  let nettoSumme = 0;
  raeder.forEach((rad) => {
    nettoSumme += rad._preis;
  });
  const mwst = nettoSumme * 0.19;
  const summe = nettoSumme + mwst;
  res.json({
    summe,
    mwst,
  });
});

app.listen(port, () => {
  console.log("Server läuft auf Port " + port);
});
