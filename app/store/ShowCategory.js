Ext.define('MobileTV.store.ShowCategory', {
    extend: 'Ext.data.Store',

    alias: 'store.showcategory',

    fields: [
        'id', 'title', 'created_at'
    ],

    data: { items: [
        { id: 11, title: '音频', created_at: '2016-02-11' },
        { id: 12, title: '视频',  created_at: '2016-03-21' },
        { id: 13, title: 'Flash', created_at: '2016-03-22' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});