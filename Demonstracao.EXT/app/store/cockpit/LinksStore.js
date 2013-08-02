Ext.define('Demonstracao.store.cockpit.LinksStore', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: Demonstracao.Config.urls.cockpit_links
    },
    root: {
        expanded: true,
        loaded: true
    }
});
