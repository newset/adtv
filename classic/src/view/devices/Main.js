Ext.define('MobileTV.view.devices.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'devices',
    requires: [
        'MobileTV.view.devices.List',
        'MobileTV.view.devices.Plan',

        'MobileTV.store.Device'
    ],
    tabPosition: 'top',
    items: [{
    	title: '终端信息管理',
    	iconCls: 'fa fa-tree',
        xtype: 'deviceslist'
    }, {
        title: '终端播放计划',
        iconCls: 'fa fa-info',
        xtype: 'deviceplan'
    }]
});