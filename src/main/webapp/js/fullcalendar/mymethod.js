
var colorMap = {
		'office': '#AA6',
		'lesson': '#4D4',
		'academy': '#61D',
		'meeting': '#69F',
		'club': '#CA2',
		'research': '#C7E',
		'etcetera': '#888',
};

var lightColorMap = {
		'office': '#DDA',
		'lesson': '#8F8',
		'academy': '#A5F',
		'meeting': '#ADF',
		'club': '#ED8',
		'research': '#ECE',
		'etcetera': '#BBB',
};

function toEvent(roomReserve){

	var eventTitle =
		roomReserve.brandscheduletypevalue + '\n\r'
		+ roomReserve.subject + '\n\r'
		+ roomReserve.content;

	var m = moment(roomReserve.closedate, "YYYYMMDDhhmmss");
	var color;
	if(m.isAfter(moment())){
		color = colorMap[roomReserve.brandscheduletypevalue];
	}else{
		color = lightColorMap[roomReserve.brandscheduletypevalue];
	}

	var event = {};
	event.id = roomReserve.id;
	event.resourceId = roomReserve.roomid;
	event.title = eventTitle;
	event.start = roomReserve.opendate;
	event.end = roomReserve.closedate;
	event.color = color;

	return event;
}

function toEventList(roomReserveList){
	var eventList = [];
	for(var i in roomReserveList ){
		eventList[i] = toEvent(roomReserveList[i]);
	}
	return eventList;
}