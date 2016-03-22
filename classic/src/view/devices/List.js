Ext.define('MobileTV.view.devices.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'deviceslist',
    store: {
        type: 'device'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增设备'
        }, {
        	text: '批量删除',
            xtype: 'button'
        }, {
            xtype: 'textfield',
            name: '搜索',
            fieldLabel: '搜索',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }, {
        	text: '搜索'
        }]
    }],
    columns: [
        { xtype: 'checkcolumn'},
        { text: 'IP', dataIndex: 'ip', flex: 2 },
        { text: '所属区域', dataIndex: 'region', flex: 2 },
        { text: '系统版本', dataIndex: 'os', flex: 1 },
        { text: '播放时长', dataIndex: 'time' },
        { text: '当前状态', dataIndex: 'status' },
        { text: '开机时间', dataIndex: 'on_time' },
        { text: '关机时间', dataIndex: 'off_time' },
        { text: 'GPS开关', dataIndex: 'gps' },
        { text: '当前播放场景', dataIndex: 'scene' },
        { text: '所属管理员', dataIndex: 'admin' },
        { text: '内存使用率', dataIndex: 'usage' },
        { text: '操作' }
    ]
});
