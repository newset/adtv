Ext.define('MobileTV.view.shows.Shows', {
    extend: 'Ext.grid.Panel',
    xtype: 'showslist',
    store: {
        type: 'show'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增节目'
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
        { xtype: 'checkcolumn' },
        { text: 'ID', dataIndex: 'id' },
        { text: '广告商', dataIndex: 'ader', flex: 1 },
        { text: '文件名', dataIndex: 'filename', flex: 1 },
        { text: '大小', dataIndex: 'size' },
        { text: '上传时间', dataIndex: 'uploaded_at' },
        { text: '操作'}
    ]
});
