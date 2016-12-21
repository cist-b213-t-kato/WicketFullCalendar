



$(document).ready(function() {

	var insertModalId = '#insert';
	var editModalId = '#edit';

    function modalResize(modalId){
        var w = $(window).width();
        var h = $(window).height();

        var x = (w - $(modalId).outerWidth(true)) / 2;
        var y = (h - $(modalId).outerHeight(true)) / 2;

        $(modalId).css({'left': x + 'px','top': y + 'px'});
    }

	function modalOpen(modalId){

        $('body').append('<div class="modal-overlay"></div>');
        $('.modal-overlay').fadeIn('fast');
        modalResize(modalId);
        $(modalId).fadeIn('fast');

        $(window).on('resize', function(){
            modalResize(modalId);
        });

    }

	function modalClose(modalId){
        $(modalId).fadeOut('fast');
        $('.modal-overlay').fadeOut('fast',function(){
            $('.modal-overlay').remove();
        });
	}

	var roomColorList = {
			'大会議室': '#d66', //赤
			'中会議室': '#5c5', //緑
			'小会議室': '#5ac', //青
			'超会議室': '#cb6', //黄色
	};

    var user = 'B2130480';

    function transform(o){
        var now = moment();
    	o.title = '\n[id:' + o.id + '] ' + o.roomName + '\n' + o.contributor;
    	o.editable = o.contributor===user;
    	var isOld = now.isAfter(o.end);
    	if(isOld){
        	o.color = '#aaa';
    	}else{
			o.color = roomColorList[o.roomName];//'#aaa';
    	}
    }

    function checkRoomView(schedule){
    	for(var i=0; i<document.viewroomForm.room.length; ++i){
    		if(schedule.roomName === document.viewroomForm.room[i].value){
    			return document.viewroomForm.room[i].checked;
    		}
    	}
    	return false;
    }


    function createEventList(){
    	var eList = [];
	    for( var i=0; i<scheduleList.length; i++ ){
	    	var o = scheduleList[i];
	    	o.id = i+1;
	        transform(o);
	    	eList.push(o);
	    }
	    return eList;
    }

	$calendar = $('#calendar').fullCalendar({
		header: {
			left: 'month,agendaDay',
			center: 'title',
			right: 'prev,next',
		},
        defaultView: 'month',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        titleFormat: {
            day: 'M月 D日',
            month: 'YYYY年 M月',
            week: 'YYYY年 M月'
        },
        timeFormat:{
            month: 'H:mm',
            week: 'H:mm',
            agenda: 'H:mm'
        },
        allDaySlot: false,
        slotDuration: '00:15:00', //イベント設定の時間の単位
        snapDuration: '00:15:00', //イベント選択の時間の単位
        minTime: '09:00:00',
        maxTime: '20:00:00',
        buttonText: {},

        events: createEventList(),

        eventDrop: function(event){
        	transform(event);
        },

        /* クリックでイベントを作る
         * D&Dで移動できないほうがいい？
         * http://samandlinda.blogspot.jp/2013/03/jquery-plugin-fullcalendar.html
         */
        selectable: true,
        selectHelper: true,

        select: function(start, end){
        	var view = $calendar.fullCalendar('getView');
        	if(view.name !== 'agendaDay'){
                $calendar.fullCalendar('changeView', 'agendaDay');
    			$calendar.fullCalendar('gotoDate', start);
    			return;
        	}

        	modalOpen(insertModalId);
	        $('.modal-close').off().click(function(){
	            var roomName = document.roomForm.roomSelect.value;
            	var event = {
                    	roomName: roomName,
                    	contributor : user,
                        id: $calendar.fullCalendar('clientEvents').length+1,
                        start: start,
                        end: end,
                };
            	transform(event);
                $calendar.fullCalendar('renderEvent', event, true); //このtrueなんだっけ？
	            $calendar.fullCalendar('unselect');

	            modalClose(insertModalId);
	        });
	        $('.modal-overlay').off().click(function(){
	            modalClose(insertModalId);
	        });

        },


        //イベントの編集、削除
        eventClick: function(event, jsEvent){
        	if(event.editable==false) return;

        	var view = $calendar.fullCalendar('getView');
        	if(view.name === 'month'){
                $calendar.fullCalendar('changeView', 'agendaDay');
    			$calendar.fullCalendar('gotoDate', event.start);
    			return;
        	}

        	modalOpen(editModalId);

	        $('.modal-close').off().click(function(){

	            var roomName = document.roomeditForm.roomeditSelect.value;
                event.roomName = roomName;
                transform(event);
                //イベント（予定）の修正
                $calendar.fullCalendar('updateEvent', event);
	            $calendar.fullCalendar('unselect');

	            modalClose(editModalId);

	        });

	        $('.modal-overlay').off().click(function(){
	            modalClose(editModalId);
	        });

	        $('.modal-deletebutton').off().click(function(){
	        	//イベント（予定）の削除
                $calendar.fullCalendar("removeEvents", event.id);
	            modalClose(editModalId);
	        });

        },


	});

    $('.room-view-button').off().click(function(){});


});

