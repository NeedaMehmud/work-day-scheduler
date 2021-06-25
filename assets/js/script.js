var text = $('#text');
var hours = $('#hour')
var saveButtons = $('.saveButton');

//current time and date
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#current-time").append(currentDay);

//saving text to local storage
saveButtons.each(function () {
    $(this).click(function () {
        console.log($(this).siblings('textarea').attr('id'))
        var textarea = $(this).siblings('textarea');
        localStorage.setItem(textarea.attr('id'), textarea.val())
    });
})

