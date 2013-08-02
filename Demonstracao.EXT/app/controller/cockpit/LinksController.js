Ext.define('Demonstracao.controller.cockpit.LinksController', {
    extend: 'Ext.app.Controller',

    views: ['cockpit.LinksTreeView'],
    stores: ['cockpit.LinksStore'],

    init: function () {
        this.control({
            'links': {
                added: function () {
                    this.carregarMenu('adm');
                }
            },
            'linksTreeView': {
                itemclick: function (componente, record) {
                    var nomeDaJanela = record.get('id');
                    if (nomeDaJanela) {

                        Ext.suspendLayouts();

                        var janela = Ext.ComponentQuery.query(nomeDaJanela)[0];
                        if (!janela)
                            janela = Ext.widget(nomeDaJanela);

                        janela.addEvents('AcaoDoMenu');
                        janela.fireEvent('AcaoDoMenu', janela);

                        Ext.resumeLayouts(true);
                    }
                }
            }
        });
    },
    carregarMenu: function (modulo) {
        var links = Ext.ComponentQuery.query('links')[0];
        var view = Ext.widget('linksTreeView');

        Ext.suspendLayouts();
        links.removeAll();
        links.add(view);
        Ext.resumeLayouts(true);

        view.store.proxy.extraParams['modulo'] = modulo;
        view.store.proxy.extraParams.start = 0;
        view.store.load();
    }
});
