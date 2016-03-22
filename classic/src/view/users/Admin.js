Ext.define('MobileTV.view.users.Admin', {
    extend: 'Ext.grid.Panel',
    xtype: 'admin',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增管理员'
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
        { text: '帐号', dataIndex: 'username', flex: 1 },
        { text: '邮箱', dataIndex: 'email' },
        { text: '所属管理员', dataIndex: 'belong' },
        { text: '创建时间', dataIndex: 'created_at' }
    ]
});
