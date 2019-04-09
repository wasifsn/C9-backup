var request = require('request');
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today', function (error, response, body) {
    
    if(!error && response.statusCode==200){
     
      const parsedData = JSON.parse(body);
       console.log(parsedData ["results"] ["sunrise"]);
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }
});