Ext.define('Demonstracao.view.cockpit.Cabecalho', {
    extend: 'Ext.panel.Panel',
    xtype: 'cabecalho',
    height: 115,
    region: 'north',
    layout: 'fit',
    items: [{ xtype: 'barraDeFerramentas' }]
});