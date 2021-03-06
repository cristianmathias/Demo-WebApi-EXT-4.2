Ext.define('Demonstracao.view.dominio.especiaria.FormularioDeEspeciaria', {
    extend: 'Demonstracao.view.uteis.FormularioBase',
    xtype: 'formularioDeEspeciaria',
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
                    },
                    {
                        name: 'Data',
                        fieldLabel: 'Data',
                        xtype: 'datefield'
                    },
                    {
                        name: 'Valor',
                        fieldLabel: 'Valor',
                        xtype: 'numberfield'
                    },
                    {
                        name: 'Comestivel',
                        fieldLabel: 'É comestível?',
                        xtype: 'checkbox'
                    }
            ]
        }
    ]
});
    
