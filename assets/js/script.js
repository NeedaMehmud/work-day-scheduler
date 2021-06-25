var saveButtons = $('.saveButton');

//current time and date
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentTime = moment().format('ha')
$('#current-time').append(currentDay);


//color coding the schedule
$('textarea').each(function () {
    var textareaId = $(this).attr('id') //9am
    var scheduleTime = moment(textareaId, 'ha');
    console.log(scheduleTime);

    if (moment(scheduleTime).isAfter(moment())) {
        $(this).addClass('bg-success')
    } else if (moment(scheduleTime).isBefore(moment())) {
        $(this).addClass('bg-secondary')
    } else {
        $(this).addClass('bg-danger')
    }

    if (textareaId === currentTime) {
        $(this).removeClass('bg-success');
        $(this).removeClass('bg-secondary');
        $(this).addClass('bg-danger');
    }
});

//saving text to local storage
saveButtons.each(function () {
    $(this).click(function () {
        console.log($(this).siblings('textarea').attr('id'))
        var textarea = $(this).siblings('textarea');
        localStorage.setItem(textarea.attr('id'), textarea.val())
    });
})

