Ext.define('Demonstracao.servicos.uteis.ControleDeJanelas', {
    singleton: true,

    obterJanelaOuCriarNova: function (config) {
        var cfg = config;

        //Cria Id da aba
        cfg.idDaAba = cfg.model ?
            cfg.janela + '_' + cfg.model.getId() :
            cfg.tituloDaJanela;

        //Verifica se janela já existe e foca a aba
        var controleDeAbas = Demonstracao.servicos.uteis.ControleDeAbas;
        if (controleDeAbas.verificarSeJanelaJaExiste(cfg.idDaAba)) {
            controleDeAbas.setarAbaExistente(cfg.idDaAba);
            return null;
        }

        //Se não existe cria a janela
        if (Ext.isString(cfg.janela)) {
            cfg.janela = Ext.widget(config.janela, config.configuracaoParaCriacao);
        } else {
            cfg.janela = config.janela;
        }

        //Cria a aba para a janela
        var aba = Demonstracao.servicos.uteis.ControleDeAbas.criarAba(cfg);

        return aba;
    }
});
