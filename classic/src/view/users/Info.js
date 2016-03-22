Ext.define('MobileTV.view.users.Info', {
    extend: 'Ext.grid.Panel',
    xtype: 'info',
    header: {
    	items: [{
	        xtype: 'textfield',
	        hideLabel: true,
	        flex: 1
	    }, {
	        xtype: 'label',
	        forId: 'myFieldId',
	        text: 'My Awesome Field',
	        margin: '0 0 0 10'
	    }]
    }
});
