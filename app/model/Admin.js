Ext.define('MobileTV.model.Admin', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'username', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'isSuper', type: 'tinyint' }

    ]
});
