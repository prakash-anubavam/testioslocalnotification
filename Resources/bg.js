exports.setScheduledReminderiOS = function(timestamp, alertBody, alertMainButtonText, metaInfoJson) {
	Ti.API.info("setScheduledReminderiOS is called");
	var todayDate = new Date();
	var expiryDate = new Date(timestamp);

	var reminderDelay = 1000 * 60 * 60 * 24;
	if ((expiryDate.getTime() - todayDate.getTime()) > (3000 * 60 * 60 * 24)) {
		reminderDelay = 3000 * 60 * 60 * 24;
	}
	expiryDate.setTime(expiryDate.getTime() - reminderDelay);
	Ti.API.info("expiryDate ==>" + expiryDate.toString());
	todayDate.setDate(expiryDate.getDate());
	// sheduledDate.setMonth(expiryDate.getMonth());
	// sheduledDate.setYear(expiryDate.getFullYear());
	// sheduledDate.setHours(expiryDate.getHours());
	// sheduledDate.setMinutes(expiryDate.getMinutes());

	var notification = Ti.App.iOS.scheduleLocalNotification({
		alertBody : alertBody,
		alertAction : alertMainButtonText,
		userInfo : metaInfoJson,
		date : todayDate
	});
};