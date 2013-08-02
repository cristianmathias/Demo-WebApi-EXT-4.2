Ext.define('Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDeListagem', {
    carregarBotaoDeNovo: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Novo',
            icone: 'iconeNovo',
            tamanho: 3,
            acao: cfg.contexto.criarJanelaDeNovoDaBarraDeFerramentas,

            tooltip: 'Novo (Ctrl + Alt + I)',
            teclaDeAtalho: Ext.EventObject.I,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    },

    carregarBotaoDeEdicao: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Editar',
            icone: 'iconeEditar',
            tamanho: 3,
            acao: cfg.contexto.criarJanelaDeEdicaoDaBarraDeFerramentas,
            grupo: 'grupo2',

            tooltip: 'Editar (Ctrl + Alt + E)',
            teclaDeAtalho: Ext.EventObject.E,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    },

    carregarBotaoDeExcluir: function (contexto) {
        var me = contexto,
            cfg = Ext.apply({}, me.config);

        cfg.comando = {
            label: 'Excluir',
            icone: 'iconeExcluir',
            tamanho: 3,
            acao: cfg.contexto.excluirDaBarraDeFerramentas,

            tooltip: 'Excluir (Deletar) (Ctrl + Alt + D)',
            teclaDeAtalho: Ext.EventObject.D,
            usaCtrl: true,
            usaAlt: true
        };

        return Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes.carregarBotao(cfg);
    }
});
