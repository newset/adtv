Ext.define('MobileTV.store.Show', {
    extend: 'Ext.data.Store',

    alias: 'store.show',

    fields: [
        'id', 'title', 'filename'
    ],

    data: { items: [
        {
            id: 11,
            title: '节目121',
            ader: '广告主1222',
            filename: '212111231.swf',
            size: 21312,
            uploaded_at: '2016-02-21'
        },
        {
            id: 12,
            title: '节目121',
            ader: '广告主1222',
            filename: '212111231.swf',
            size: 21312,
            uploaded_at: '2016-02-21'
        }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
