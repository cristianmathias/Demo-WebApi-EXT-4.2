Ext.define('Demonstracao.view.dominio.especiaria.ListagemDeEspeciaria', {
    extend: 'Demonstracao.view.uteis.ListagemBase',
    xtype: 'listagemDeEspeciaria',
    forceFit: true,
    
    store: 'Demonstracao.store.dominio.EspeciariaStore',

    columns: [
        { dataIndex: 'Id', text: 'Id' },
        { dataIndex: 'Nome', text: 'Nome', },
        { dataIndex: 'Data', text: 'Data', xtype: 'datecolumn' },
        { dataIndex: 'Valor', text: 'Valor'},
        { dataIndex: 'Comestivel', text: 'É comestível?', xtype: 'checkcolumn' }

    ]
});