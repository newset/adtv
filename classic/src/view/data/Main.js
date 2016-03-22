Ext.define('MobileTV.view.data.Main', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.form.field.Date'
    ],
    dockedItems: [{
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
        	text: '查询'
        }, {
        	text: '导出'
        }]
    }],
    xtype: 'data',
    columns: [
        { xtype: 'checkcolumn', dataIndex: 'id' },
        {text: 'ID', dataIndex: 'id'},
        {text: '终端名称', dataIndex: 'username'},
        {text: '浏览量', dataIndex: 'phone'},
        {text: '平均停留时长', dataIndex: 'email'},
        {text: '最受欢迎节目', dataIndex: 'name'},
    ]
});