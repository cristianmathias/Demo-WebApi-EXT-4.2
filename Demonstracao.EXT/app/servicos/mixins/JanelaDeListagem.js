Ext.define('Demonstracao.servicos.mixins.JanelaDeListagem', {
    criarJanelaDeListagem: function (janela) {
        var cfg = Ext.apply({}, undefined),
            me = this;

        cfg.janela = janela;
        cfg.contexto = me;

        me.fireEvent('configurarJanelaDeListagem', cfg);

        cfg.tituloDaJanela = 'Listagem de ' + cfg.tituloDaJanela;

        var aba = Demonstracao.servicos.uteis.ControleDeJanelas.obterJanelaOuCriarNova(cfg);

        if (aba) {
            me.fireEvent('antesDeCriarJanelaDeListagem', aba, cfg);

            Demonstracao.servicos.uteis.ControleDeAbas.adicionarAba(aba);

            cfg.janela.store.load();

            me.fireEvent('depoisDeCriarJanelaDeListagem', aba);
        }
    },

    excluirDaGrid: function (config) {
        var cfg = config;

        cfg.janela.getSelectionModel().selected.each(function (item) {
            item.destroy();
        });
    },

    excluirDaBarraDeFerramentas: function (config) {
        config.contexto.excluirDaGrid(config);
    }
});




