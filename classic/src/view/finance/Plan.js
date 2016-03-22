Ext.define('MobileTV.view.finance.Plan', {
    extend: 'Ext.grid.Panel',
    xtype: 'fplans',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增套餐'
        }, {
            xtype: 'textfield',
            name: 'keyword',
            fieldLabel: '',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }, {
        	text: '搜索'
        }]
    }],
    columns: [
        { xtype: 'checkcolumn', dataIndex: 'id' },
        { text: 'ID', dataIndex: 'name' },
        { text: '名称', dataIndex: 'ader', flex: 1 },
        { text: '终端数量', dataIndex: 'filename' },
        { text: '销售总量', dataIndex: 'size' },
        { text: '价格', dataIndex: 'uploaded_at' },
        { text: '创建者', dataIndex: 'uploaded_at' },
        { text: '创建时间', dataIndex: 'uploaded_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
