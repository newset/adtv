Ext.define('MobileTV.store.Live', {
    extend: 'Ext.data.Store',

    alias: 'store.live',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        {
            id: 11,
            url: 'http://www.baidu.com/',
            deviceCount: 112,
            time: 1200,
            status: '播放中',
            statusCode: 'play',
            created_at: '2010-01-11'
        }, {
            id: 12,
            url: 'http://www.baidu.com/',
            deviceCount: 112,
            time: 1200,
            status: '播放中',
            statusCode: 'play',
            created_at: '2010-01-11'
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
