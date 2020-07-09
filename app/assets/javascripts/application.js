// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require moment
//= require fullcalendar
//= require fullcalendar/lang/ja
//= require_tree .

$(function () {
    // 画面遷移を検知
    $(document).on('turbolinks:load', function () {
        if ($('#calendar').length) {

            function Calendar() {
                return $('#calendar').fullCalendar({
                });
            }
            function clearCalendar() {
                $('#calendar').html('');
            }

            $(document).on('turbolinks:load', function () {
                Calendar();
            });
            $(document).on('turbolinks:before-cache', clearCalendar);

            $(document).ready(function () {
            //events: '/events.json', 以下に追加
            $('#calendar').fullCalendar({
                events: '/events.json',
                //カレンダー上部を年月で表示させる
                titleFormat:'YYYY年 M月',
                monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                //曜日を日本語表示
                dayNamesShort:  ['日', '月', '火', '水', '木', '金', '土'],
                views: {
                    month: {
                    columnFormat: 'ddd' //like '土'
                    },
                    week: {
                    columnFormat: 'M/D ddd' //like '6/6(土)'
                    },
                    day: {
                    columnFormat: 'M/D ddd' // like '6/6(土)'
                    }
                    },
                //ボタンのレイアウト
                header: {
                    left: '',
                    center: 'prev title next',
                    right: 'month agendaWeek agendaDay today'
                },
                //終了時刻がないイベントの表示間隔
                defaultTimedEventDuration: '01:00:00',
                buttonText: {
                    prev:'<',
                    next:'>',
                    // prevYear: '前年',
                    // nextYear: '翌年',
                    today: '今日',
                    month: '月',
                    week: '週',
                    day: '日'
                },
                firstDay : 1,
                // 終日スロットを表示
                allDaySlot: false,
                // 終日スロットのタイトル
                allDayText: '',
                // Drag & Drop & Resize
                editable: false,
                slotDuration: '00:30',
                //イベントの時間表示を２４時間に
                timeFormat: "HH:mm",
                //イベントの色を変える
                eventColor: '#87cefa',
                //イベントの文字色を変える
                eventTextColor: '#000000',
                eventRender: function(event, element) {
                    element.css("font-size", "1em");
                    element.css("padding", "5px");
                }
            });
          });
        }
    });
});