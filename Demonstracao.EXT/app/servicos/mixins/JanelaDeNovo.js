Ext.define('Demonstracao.servicos.mixins.JanelaDeNovo', {
    criarJanelaDeNovo: function (config) {
        var cfg = Ext.apply({}, config),
            me = cfg.contexto ? cfg.contexto : this; // Quando vem da barra

        cfg.contexto = me;

        me.fireEvent('configurarRegrasParaPersistencia', cfg);
        me.fireEvent('configurarJanelaDeNovo', cfg);

        cfg.tituloDaJanela = 'Cadastro de ' + cfg.tituloDaJanela;

        cfg.model = cfg.tipoDaModel.create();

        var aba = Demonstracao.servicos.uteis.ControleDeJanelas.obterJanelaOuCriarNova(cfg);

        if (aba) {
            me.fireEvent('antesDeCriarNovoFormulario', aba, cfg);

            Demonstracao.servicos.uteis.ControleDeAbas.adicionarAba(aba);

            me.fireEvent('depoisDeCriarNovoFormulario', aba);
        }
    },

    salvar: function (config) {
        var cfg = config;
        var formulario = cfg.janela.getForm();
        
        formulario.updateRecord(cfg.model);
        var erros = cfg.model.validate();

        if (erros.isValid()) {
            cfg.model.save({
                success: function (registro, action) {
                    if (action.action == "update")
                        Ext.Msg.alert("Sucesso", cfg.tituloDaJanela + " editado com sucesso.");
                    else
                        Ext.Msg.alert("Sucesso", "Registro inserido com sucesso.");
                }
            });
        } else {
            formulario.markInvalid(erros);
            cfg.model.reject();
        }
    },

    criarJanelaDeNovoDaBarraDeFerramentas: function (config) {
        config.contexto.criarJanelaDeNovo(config);
    },

    salvarDaBarraDeFerramentas: function (config) {
        config.contexto.salvar(config);
    }
});
