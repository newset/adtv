Ext.define('MobileTV.view.shows.Category', {
    extend: 'Ext.grid.Panel',
    xtype: 'category',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增类型'
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
        { text: '名称', dataIndex: 'name' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});

Ext.define('MobileTV.view.shows.SceneCategory', {
    extend: 'Ext.grid.Panel',
    xtype: 'scenecategory',
    multiSelect : true,
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增类型'
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
        { text: '名称', dataIndex: 'name' },
        { text: '创建时间', dataIndex: 'created_at' },
        { text: '操作', dataIndex: 'created_at' }
    ]
});
