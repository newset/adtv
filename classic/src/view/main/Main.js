/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MoibleTV.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MoibleTV.view.main.MainController',
        'MoibleTV.view.main.MainModel',
        'MoibleTV.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    // ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    title: '节目终端后台',
    titlePosition: 2,
    items: [{
        xtype: 'mainlists'
    }]
});
