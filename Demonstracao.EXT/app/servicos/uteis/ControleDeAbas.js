Ext.define('Demonstracao.servicos.uteis.ControleDeAbas', {
    singleton: true,

    areaDeTrabalho: function () {
        return Ext.ComponentQuery.query('areaDeTrabalho')[0];
    },

    verificarSeJanelaJaExiste: function (idDaAba) {
        return (this.areaDeTrabalho().query('aba[idDaAba=' + idDaAba + ']').length > 0);
    },

    setarAbaExistente: function (idDaAba) {
        var area = this.areaDeTrabalho();
        return area.setActiveTab(area.query('aba[idDaAba=' + idDaAba + ']')[0]);
    },
    
    criarAba: function (config) {
        var cfg = config;

        var aba = Ext.widget('aba');
        
        aba.idDaAba = cfg.idDaAba;
        aba.servicoDaBarraDeFerramentas = cfg.servicoDaBarraDeFerramentas;
        
        aba.setTitle(cfg.tituloDaJanela);
        aba.add(cfg.janela);
        aba.config = cfg;

        return aba;
    },
    
    adicionarAba: function (aba) {
        var me = this,
            area = me.areaDeTrabalho(),
            cfg = aba.config;

        var controleDeBarrasDeFerramentas = Demonstracao.servicos.uteis.ControleDeBarrasDeFerramentas;
        var areaDaBarra = controleDeBarrasDeFerramentas.areaDasBarrasDeFerramentas(cfg);

        aba.on('activate', function () {
            controleDeBarrasDeFerramentas.excluirBarrasAntigas(areaDaBarra);
             controleDeBarrasDeFerramentas.montarBarraDeFerramentas(cfg);
        }, aba);
        aba.on('deactivate', function () { controleDeBarrasDeFerramentas.excluirBarrasAntigas(areaDaBarra); }, aba);
        aba.on('removed', function () { if (me.areaDeTrabalho().items.length == 0) controleDeBarrasDeFerramentas.excluirBarrasAntigas(areaDaBarra); }, aba);
        
        aba.closable = true;
        Ext.suspendLayouts();
        aba = area.add(aba);
        area.setActiveTab(aba);
        Ext.resumeLayouts(true);
        
        return aba;
    }    
});
