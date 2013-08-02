Ext.define('Demonstracao.model.dominio.unicornio.Unicornio', {
    extend: 'Demonstracao.model.uteis.ModelBase',

    fields: [
        'Id',
        'Nome'
    ],
    
    validations: [
        { type: 'length', field: 'Nome', min: 2, max: 60 }
    ],

    proxy: {
        type: 'rest',
        url: Demonstracao.Config.urls.webApi_links + '/unicornio'
    }
});
