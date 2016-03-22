/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MobileTV.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MobileTV.view.main.MainController',
        'MobileTV.view.main.MainModel',
        'MobileTV.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    bodyCls: 'app-main',
    // ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    title: '节目终端后台',
    header: {
        xtype: 'toolbar',
        style: 'padding: 10px; text-align: right', 
        align: 'right',
        items: [{
            text: '节目终端后台',
            xtype: 'label',
            cls: 'logo-text'
        }, {
            text: '注销',
            cls: 'signout'
        }]
    },
    titlePosition: 2,
    items: [{
        xtype: 'mainlists'
    }]
});
