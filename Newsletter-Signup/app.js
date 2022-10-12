const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    memebers: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us14.api.mailchimp.com/3.0/lists/f3b17c86c3";
  //https://us9.api.mailchimp.com/3.0/lists/37f7228181
  const options = {
    method: "POST",
    auth: "eyob:830dce7cac919d36c0e07913e72e42c7-us14"
  }

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
      console.log(statusCode)
    } else {
       res.sendFile(__dirname + "/failure.html")



    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    })

  })
  request.write(jsonData);
})



app.post("/failure", function (req, res) {
  res.redirect("/")
})


app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server is running on port 3000");
})

// mailchimp api
// bc35bfec5ffce6d0a71ff0c5f6bdb06b-us9

// mailchimp id
// 37f7228181


// apikey
//80216ffb7053b17f744a45b39da802f2-us9

// apikey for job
// 830dce7cac919d36c0e07913e72e42c7-us14