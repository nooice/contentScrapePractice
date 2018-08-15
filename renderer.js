var csv = require("fast-csv");
var create = require("./create");
var fs = require("fs");
var todaysDate = create.todaysDate();
create.csvWith(todaysDate);
var dir = create.dirLocation();
var pathToCSV = dir + "/" + todaysDate + ".csv";

function (shirtDetails) {
    
}