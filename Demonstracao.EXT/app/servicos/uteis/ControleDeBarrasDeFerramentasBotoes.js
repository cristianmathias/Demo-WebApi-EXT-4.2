Ext.define('Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes', {
    singleton: true,

    carregarBotao: function (config) {
        var cfg = config,
            comando = cfg.comando;
        
        // Cria o botão
        var botao = Ext.widget('botaoDaBarraDeFerranentas', { config: cfg, text: comando.label, tooltip: comando.tooltip, iconCls: comando.icone, rowspan: comando.tamanho });

        comando.grupo = comando.grupo ? comando.grupo : 'default';

        // isola função e cria os atalhos
        var funcaoDoBotao = function () {
            comando.acao(cfg);
        };

        botao.on(
            'click',
            function () { funcaoDoBotao(); }
        );

        if (comando.teclaDeAtalho) {
            var map = new Ext.util.KeyMap(Ext.getDoc(), {
                key: comando.teclaDeAtalho,
                ctrl: comando.usaCtrl === undefined ? false : comando.usaCtrl,
                alt: comando.usaAlt === undefined ? false : comando.usaAlt,
                shift: comando.usaShift === undefined ? false : comando.usaShift,
                handler: funcaoDoBotao,
                defaultEventAction: 'preventDefault'
            });

            botao.map = map;
        }

        return botao;
    }
});



