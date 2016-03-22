Ext.define('MobileTV.view.shows.Scenes', {
    extend: 'Ext.grid.Panel',
    xtype: 'scenes',
    store: {
        type: 'scene'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增场景'
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
        { text: '名称', dataIndex: 'title', flex: 1 },
        { text: '作者', dataIndex: 'author' },
        { text: '审核状态', dataIndex: 'status' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作' }
    ]
});
