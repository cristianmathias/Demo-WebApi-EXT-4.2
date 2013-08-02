Ext.define('Demonstracao.view.dominio.unicornio.FormularioDeUnicornio', {
    extend: 'Demonstracao.view.uteis.FormularioBase',
    xtype: 'formularioDeUnicornio',
    items: [
        {
            xtype: 'fieldset',
            title: 'Informações Básicas',
            defaultType: 'textfield',

            items: [
                    {
                        name: 'Id',
                        hidden: true
                    },
                    {
                        name: 'Nome',
                        fieldLabel: 'Nome'
                    }]
        }
    ]
});
    