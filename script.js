// All methods link

/* 

#boolean
#new-date
#date-todatestring
#date-totimestring
#date-tolocalestring
#date-getfullyear
#date-getmonth
#date-getdate
#date-gethours
#date-getminutes
#date-getseconds
#date-gettime
#date-getday
#filter

*/

// 02. Alert
// > The alert() method displays an alert box with a message and an OK button.
alert("Hello! I am an JavaScrip alert!!");
// 03. Confirm
// > The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.This method returns true if the user clicked "OK", otherwise false.
confirm("are you going to picnic");
// 04. Prompt
// > The prompt() method displays a dialog box that prompts the user for input. this method returns the input value if the user clicks "OK", otherwise it returns null.
const person = prompt("Please enter your name");
console.log(person);
// 05. setTimeout
// > The setTimeout()  sets a timer and executes a callback function after the timer expires.
setTimeout(() => {
  console.log("this is the first message");
}, 5000);

// 06. setInterval
// > The setInterval() repeatedly calls a function with a fixed delay between each call.
setInterval(function () {
  element.innerHTML += "Hello";
}, 1000);

// 07. Location Object
// > The location object can be used to get the current page address (URL) and to redirect the browser to a new page.
// There are many properties Like: hash, host, hostname, href, origin, pathname;
// 08. Get query string parameters
// 09. Redirect to a new URL
// 10. Navigator Object
// 11. Screen Object
// 12. History Object

// #Web API
// #Client Storage
// 01. Cookies
// 02. localStorage
// getItem, setItem, removeItem, key, clear,
// 03. sessionStorage

// 04. IndexedDB

// #FormData API
// 01. FormData

// #Drag and Drop API
// 01. Drag and Drop API
// 02. FileReader API

// #Geolocation API
// #Notification API
// #Canvas API
// #History API
// #Network Requests
