Ext.define('MobileTV.store.Ader', {
    extend: 'Ext.data.Store',

    alias: 'store.ader',

    fields: [
        'id', 'username', 'email', 'phone', 'name', 'company', 'playtime', 'created_at'
    ],

    data: { items: [
        {id: 10, name: 'Jean',  username: 'Jean', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", company: 'ADTV', playtime: 120, created_at: '2016-01-22' },
        {id: 11, name: 'Worf',  username: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", company: 'ADTV', playtime: 120, created_at: '2016-01-22' },
        {id: 12, name: 'Deanna',  username: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", company: 'ADTV', playtime: 120, created_at: '2016-01-22' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
