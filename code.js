/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let person = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "Favorite Color": "Yellow",
}

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

function renderPerson(person) {
  let containerDiv = document.createElement('div');
  containerDiv.className = 'card';

  let nameElement = document.createElement('h2');
  nameElement.innerText = `${person.firstName} ${person.lastName}`;
  
  let hobbiesElement = document.createElement('h4');

  hobbiesElement.innerText = 'Hobbies';

  let hobbiesUlElement = document.createElement('ul');

  for (let index = 0; index < person.hobbies.length; index++) {
    let hobbiesIndex = person.hobbies[index];
    let listItem = document.createElement('li');
    listItem.innerText = hobbiesIndex;
    hobbiesUlElement.append(listItem);

  }

  let addressElement = document.createElement('h4');
  addressElement.innerText = 'Shipping Address';
  let addressText = document.createElement('p');

  addressText.innerText = `${person.firstName} ${person.lastName}
  ${person.address.number} ${person.address.street}
   ${person.address.city}, ${person.address.state} ${person.address.zipcode}`;

  let favColorElement = document.createElement('h4');
  favColorElement.innerText = ('Favorite Color');

  let favColorText = document.createElement('p');
  favColorText.innerText = `${person["Favorite Color"]}`;

  

  document.body.append(containerDiv);
  containerDiv.append(nameElement, hobbiesElement, hobbiesUlElement, addressElement, addressText, favColorElement, favColorText);

}

renderPerson(person);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here
let newPerson = {
  firstName: "Cole",
  lastName: "Craft",
  hobbies: ["Xbox", "Comics", "D&D"],
  address: {
    number: 1213,
    street: "Carriage Parc Drive",
    city: "Chattanooga",
    state: "Tennessee",
    zipcode: "37421",
  },
  "Favorite Color": "Dark Purple",
}
renderPerson(newPerson);

/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

function changePersonToBart(person) {
  // Your Code Here
  person.firstName = 'Bart';
  person["Favorite Color"] = "Orange";
  person.hobbies.pop();
  person.hobbies.push('Skateboarding');

  return person;
}

// Then, call the function with the argument examplePerson
// Assign the result to a new variable.  Then call renderPerson with the 
// new variable

let changeToBart = changePersonToBart(person);

renderPerson(changeToBart);

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here




