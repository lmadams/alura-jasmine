describe("Paciente", function () {

    it("deve calcular o imc", function () {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

        var imc = guilherme.imc();
        expect(imc).toEqual(72 / (1.82 * 1.82));
    });

    it("deve calcular os batimentos", function () {
        var guilherme = new Paciente("Guilherme", 28, 72, 1.82);
        expect(guilherme.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
    });


});