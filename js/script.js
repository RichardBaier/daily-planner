// Earliest time, in military time
var startTime = 7;

var endTime = 18;

// Create variable for save data
var currentSaveData = [];
for (var i = 0; i < 24; i++) {
    currentSaveData.push('');
}

// Get data from localStorage
var storageData = JSON.parse(localStorage.getItem("hourlyTasks"));

// If the storage exists, write for user on page
if (storageData) {
    currentSaveData = storageData;
}

// Creating page elements
for (var i = startTime; i < endTime; i++) {
    var row = $("<div>")
        .addClass("row time-block")
        .attr("id", i);

    var currentDate = dayjs().date();
    var dayTitle = $('.currentDay').text(currentDate);

    var currentTime = dayjs().hour();

    var hour = $('<div>').addClass('hour col-1').text(currentTime);

    var input = $('textarea').addClass('description col-10 past').attr('id', i).val(currentSaveData[i]);

    var saveButton = ('<button>').addClass("btn saveBtn col-1").text("Save").attr("data-id", i);

    row.append(hour, input, saveButton);
    $(".container").append(row);
}

function setCurrentTime(){
    var currentHour = dayjs().hour();
    
    var currTextAreaEl = $("#" + currentHour).children("textarea");
    currTextAreaEl.removeClass("past").addClass("present");

    for(var i = currentHour + 1; i < endTime; i++){
        var row = $("#" + i);
        row.children("textarea").removeClass("past").addClass("future");
    }
}

function saveInput(saveId) {

}

setCurrentTime();