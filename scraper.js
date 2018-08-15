//files and apps needed to run
var create = require("./create.js");
var router = require("./router");
//var request = require("request");
//var cheerio = require("cheerio");
//var csv = require("fast-csv");

//create necessary folders and files
create.folder();

router.webScrape();

















//The information from the site you scrape should be stored in a CSV file named after
//today's date: 2016-01-29.csv.

//Use a third party npm package to scrape content from the site. 
//As part of this assignment, you'll need to explain why you chose this package.

//The scraper should be able to visit the website http://shirts4mike.com
//and follow links to all t-shirts.

//The scraper should get the price, title, url and image url from the product page
//and save it in the CSV.

//Use a third party npm package to create an CSV file. 
//As part of this assignment, you’ll need to explain why you chose this package.

//The column headers should be in this order: Title, Price, ImageURL, URL and Time
//‘Time’ should be the time the scrape happened. 
//The columns must be in order 
//(if we were really populating a database, 
//the columns would need to be in order correctly populate the database).

//If the site is down, an error message describing the issue should appear
//in the console. You can test your error by disabling the wifi on your computer.

//If the data file for today’s date already exists, your program should overwrite the file.


//EXTRA CREDIT
//Use a linting tool like ESLint to check your code for syntax errors and to ensure general code quality. You should be able to run npm run lint to check your code.

//When an error occurs log it to a file scraper-error.log 
//It should append to the bottom of the file with a time stamp and error
//e.g. [Tue Feb 16 2016 10:02:12 GMT-0800 (PST)] <error message>