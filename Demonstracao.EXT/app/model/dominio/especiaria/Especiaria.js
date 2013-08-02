Ext.define('Demonstracao.model.dominio.especiaria.Especiaria', {
    extend: 'Demonstracao.model.uteis.ModelBase',

    fields: [
        'Id',
        'Nome',
        { name: 'Data', type: 'date' },
        'Valor',
        'Comestivel'
    ],
    
    validations: [
        { type: 'presence', field: 'Nome' },
        { type: 'length', field: 'Nome', min: 2, max: 60 }
    ],

    proxy: {
        type: 'rest',
        url: Demonstracao.Config.urls.webApi_links + '/especiaria'
    }
});
