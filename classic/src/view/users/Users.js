Ext.define('MobileTV.view.users.Users', {
    extend: 'Ext.tab.Panel',
    xtype: 'users',
    requires: [
        'MobileTV.view.users.Admin',
        'MobileTV.view.users.Info',
        'MobileTV.view.users.Role'
    ],
    tabPosition: 'top',
    items: [{
    	title: '用户信息',
    	iconCls: 'fa fa-info',
    	xtype: 'info'
    }, {
        title: '管理员',
        html: 'test',
        iconCls: 'fa fa-user',
        xtype: 'admin'
    }, {
        title: '角色管理',
        iconCls: 'fa fa-sitemap',
        xtype: 'role'
    }]
});