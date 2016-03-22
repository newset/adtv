Ext.define('MobileTV.store.Admin', {
    extend: 'Ext.data.Store',

    alias: 'store.admin',

    fields: [
        'id', 'username', 'email', 'phone', 'belong', 'created_at'
    ],

    data: { items: [
        { id: 11, username: 'Jean Luc', email: "jeanluc.picard@enterprise.com", belong: 'Super', created_at: '2016-01-11', phone: "555-111-1111" },
        { id: 12, username: 'Worf',     email: "worf.moghsson@enterprise.com",  belong: 'Super', created_at: '2016-01-11', phone: "555-222-2222" },
        { id: 13, username: 'Deanna',   email: "deanna.troi@enterprise.com",    belong: 'Super', created_at: '2016-01-11', phone: "555-333-3333" },
        { id: 14, username: 'Data',     email: "mr.data@enterprise.com",        belong: 'Super', created_at: '2016-01-11', phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
