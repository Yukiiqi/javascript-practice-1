let first = "Yuqi";
let last = "Hu";
console.log(last + " " + first);
//make a variable for the button
let button = document.querySelector("button");
//make a function
function logName() {
  console.log(last + " " + first);
}

var didAppend = false;

//id = "thisone" class="special-button"

// var button = document.querySelector(".special-button"); id would be "#this one"

function appendName() {
  if (didAppend) return;
  //create p element
  let p = document.createElement("p");
  //put text inside the p element
  p.innerText = last + " " + first;

  // Append the p element as a child of the page's body - add p to html page
  document.body.appendChild(p);
  didAppend = true;
}

// Attach function to click on button
button.addEventListener("click", appendName);

// Make an array of your three favorite hobbies
//Loop through the array and log each item using console.log()
let hobbies = ["Dubbing", "Watching K-dramas", "Painting"];

let ul = document.createElement("ul");

for (let i = 0; i < hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
  console.log(hobbies[i]);
}

//another for each loop way
hobbies.forEach((hobby) => {
  console.log(hobby);
});
