Ext.define('MobileTV.view.shows.Scenes', {
    extend: 'Ext.grid.Panel',
    xtype: 'scenes',
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
        { xtype: 'checkcolumn', dataIndex: 'id' },
        { text: 'ID', dataIndex: 'name' },
        { text: '名称', dataIndex: 'username', flex: 1 },
        { text: '作者', dataIndex: 'email' },
        { text: '审核状态', dataIndex: 'belong' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
