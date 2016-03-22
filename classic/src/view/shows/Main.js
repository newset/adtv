Ext.define('MobileTV.view.shows.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'shows',
    requires: [
        'MobileTV.view.shows.Category',
        'MobileTV.view.shows.Shows',
        'MobileTV.view.shows.Scenes',
        'MobileTV.view.shows.Live',
    ],
    tabPosition: 'top',
    items: [{
    	title: '节目类型',
    	iconCls: 'fa fa-tree',
        xtype: 'category'
    }, {
        title: '节目管理',
        iconCls: 'fa fa-info',
        xtype: 'showslist'
    }, {
        title: '场景类型',
        iconCls: 'fa fa-tags',
        xtype: 'scenecategory'
    }, {
        title: '场景管理',
        iconCls: 'fa fa-film',
        xtype: 'scenes'
    }, {
        title: '直播节目',
        iconCls: 'fa fa-camera',
        xtype: 'scenelive'
    }]
});