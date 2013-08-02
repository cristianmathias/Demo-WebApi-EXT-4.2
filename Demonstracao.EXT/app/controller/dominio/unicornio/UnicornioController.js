Ext.define('Demonstracao.controller.dominio.unicornio.UnicornioController', {
    extend: 'Ext.app.Controller',

    mixins: ['Demonstracao.servicos.mixins.JanelaDeListagem',
                'Demonstracao.servicos.mixins.JanelaDeNovo',
                'Demonstracao.servicos.mixins.JanelaDeEdicao'
    ],

    views: [    'dominio.unicornio.ListagemDeUnicornio',
                'dominio.unicornio.FormularioDeUnicornio'],

    stores: [   'dominio.UnicornioStore'],

    models: [   'dominio.unicornio.Unicornio'],
    
    listeners:
    {
        configurarRegrasParaPersistencia: function (config) {
            config.janela = 'formularioDeUnicornio';
            config.tipoDaModel = Demonstracao.model.dominio.unicornio.Unicornio;
            config.tituloDaJanela = 'Unicórnio';
            config.complementoDoTituloDaJanela = 'Nome';
            config.barraDeFerramentas = 'crud.BarraDePersistencia';
        }
        , configurarJanelaDeListagem: function (config) {
            config.tituloDaJanela = 'Unicórnios';
            config.barraDeFerramentas = 'crud.BarraDeListagem';
        }
    },
    
    init: function () {
        this.control({
            'listagemDeUnicornio': {
                AcaoDoMenu: function (janela) {
                    var me = this;
                    
                    me.criarJanelaDeListagem(janela);
                },
                
                itemdblclick: function (janela, registro) {
                    var me = this;

                    me.criarJanelaDeEdicao(registro);
                }
            }
        });
    }
});
