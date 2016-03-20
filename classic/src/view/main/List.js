/**
 * This view is an example list of people.
 */
Ext.define('MoibleTV.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlists',

    requires: [
        'MoibleTV.store.Personnel'
    ],

    title: 'Personnel',
    cls: 'nav-container',
    store: {
        type: 'personnel'
    },
    header: false,
    items: [
        {
            xtype: 'button',
            cls: 'image-btn grid-user',
            icon: 'resources/img/grid-icon/iconfont-huiyuanbiaoqian.png',
            text: '用户管理'
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-ad',
            text: '广告主管理'
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-show',
            text: '节目管理'
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-device',
            text: '设备管理'
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-finance',
            text: '财务管理'
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-data',
            text: '数据统计'
        }
    ],

    renderer: function(item){
        return '<span>test</span>'
    },

    listeners: {
        select: 'onItemSelected'
    }
});
