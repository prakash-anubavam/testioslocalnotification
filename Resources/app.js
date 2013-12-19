var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
win.open();
var label = Ti.UI.createLabel({
	top : 20,
	height : 200,
	width : 200,
	text : "Background the app"
});
win.add(label);

var expiryDate = new Date(1388458540800);
var today = new Date();
today.setDate(expiryDate.getDate());
Ti.API.info("sheduledTask Date ==>" + expiryDate.toString());
var userInfo = {
	"hello" : "world"
};
require('bg').setScheduledReminderiOS(1388458540800, "App was put in background", "Re-Launch!", userInfo);

Ti.App.iOS.addEventListener('notification', function(notification) {
	Ti.API.info('background event received = ' + notification);
	alert("Notification received ==>" + JSON.stringify(notification));
	//Ti.App.currentService.unregister();
});
