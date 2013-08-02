Ext.define('Demonstracao.servicos.barrasDeFerramentas.crud.BarraDeListagem', {
    extend: 'Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDeListagem',
    
    constructor: function (config) {
        var me = this;
        me.config = config.config;

        me.comandos = [
            me.carregarBotaoDeNovo(me),
            me.carregarBotaoDeEdicao(me),
            me.carregarBotaoDeExcluir(me)];
    }
});
