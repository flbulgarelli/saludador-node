var saludador = require('../models/saludador');

describe("Saludador", function() {
  it("saluda a la persona dicendo 'hola'", function() {
    expect(saludador.saludar("Pepe")).toBe("Hola Pepe!");
  });
  it("despueda a la persona diciendo 'adios'", function() {
    expect(saludador.despedir("Pepe")).toBe("Adios Pepe :(");
  });
});
