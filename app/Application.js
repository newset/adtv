/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MoibleTV.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MoibleTV',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // 判断登录
        
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
