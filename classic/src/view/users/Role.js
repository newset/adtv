Ext.define('MobileTV.view.users.Role', {
    extend: 'Ext.grid.Panel',
    xtype: 'role',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增角色',
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
        { text: '名称', dataIndex: 'title', flex: 1 },
        { text: '创建人员', dataIndex: 'created_by' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '备注', dataIndex: 'note' }
    ]
});
