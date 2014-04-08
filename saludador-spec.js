var saludador = require('./saludador');

describe("Saludador", function() {
  it("saluda a la persona dicendo hola", function() {
    expect(saludador.saludar("Pepe")).toBe("Hola Pepe!");
  });
});
