// learnig ajax and api's


// topic to be corverred

// 1working wit apis
// intro to json
// postman
//making xhrs
// the fetch api
// working with axois

// INTRO TO AJAX

// const reg = new XMLHTTPRequest();

// reg.onload = function () {
//     console.log("it loaded");
//     // const data = this.responsetText
//     // console.log(data)
//     const data = JSON.parse(this.responseText)
//     console.log(data)
// }

// reg.onerror = function () {
//     console.log("opps error");
//     console.log(this;)
// }


// reg.open("GET", "https://swapi.py4e.com/api/", true);
// reg.send();

// corrected code

const reg = new XMLHttpRequest(); // Fixed typo

reg.onload = function () {
    console.log("It loaded");
    try {
        const data = JSON.parse(this.responseText); // Fixed property name
        console.log(data);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
};

reg.onerror = function () {
    console.error("Oops, error occurred!");
    console.log(this); // Fixed syntax error
};

// Opening the request and sending it
reg.open("GET", "https://swapi.py4e.com/api/", true);
reg.send();
