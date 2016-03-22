/**
 * This view is an example list of people.
 */
Ext.define('MobileTV.view.main.List', {
    extend: 'Ext.container.Container',
    xtype: 'mainlists',

    requires: [
        'MobileTV.store.Personnel'
    ],
    controller: 'homegrid',
    title: false,
    cls: 'nav-container',
    store: {
        type: 'personnel'
    },
    header: false,
    items: [
        {
            xtype: 'button',
            cls: 'image-btn grid-user',
            icon: 'resources/img/grid-icon/iconfont-users.png',
            text: '用户管理',
            data: {
                url: '/users',
                icon: 'fa fa-user',
                target: 'users'
            }
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-ad',
            icon: 'resources/img/grid-icon/iconfont-aders.png',
            text: '广告主管理',
            data: {
                url: '/aders',
                icon: 'fa fa-users',
                target: 'aders'
            }
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-show',
            icon: 'resources/img/grid-icon/iconfont-show.png',
            text: '节目管理',
            data: {
                url: '/shows',
                icon: 'fa fa-film',
                target: 'shows'
            }
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-device',
            icon: 'resources/img/grid-icon/iconfont-device.png',
            text: '设备管理',
            data: {
                url: '/devices',
                icon: 'fa fa-tablet',
                target: 'devices'
            }
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-finance',
            icon: 'resources/img/grid-icon/iconfont-finance.png',
            text: '财务管理',
            data: {
                url: '/finance',
                icon: 'fa fa-dollar',
                target: 'finance'
            }
        },
        {
            xtype: 'button',
            cls: 'image-btn grid-data',
            icon: 'resources/img/grid-icon/iconfont-data.png',
            text: '数据统计',
            data: {
                url: '/data',
                icon: 'fa-database fa',
                target: 'data'
            }
        }
    ],

    renderer: function(item){
        return '<span>test</span>'
    },

    listeners: {
        select: 'onItemSelected'
    }
});
