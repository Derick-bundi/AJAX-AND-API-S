const req = new XMLHttpRequest();


req.onload = function () {
    console.log("nice it loaded");
    const data = JSON.parse(this.responseText);
    console.log(data.name);
}
req.onerror = function () {
    console.log("Oops, there was an error!");
    console.log(this);
}


req.open("GET", "https://swapi.dev/api/people/1/");
req.send();