Ext.define('MobileTV.store.Role', {
    extend: 'Ext.data.Store',

    alias: 'store.role',

    fields: [
        'title', 'created_by', 'created_at', 'note'
    ],

    data: { items: [
        { title: '管理员',     created_by: "jeanluc", created_at: "2016-01-11", note: '普通管理员' },
        { title: '超级管理员',  created_by: "worf",  created_at: "2016-01-11" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
