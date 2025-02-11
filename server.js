const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

class Fahrrad {
  constructor(bezeichnung = "Standardmodell", preis = 0.0, reifengroesse = "26 Zoll") {
    this._bezeichnung = bezeichnung;
    this._preis = preis;
    this._reiffengroesse = reifengroesse;
  }

  get bezeichung() {
    return this._bezeichnung;
  }

  set bezeichnung(value) {
    this._bezeichnung = value;
  }

  get preis() {
    return this._preis;
  }

  set preis(value) {
    this._preis = value;
  }

  get reifengroesse() {
    return this._bezeichnung;
  }

  set reifengroesse(value) {
    this._reiffengroesse = value;
  }
}

class Dreirad extends Fahrrad {
  constructor(bezeichnung = "Standardmodell", preis = 0.0, reifengroesse = "26 Zoll", reiffengroesseVorne = "32 Zoll") {
    super(bezeichnung, preis, reifengroesse);
    this._reiffengroesseVorne = reiffengroesseVorne;
  }

  get reifengroesseVorne() {
    return this._reiffengroesseVorne;
  }

  set reifengroesse(value) {
    this._reiffengroesseVorne = value;
  }
}

app.post("/preis", function (req, res) {
  const raeder = req.params.raeder;
  let nettoSumme = 0;
  raeder.array.forEach((rad) => {
    nettoSumme += rad.preis();
  });
  const mwst = summe * 0.19;
  const summe = nettoSumme + mwst;
  res.json({
    summe,
    mwst,
  });
});

app.listen(port, () => {
  console.log("Server läuft auf Port " + port);
});
