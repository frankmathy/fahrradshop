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

const raeder = [new Fahrrad("BMX", 500), new Dreirad("Mattel", 50)];
