function MarsService() {

var apiKey = "&api_key=Jtr2SNrDgp3N1ujHOk6r8CXp9LHnfBD1L60Qu3J9";
var baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
var camera = "&camera=mast"
var roverResults = [];

this.search = function(query, cb){
    $.get(baseUrl + query + camera + apiKey).then(function (res){
        roverResults = res.photos
        console.log(roverResults);
        cb(roverResults);
    })
}

}// end of service constructor