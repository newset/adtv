Ext.define('MobileTV.view.finance.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'finance',
    requires: [
        'MobileTV.view.finance.Order',
        'MobileTV.view.finance.Plan',
        'MobileTV.view.finance.Logs',
    ],
    tabPosition: 'top',
    layout: 'auto',
    items: [{
    	title: ' 套餐管理',
    	iconCls: 'fa fa-tree',
        xtype: 'fplans'
    }, {
        title: '订单管理',
        iconCls: 'fa fa-info',
        xtype: 'orders'
    }, {
        title: '财务记录',
        iconCls: 'fa fa-book',
        xtype: 'flogs'
    }]
});