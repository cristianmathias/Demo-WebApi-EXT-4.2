Ext.define('Demonstracao.view.cockpit.LinksTreeView', {
    extend: 'Ext.tree.Panel',
    xtype: 'linksTreeView',
    rootVisible: false,
    useArrows: true,
    store: 'cockpit.LinksStore'
});