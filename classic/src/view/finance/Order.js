var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"done", "name":"已完成"},
        {"abbr":"pending", "name":"未完成"},
        {"abbr":"closed", "name":"已关闭"}
    ]
});

Ext.define('MobileTV.view.finance.Order', {
    extend: 'Ext.grid.Panel',
    xtype: 'orders',
    shrinkWrapDock: true,
    layout: 'fit',
    dockedItems: [
    {
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: '起止日期',
            name: 'from_date',
            labelAlign: 'right',
            maxValue: new Date()  // limited to the current date or prior
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: false,
            name: 'to_date',
            value: new Date()  // defaults to today
        }, {
            xtype: 'textfield',
            name: 'username',
            fieldLabel: '购买用户',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }]
    }, {
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            fieldLabel: '订单状态',
            store: states,
            xtype: 'combobox',
            queryMode: 'local',
            displayField: 'name',
            labelAlign: 'right',
            valueField: 'abbr'
        }, {
            xtype: 'textfield',
            name: 'keyword',
            fieldLabel: '搜索',
            labelAlign: 'right',
            allowBlank: false  // requires a non-empty value
        }, {
        	text: '搜索'
        }]
    }],
    columns: [
        { xtype: 'checkcolumn', dataIndex: 'id' },
        { text: '订单号', dataIndex: 'name' },
        { text: '购买人', dataIndex: 'ader', flex: 1 },
        { text: '套餐名称', dataIndex: 'filename' },
        { text: '终端数量', dataIndex: 'size' },
        { text: '推送场景', dataIndex: 'uploaded_at' },
        { text: '费用', dataIndex: 'created_at' },
        { text: '状态', dataIndex: 'created_at' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
