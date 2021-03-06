Ext.define('Demonstracao.view.uteis.ListagemBase', {
    extend: 'Ext.grid.Panel',
    xtype: 'listagemBase',
    
    initComponent: function () {
        var me = this;

        me.store = Ext.create(me.store);

        this.dockedItems = [
        {
            xtype: 'pagingtoolbar',
            store: me.store,
            dock: 'bottom',
            displayInfo: true
        }];

        me.callParent(arguments);

    }
});