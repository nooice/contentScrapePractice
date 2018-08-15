var request = require("request");
var cheerio = require("cheerio");

var url = "http://shirts4mike.com";
var csvContent = [['Title','Price','ImageURL','URL','Time']];

//start scrape
function webScrape() {
    request(url, function(err, response, html) {
        if(!err) {
            var $ = cheerio.load(html);
            var shirtsPage = url + "/" + $(".shirts a").attr("href");
            find(shirtsPage);
        }else (console.log(err.message));
    }); 
}

function find(urlPath) {
    request(urlPath, function(err, response, html) {
        var shirtURL = "";
        if(!err) {
            var $ = cheerio.load(html);
            $(".products li a").each(function() {
                shirtURL = url + "/" + $(this).attr("href");
                buildShirtFrom(shirtURL);
            });
        }else (console.log(err.message));
   }); 
}

function buildShirtFrom(urlPath){
    var catalog = [];
    request(urlPath, function(err, response, html) {
        if(!err) {
            var $ = cheerio.load(html);
            var price = $(".price").text();
            var shirtTitle = $(".shirt-picture img").attr("alt");
            var imgURL = url + "/" + $(".shirt-picture img").attr("src");
            catalog.push(price);
            catalog.push(urlPath);
            catalog.push(shirtTitle);
            catalog.push(imgURL);
            csvContent.push(catalog);
            return catalog;
//            console.log(csvContent);
        }else (console.log(err.message));
        
    });
}

module.exports.webScrape = webScrape;


//find a file and read the data
//
//fs.createReadStream('test.csv')
//    .pipe(csv())
//    .on('data', function(data){
//        console.log(data[0]);
//    })
//    .on('end', function(data){
//        console.log('finished reading')
//    });

//async function main() {
//    myobj["data1"] = await doA();
//    myobj["data2"] = await doB();
//    console.log(myobj);
//}