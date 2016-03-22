Ext.define('MobileTV.view.devices.Plan', {
    extend: 'Ext.grid.Panel',
    xtype: 'deviceplan',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'textfield',
            name: 'deviceId',
            fieldLabel: '终端 ID',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        },  {
            xtype: 'textfield',
            name: 'ader',
            fieldLabel: '广告商',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }, {
            xtype: 'textfield',
            name: 'showId',
            fieldLabel: '节目 ID',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }, {
        	text: '搜索'
        }]
    }],
    columns: [
        { xtype: 'checkcolumn', dataIndex: 'id' },
        { text: '设备号', dataIndex: 'name' },
        { text: '播放内容', dataIndex: 'ader', flex: 1 },
        { text: '次数', dataIndex: 'filename' },
        { text: '时长', dataIndex: 'size' },
        { text: '计划时间', dataIndex: 'uploaded_at' },
        { text: '广告商', dataIndex: 'uploaded_at' },
        { text: '管理员', dataIndex: 'uploaded_at' },
        { text: '状态', dataIndex: 'uploaded_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
