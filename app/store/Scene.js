Ext.define('MobileTV.store.Scene', {
    extend: 'Ext.data.Store',

    alias: 'store.scene',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        {
            id: 11,
            title: '场景1212',
            author: '管理员',
            status: '审核中',
            statusCode: 'pending',
            created_at: '2016-03-10'
        },
        {
            id: 12,
            title: '场景1213',
            author: '管理员',
            status: '审核中',
            statusCode: 'pending',
            created_at: '2016-03-10'
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
