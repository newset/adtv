Ext.define('MobileTV.view.finance.Logs', {
    extend: 'Ext.grid.Panel',
    xtype: 'flogs',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
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
        { text: '支付帐号', dataIndex: 'ader', flex: 1 },
        { text: '支付时间', dataIndex: 'filename' },
        { text: '支付金额', dataIndex: 'size' },
        { text: '支付方式', dataIndex: 'uploaded_at' },
        { text: '支付流水号', dataIndex: 'created_at' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
