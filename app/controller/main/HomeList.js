Ext.define('MoibleTV.controller.main.HomeList', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.tab.Panel'
    ],
    alias: 'controller.homegrid',
    init: function() {
        console.log('The panel was rendered');
    },
    listeners: {
        click: {
            element: 'a.image-btn', //bind to the underlying el property on the panel
            fn: function() {
                console.log('click el');
            }
        },
    },
    currentPanel: null,
    showPanel: function(btn) {
        var wid = 'winIdPrefix' + btn.id;
        var win = Ext.WindowManager.get(wid);
        if (win != null) {
            win.show();
            return;
        }
        // 创建 panel
        // this.currentPanel;
        win = Ext.create('widget.window', {
        	id: wid,
            width: 800,
            height: 600,
            top: 100,
            left: 100,
            animateTarget: btn.id,
            draggable: true,
            resizable: true,
            maximizable: true,
            minimizable: true,
            closable: true,
            title: btn.config.text,
            constrain: true,
            iconCls: btn.config.data.icon,
            renderTo: document.body,
            tools: [{
                type: 'refresh',
            }]
        });

        win.show();
    },
    listen: {
        component: {
            'button': {
                click: 'showPanel'
            }
        }
    }
});
