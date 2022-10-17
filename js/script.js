// Earliest time, in military time
var startTime = 7;

var endTime = 18;

var confirmTime = window.confirm("Would you like to view standard business hours?");

// Displays 24 hours if user does not want business hours
if (!confirmTime) {
    startTime = 0;
    endTime = 24;
}

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

    var currentTime;

    var hour = $('<div>').addClass('hour col-1').text(currentTime);

    var input = $('textarea').addClass('description col-10 past').attr('id', i).val(currentSaveData[i]);

    var saveButton = ('<button>').addClass("btn saveBtn col-1").text("Save").attr("data-id", i);

    row.append(hour, input, saveButton);
    $(".container").append(row);
}

function setCurrentTime() {

}

function saveInput(saveId) {

}