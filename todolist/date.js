
module.exports.getDate=getDate;
function getDate(){
let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let day = today.toLocaleDateString("en-US", options);
return day;
}

module.exports.getDay=getDay;
function getDay(){
    let today = new Date();
    let options = { weekday: 'long'};
    let day = today.toLocaleDateString("en-US", options);
    return day;
    }