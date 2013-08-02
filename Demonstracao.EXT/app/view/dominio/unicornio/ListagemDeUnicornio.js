Ext.define('Demonstracao.view.dominio.unicornio.ListagemDeUnicornio', {
    extend: 'Demonstracao.view.uteis.ListagemBase',
    xtype: 'listagemDeUnicornio',
    forceFit: true,
    
    store: 'Demonstracao.store.dominio.UnicornioStore',

    columns: [
        { dataIndex: 'Id', text: 'Id' },
        { dataIndex: 'Nome', text: 'Nome', }
    ]
});