Ext.define('MobileTV.view.aders.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'aders',
	dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: '新增广告主'
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
        {text: 'ID', dataIndex: 'id'},
        {text: '帐号', dataIndex: 'username'},
        {text: '手机', dataIndex: 'phone'},
        {text: '邮箱', dataIndex: 'email'},
        {text: '姓名', dataIndex: 'name'},
        {text: '公司', dataIndex: 'company'},
        {text: '播放总时长', dataIndex: 'playtime'},
        {text: '创建时间', dataIndex: 'created_at'},
    ]
});
