describe("MaiorEMenor", function () {

    it("Deve entender numeros em ordem nao sequencial", function() {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5, 15, 7, 9]);

        expect(algoritmo.pegarMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("Deve entender numeros em ordem crescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([5, 6, 7, 8]);

        expect(algoritmo.pegarMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("Deve entender numeros em ordem decrescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([8, 7, 6, 5]);

        expect(algoritmo.pegarMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("Deve entender apenas um numeros na lista", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra([8]);

        expect(algoritmo.pegarMaior()).toEqual(8);
        expect(algoritmo.pegaMenor()).toEqual(8);
    });
});