Ext.Loader.setPath({
    'Demonstracao': 'app'
});

Ext.require([
    'Demonstracao.Config',
    'Demonstracao.servicos.uteis.ControleDeAbas',
    'Demonstracao.servicos.uteis.ControleDeJanelas',
    'Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentas',
    'Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentasBotoes',


    'Demonstracao.servicos.barrasDeFerramentas.crud.BarraDeListagem',
    'Demonstracao.servicos.barrasDeFerramentas.crud.BarraDePersistencia',

    'Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDeListagem',
    'Demonstracao.servicos.barrasDeFerramentas.util.BarraBaseDePersistencia'
]);

Ext.define('Demonstracao.Application', {
    name: 'Demonstracao',

    extend: 'Ext.app.Application',

    views: [
        
    ],

    controllers: [
        'cockpit.LinksController',
        
        //Domínio
        'dominio.unicornio.UnicornioController',
        'dominio.especiaria.EspeciariaController'
    ],

    stores: [
    
    ]
});
