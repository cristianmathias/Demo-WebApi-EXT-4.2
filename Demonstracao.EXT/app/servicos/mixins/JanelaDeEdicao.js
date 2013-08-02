Ext.define('Demonstracao.servicos.mixins.JanelaDeEdicao', {
    criarJanelaDeEdicao: function (registro, config) {
        var cfg = Ext.apply({}, config),
            me = cfg.contexto ? cfg.contexto : this; // Quando vem da barra

        cfg.contexto = me;

        me.fireEvent('configurarRegrasParaPersistencia', cfg);
        me.fireEvent('configurarJanelaDeEdicao', cfg);

        cfg.model = registro;

        if (cfg.complementoDoTituloDaJanela !== undefined && cfg.model !== undefined) {
            cfg.tituloDaJanela = 'Edição do ' + cfg.tituloDaJanela + ': ' + cfg.model.get(cfg.complementoDoTituloDaJanela);
        }

        var aba = Demonstracao.servicos.uteis.ControleDeJanelas.obterJanelaOuCriarNova(cfg);

        if (!aba) // falso se a aba de edição já existir
            return;

        cfg.janela.loadRecord(cfg.model);

        if (aba) {
            me.fireEvent('antesDeEditarFormulario', aba, cfg);

            Demonstracao.servicos.uteis.ControleDeAbas.adicionarAba(aba);

            me.fireEvent('depoisDeEditarFormulario', aba);
        }
    },

    criarJanelaDeEdicaoDaBarraDeFerramentas: function (config) {
        var registro = config.janela.getSelectionModel().selected.items[0];

        config.contexto.criarJanelaDeEdicao(registro, config);
    }
});
