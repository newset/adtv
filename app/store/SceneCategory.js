Ext.define('MobileTV.store.SceneCategory', {
    extend: 'Ext.data.Store',

    alias: 'store.scenecategory',

    fields: [
        'id', 'title', 'created_at'
    ],

    data: { items: [
        { id: 11, title: '场景类型一', created_at: '2016-02-11' },
        { id: 12, title: '场景类型二',  created_at: '2016-03-21' },
        { id: 13, title: '场景类型三', created_at: '2016-03-22' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
