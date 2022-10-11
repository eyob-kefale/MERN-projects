const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");

})
app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "8b5291040a7710997743e427a63a0edb";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&unit=" + unit;
    https.get(url, function (response) {
        //console.log(response.statusCode);

        response.on("data", function (data) {
            // print hexadecimals
            //console.log(data);

            // and change in to string

            const weatherData = JSON.parse(data)
            const timezone = weatherData.timezone
            const temp = weatherData.main.temp
            console.log("London's time zone is " + timezone);
            res.write("<h1>The timeZone in" + query + " is " + timezone + "<h1>")
            const icon = weatherData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The tempreture in " + query + " is " + temp + " degrees celcius</h1>")
            res.write("<img src=" + imageUrl + ">")
            res.send()
            // "Londen's weather description " + weatherData.weather[0].description

            // const object={
            //     name:"eyob",
            //     favouriteFood:"raw Meat"
            // }
            // console.log(JSON.stringify(object));
        })
    })



})



app.listen(process.env.PORT || 3000, function () {
    console.log("Server is ruunning on port 3000.");

})

