function Agendamento() {

    var clazz = {

        para: function (consulta) {
            var umDiaEmMilleseundo = 1000 * 60 * 60 * 24;
            var vinteDiasEmMilliSegundos = umDiaEmMilleseundo * 20;
            var novaData = new Date(consulta.getData().getTime() + vinteDiasEmMilliSegundos);

            while (novaData.getDay() === 0 || novaData.getDay() === 6) {
                novaData = new Date(novaData.getTime() + umDiaEmMilleseundo);
            }

            var novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);

            return novaConsulta;
        }
    };

    return clazz;
}