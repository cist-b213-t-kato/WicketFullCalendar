

$(document).ready(function() {

	$(function() { // dom ready

		$('#calendar').fullCalendar({
			schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
			resourceAreaWidth: 150,
			slotDuration: '00:15:00', //イベント設定の時間の単位
			snapDuration: '00:15:00', //イベント選択の時間の単位
			minTime: '09:00:00',
			maxTime: '20:00:00',
			allDaySlot: false,
			editable: true,
			eventLimit: 4,
			selectable: true,
			selectHelper: true,
			eventOverlap: true,
			slotEventOverlap: false,
            timeFormat: 'HH:mm',
            axisFormat: 'HH:mm',
	        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	        monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
	        dayNamesShort: ['日','月','火','水','木','金','土'],
//			defaultDate: currentDate,
	        height: 500,
//	        aspectRatio: 3,
//	        contentHeight: 1000,

	        titleFormat: {
	            month: 'YYYY年M月',
	            week: "YYYY年M月D日",
	            day: "YYYY年M月D日"
	        },

			header: {
	//			left: 'promptResource today prev,next',
	//			left: 'today prev,next',
				left: 'prev,next',
				center: 'title',
	//			right: 'timelineDay,timelineThreeDays,agendaWeek,month'
				right: 'month agendaWeek agendaDay,timelineDay'
			},

	        buttonText: {
//	            prev:     '&lsaquo;', // <
//	            next:     '&rsaquo;', // >
//	            prevYear: '&laquo;',  // <<
//	            nextYear: '&raquo;',  // >>
	            today:    '今日',
	            month:    '月',
	            agendaWeek:'週',
	            agendaDay:'日',
	            day:      '（横）',
	        },

			scrollTime: '00:00',
			defaultView: 'month',
			views: {
				timelineThreeDays: {
					type: 'timeline',
					duration: { days: 3 }
				}
			},

			viewRender: function(view, element){
//				if(view.name==='month'){
//
//					var start = view.start.format('YYYY,MM,DD,HH,mm,ss');
//					var end = view.end.format('YYYY,MM,DD,HH,mm,ss');
//
//					viewRenderCallback(start, end);
//				}

			},

			select: function(start, end, jsEvent, view, resource){

//				var view = $('#calendar').fullCalendar('getView');
//				if(view.name !== 'agendaDay' && view.name !== 'timelineDay'){
//					$('#calendar').fullCalendar('changeView', 'agendaDay');
//					$('#calendar').fullCalendar('gotoDate', start);
//					return;
//				}
//
//				//一端あえてrenderする。
////				var event = {
////					resourceId: resource.id,
////					title: accountName,
////					id: ++idCnt,
////					start: start,
////					end: end,
////				};
//				var roomReserve = {
//						id: ++idCnt,
//						roomid: resource.id,
//						opendate: start,
//						closedate: end,
//						brandscheduletypevalue: '',
//						subject: '',
//						content: '',
//				};
//				var event = toEvent(roomReserve);
//				$('#calendar').fullCalendar('renderEvent', event, true);
//				$('#calendar').fullCalendar('unselect');
//
//				modalOpen(editModalId);
//
//				$('.modal-ok').off().click(function(){
//					/**
//					 * event（schedule）をupdateするための処理．
//					 * renderEventされたeventのオブジェクトは
//					 * 未知であり，updateEventsの引数として使うことはできない．
//					 * removeEventsで削除し，再びrenderEventを呼び出すことで
//					 * 疑似的にeventの更新を行う
//					 */
//					$('#calendar').fullCalendar("removeEvents", event.id);
//
//					var roomReserve = {};
//					roomReserve.subject = $(':text[name="subject"]').val();
//					roomReserve.content = $('#content').val().replace(/[\n\r]/g, ' ');
//					roomReserve.brandscheduletypevalue = $('#brandscheduletypevalue option:selected').val();
//					roomReserve.opendate = start;
//					roomReserve.closedate = end;
//
//					var ret = toEvent(roomReserve);
//
//					event.title = ret.title;
//					event.color = ret.color;
//
//					$('#calendar').fullCalendar('renderEvent', event, true);
//
//
//					var sf = start.format('YYYY,MM,DD,HH,mm,ss');
//					var ef = end.format('YYYY,MM,DD,HH,mm,ss');
//					insertEventCallback(event, sf, ef, resource, roomReserve.subject, roomReserve.brandscheduletypevalue);
//
//					modalClose(editModalId);
//				});
//				$('.modal-close').off().click(function(){
//					//イベント（予定）の削除
//					--idCnt;
//					$('#calendar').fullCalendar("removeEvents", event.id);
//					modalClose(editModalId);
//				});
//				$('.modal-deletebutton').hide();

			},

			//イベントの編集、削除
			eventClick: function(event, jsEvent){
//				if(event.editable===false) return;
//
//				var view = $('#calendar').fullCalendar('getView');
//				if(view.name !== 'agendaDay'){
//					$('#calendar').fullCalendar('changeView', 'agendaDay');
//					$('#calendar').fullCalendar('gotoDate', event.start);
//					return;
//				}
//
//				modalOpen(editModalId);
//				$('.modal-ok').off().click(function(){
//
//					var roomReserve = {
//							id: event.id,
//							roomid: event.resourceId,
//							opendate: event.start,
//							closedate: event.end,
//					};
//					roomReserve.subject = $(':text[name="subject"]').val();
//					roomReserve.content = $('#content').val().replace(/[\n\r]/g, ' ');
//					roomReserve.brandscheduletypevalue = $('#brandscheduletypevalue option:selected').val();
//
////					var subject = $(':text[name="subject"]').val();
////					var content = $('#content').val();
////					var title = brandscheduletypevalue + '\n' + accountName + '\n' + subject + '\n' + content;
//
//					var ret = toEvent(roomReserve);
//					event.title = ret.title;
//					event.color = ret.color;
//					$('#calendar').fullCalendar('updateEvent', event);
//					$('#calendar').fullCalendar('unselect');
//
//					var content = roomReserve.content;
//					var subject = roomReserve.subject;
//					var brandscheduletypevalue = roomReserve.brandscheduletypevalue;
//					updateEventCallback(event, subject, content, brandscheduletypevalue);
//
//					modalClose(editModalId);
//
//				});
//				$('.modal-close').off().click(function(){
//					modalClose(editModalId);
//				});
//				$('.modal-deletebutton').show();
//				$('.modal-deletebutton').off().click(function(){
//					//イベント（予定）の削除
//					$('#calendar').fullCalendar("removeEvents", event.id);
//					removeEventCallback(event);
//					modalClose(editModalId);
//				});

			},

		    eventResize: function(event, delta, revertFunc) {
//		    	updateEventTimeCallback(event);

		    },

		    eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
//		    	updateEventTimeCallback(event);
		    },

		    eventRender: function(event, element, view){
//		    	if(view.name==='month'){

//		    	}
		    },

			resourceLabelText: 'Rooms',
//			resources: roomList,

		});

	});

});
