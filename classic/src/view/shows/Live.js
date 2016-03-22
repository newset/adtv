Ext.define('MobileTV.view.shows.Live', {
    extend: 'Ext.grid.Panel',
    xtype: 'scenelive',
    store: {
        type: 'live'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增'
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
        { text: 'ID', dataIndex: 'id' },
        { text: '直播URL', dataIndex: 'url', flex: 1 },
        { text: '直播终端数', dataIndex: 'deviceCount' },
        { text: '直播时间', dataIndex: 'time' },
        { text: '当前状态', dataIndex: 'status' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作'}
    ]
});
