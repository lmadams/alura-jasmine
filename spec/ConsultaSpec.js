describe("Consulta", function () {

    var guilherme;

    beforeEach(function () {
        guilherme = new PacienteBuild().constroi();
    });

    describe("consultas do tipo retorno", function () {

        it("nao deve cobrar nada de se for um retorno", function () {
            var consulta = new Consulta(guilherme, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("consulta com procedimentos", function () {
        it("deve cobrar 25 por cada procedimento comum", function () {
            var consulta = new Consulta(guilherme, ["proc1", "proc2"], false, false);

            expect(consulta.preco()).toEqual(50);
        });

        it("deve cobrar preco especifico dependendo do procedimento", function () {
            var consulta = new Consulta(guilherme,
                ["procedimento-comun", "raio-x", "procedimento-comun", "gesso"], false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });

        it("deve cobrar precos apenas especificos ", function () {
            var consulta = new Consulta(guilherme,
                ["raio-x", "gesso", "raio-x"], false, false);

            expect(consulta.preco()).toEqual(55 + 32 + 55);
        });
    });
});