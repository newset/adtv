Ext.define('MobileTV.view.devices.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'deviceslist',
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
        { xtype: 'checkcolumn', dataIndex: 'id' },
        { text: 'IP', dataIndex: 'name' },
        { text: '所属区域', dataIndex: 'ader', flex: 1 },
        { text: '系统版本', dataIndex: 'filename' },
        { text: '播放时长', dataIndex: 'size' },
        { text: '当前状态', dataIndex: 'uploaded_at' },
        { text: '开机时间', dataIndex: 'created_at' },
        { text: '关机时间', dataIndex: 'created_at' },
        { text: 'GPS开关', dataIndex: 'created_at' },
        { text: '当前播放场景', dataIndex: 'created_at' },
        { text: '所属管理员', dataIndex: 'created_at' },
        { text: '内存使用率', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
