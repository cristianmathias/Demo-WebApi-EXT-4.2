Ext.define('Demonstracao.controller.dominio.especiaria.EspeciariaController', {
    extend: 'Ext.app.Controller',

    mixins: [   'Demonstracao.servicos.mixins.JanelaDeListagem',
                'Demonstracao.servicos.mixins.JanelaDeNovo',
                'Demonstracao.servicos.mixins.JanelaDeEdicao'
    ],

    views: [    'dominio.especiaria.ListagemDeEspeciaria',
                'dominio.especiaria.FormularioDeEspeciaria'],

    stores: [   'dominio.EspeciariaStore'],

    models: [   'dominio.especiaria.Especiaria'],
    
    listeners:
    {
        configurarRegrasParaPersistencia: function (config) {
            config.janela = 'formularioDeEspeciaria';
            config.tipoDaModel = Demonstracao.model.dominio.especiaria.Especiaria;
            config.tituloDaJanela = 'Especiaria';
            config.complementoDoTituloDaJanela = 'Nome';
            config.barraDeFerramentas = 'crud.BarraDePersistencia';
        }
        , configurarJanelaDeListagem: function (config) {
            config.tituloDaJanela = 'Especiaria';
            config.barraDeFerramentas = 'crud.BarraDeListagem';
        }
    },
    
    init: function () {
        this.control({
            'listagemDeEspeciaria': {
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
