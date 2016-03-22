Ext.define('MobileTV.store.Device', {
    extend: 'Ext.data.Store',

    alias: 'store.device',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
       {
            id: 1121,
            ip: '127.0.0.1',
            region: '成都青羊区',
            os: '1.10.1',
            time: 12100,
            status: '开机',
            on_time: '2016-01-12 10:00:00',
            off_time: '2016-01-10 10:00:00',
            gps: 1,
            scene: '场景121',
            admin: '管理员121', 
            usage: '20%'
       },
       {
            id: 1122,
            ip: '127.0.0.1',
            region: '成都武侯区',
            os: '1.10.1',
            time: 12100,
            status: '开机',
            on_time: '2016-01-12 10:00:00',
            off_time: '2016-01-10 10:00:00',
            gps: 1,
            scene: '场景121',
            admin: '管理员121', 
            usage: '20%'
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
