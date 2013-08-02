Ext.define('Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDePersistencia', {
    carregarBotaoDeSalvar: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Salvar',
            icone: 'iconeSalvar',
            tamanho: 3,
            acao: cfg.contexto.salvarDaBarraDeFerramentas,//salvarModelo,

            tooltip: 'Salvar (Ctrl + Alt + S)',
            teclaDeAtalho: Ext.EventObject.S,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    },

    carregarBotaoDeSalvarENovo: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Salvar e Novo',
            icone: 'iconeSalvar',
            tamanho: 3,
            acao: cfg.contexto.salvarDaBarraDeFerramentas,//salvarModeloEAbrirJanela,

            tooltip: 'Salvar e Novo (Ctrl + Alt + N)',
            teclaDeAtalho: Ext.EventObject.N,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    },

    carregarBotaoDeSalvarEFechar: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Salvar e Fechar',
            icone: 'iconeSalvar',
            tamanho: 3,
            acao: cfg.contexto.salvarDaBarraDeFerramentas,//salvarModeloEFecharJanela,

            tooltip: 'Salvar e Fechar (Ctrl + Alt + F)',
            teclaDeAtalho: Ext.EventObject.F,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    }
});
