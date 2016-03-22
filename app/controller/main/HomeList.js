Ext.define('MobileTV.controller.main.HomeList', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homegrid',
    init: function() {
        console.log('The panel was rendered');
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
            width: 1200,
            height: 700,
            animateTarget: btn.id,
            draggable: true,
            resizable: true,
            maximizable: true,
            minimizable: true,
            closable: true,
            title: btn.config.text,
            items: [{
                xtype: btn.config.data.target
            }],
            iconCls: btn.config.data.icon,
            renderTo: document.body,
            tools: [{
                type: 'refresh'
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