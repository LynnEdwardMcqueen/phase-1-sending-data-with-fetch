// Add your code here
function submitData(userName, userEmail) {
  const formData = {
    name : `${userName}`,
    email :`${userEmail}`,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      'Content-Type': ['application/json'],
      'Accept': ['application/json'],
    },
    body: JSON.stringify(formData),
  };
    
// This is the original code!  The return of the fetch was for the test.
/*  fetch("http://localhost:3000/users", configurationObject)

  .then(function (response) {
    return response.json()
  })
  .then(function (object) {
    // console.log(object)
    createParagraph(object)
  })
  .catch(err => createErrorParagraph(err))
}
*/
  return ( fetch("http://localhost:3000/users", configurationObject) 
  .then(function (response) {
    return response.json()
  })
  .then(function (object) {
    // console.log(object)
    createParagraph(object)
  })
  .catch(err => createErrorParagraph(err))
  )
}
submitData("Sam", "sam@sam.com")
.then(function (response) {
  return response.json()
})
.then(function (object) {
  // console.log(object)
  createParagraph(object)
})
.catch(err => createErrorParagraph(err))

function createErrorParagraph(object) {
  let newElement = document.createElement("p");
  debugger
  const textNode = document.createTextNode(`${object.message}`);
  debugger
  newElement.appendChild(textNode);
  document.body.appendChild(newElement);
}
function createParagraph(object) {
  let newElement = document.createElement("p");
  debugger
  const textNode = document.createTextNode(`${object.id}, name: ${object.name}, email: ${object.email} `);
  debugger
  newElement.appendChild(textNode);
  document.body.appendChild(newElement);
}