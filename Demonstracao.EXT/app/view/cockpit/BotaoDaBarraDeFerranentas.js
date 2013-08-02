Ext.define('Demonstracao.view.cockpit.BotaoDaBarraDeFerranentas', {
    extend: 'Ext.button.Button',
    xtype: 'botaoDaBarraDeFerranentas',
    
    initComponent: function () {
        var me = this;
        
        if (me.rowspan && me.rowspan == 3) {
            me.scale = 'large';
            me.iconAlign = 'top';
        }
        
        me.callParent(arguments);
    }
});