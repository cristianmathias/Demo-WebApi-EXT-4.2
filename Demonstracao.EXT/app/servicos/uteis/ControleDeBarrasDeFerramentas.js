Ext.define('Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentas', {
    singleton: true,

    areaDasBarrasDeFerramentas: function () {
        return Ext.ComponentQuery.query('barraDeFerramentas')[0];
    },
   
    excluirBarrasAntigas: function (areaDasBarras) {
        areaDasBarras.removeAll();
    },
    
    montarBarraDeFerramentas: function (config) {
        var me = this,
            cfg = config,
            areaDasBarras = me.areaDasBarrasDeFerramentas();
        
        //Instancia a aba da barra de ferramenta
        var abaDeFerramentas = Ext.widget('aba');
        abaDeFerramentas.title = 'Opções';

        //Instancia a barra de ferramenta
        var barraDeFerramentas = Ext.create('Demonstracao.servicos.barrasDeFerramentas.' + cfg.barraDeFerramentas, {config : cfg});

        //Popula a aba com os botões da barra
        me.popularBarraDeFerramentas(abaDeFerramentas, barraDeFerramentas);

        areaDasBarras.add(abaDeFerramentas);
    },
    
    popularBarraDeFerramentas: function (abaDeFerramentas, barraDeFerramentas) {
        var me = this;
        var comandosDaBarra = barraDeFerramentas.comandos;
        var gruposDaBarra = me.obterGrupos(comandosDaBarra);

        //Para cada grupo da barra
        for (var i = 0; i < gruposDaBarra.length; i++) {
            var nomeGrupo = gruposDaBarra[i];

            var comandosDoGrupo = me.obterComandosDoGrupo(comandosDaBarra, nomeGrupo);
            var grupo = me.criarGrupoDeBotoes(nomeGrupo, me.calcularColunasParaGrupoDeBototes(comandosDoGrupo));
            abaDeFerramentas.add(me.prencherGrupoDeBotoes(grupo, comandosDoGrupo));
        }
    },
    
    //
    // Funções auxiliares   |
    //                      V
    obterGrupos: function (listaDeComandos) {
        var grupos = new Array();

        for (var i = 0; i < listaDeComandos.length; i++) {
            var grupo = listaDeComandos[i].grupo;
            if (Ext.Array.indexOf(grupos, grupo) == -1) {
                grupos.push(grupo);
            }
        }

        return grupos;
    },

    obterComandosDoGrupo: function (comandosDaBarra, nomegrupo) {
        var grupos = new Array();

        for (var i = 0; i < comandosDaBarra.length; i++) {
            var grupo = comandosDaBarra[i].grupo;
            if (grupo == nomegrupo) {
                grupos.push(comandosDaBarra[i]);
            }
        }

        return grupos;
    },
    
    criarGrupoDeBotoes: function (nome, colunas) {
        var grupo = Ext.create('Ext.container.ButtonGroup', {
            columns: colunas,
            height: '90px'
        });
        return grupo;
    },
    
    calcularColunasParaGrupoDeBototes: function (listaDeComandos) {
        var colunas = 0;
        var linhas = 0;

        for (var i = 0; i < listaDeComandos.length; i++) {
            var botao = listaDeComandos[i];
            if (botao.rowspan && botao.rowspan == 3) {
                ++colunas;
                linhas = 0;
            } else {
                if (linhas > 2 || linhas == 0) {
                    if (linhas > 2) {
                        linhas = 0;
                    }
                    ++colunas;
                }
                ++linhas;
            }
        }
        return colunas;
    },
    
    prencherGrupoDeBotoes: function (grupo, listaDeComandos) {
        for (var i = 0; i < listaDeComandos.length; i++) {
            var botao = listaDeComandos[i];
            grupo.add(botao);
        }
        return grupo;
    }
});



