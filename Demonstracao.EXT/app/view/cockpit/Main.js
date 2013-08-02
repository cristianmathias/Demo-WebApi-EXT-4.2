Ext.define('Demonstracao.view.cockpit.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.Border',
        'Demonstracao.view.cockpit.AreaDeTrabalho',
        'Demonstracao.view.cockpit.BarraDeFerramenta',
        'Demonstracao.view.cockpit.Links',
        'Demonstracao.view.cockpit.Cabecalho',
        'Demonstracao.view.cockpit.Aba',
        'Demonstracao.view.cockpit.BotaoDaBarraDeFerranentas',

        'Demonstracao.view.uteis.ListagemBase',
        'Demonstracao.view.uteis.FormularioBase',
        
        'Ext.tab.Panel'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {   
            xtype: 'links'            
        },
        {
            xtype: 'areaDeTrabalho'            
        },
        {
            xtype: 'cabecalho'
        }
    ]
});