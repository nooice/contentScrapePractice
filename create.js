//scraper should create a folder called data, if a folder doesnt already exist.
var fs = require('fs');
var dir = './data';

function folder() {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}

function csvWith(todaysDate) {
    var filePath = dir + "/" + todaysDate + ".csv";
    fs.writeFile(filePath, "", (err) =>{
        if (err) throw err;
    });
}

function todaysDate() {
    var d = new Date();
    var dDay = ("0" + d.getDate()).slice(-2).toString();
    var dMonth = ("0" + (d.getMonth() + 1)).slice(-2).toString();
    var dYear = d.getFullYear().toString();
    var todaysDate = dYear + "-" + dMonth + "-" + dDay;
    return todaysDate;
}

function dirLocation(){
    return dir;
}

module.exports.dirLocation = dirLocation;
module.exports.folder = folder;
module.exports.csvWith = csvWith;
module.exports.todaysDate = todaysDate;