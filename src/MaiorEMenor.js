function MaiorEMenor() {
    var menor;
    var maior;

    var clazz = {

        encontra: function (numeros) {
            maior = Number.MIN_VALUE;
            menor = Number.MAX_VALUE;

            numeros.forEach(function (num) {
                if (num < menor) {
                    menor = num;
                }

                if (num > maior) {
                    maior = num;
                }
            })
        },

        pegaMenor: function () {
            return menor;
        },

        pegarMaior: function () {
            return maior;
        }

    };

    return clazz;
}