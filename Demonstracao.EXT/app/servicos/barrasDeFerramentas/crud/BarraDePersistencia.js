Ext.define('Demonstracao.servicos.barrasDeFerramentas.crud.BarraDePersistencia', {
    extend: 'Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDePersistencia',
    
    constructor: function (config) {
        var me = this;
        me.config = config.config;

        me.comandos = [
            me.carregarBotaoDeSalvar(me),
            me.carregarBotaoDeSalvarENovo(me),
            me.carregarBotaoDeSalvarEFechar(me)
        ];
    }
});
