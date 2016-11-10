function addContact(nameFirst,nameLast,emailkey,contactPhone) {
  var newContact = {
    firstName:nameFirst,
    lastName:nameLast,
    emailAddress:emailkey,
    phoneNumber:contactPhone
  };
  var newContactString = JSON.stringify(newContact);
  localStorage.setItem(emailkey,newContactString)
};

function editContact(nameFirst,nameLast,email,contactPhone,key) {
  var editContact = {
    firstName:nameFirst,
    lastName:nameLast,
    emailAddress:email,
    phoneNumber:contactPhone
  };
  var editContactString = JSON.stringify(editContact);
  localStorage.setItem(key,editContactString);
};
function validateForm() {
  var firstName = document.getElementById("firstName").value;
  if (firstName === null || firstName === ''|| firstName === "First Name") {
      alert("Please enter first name");
      return false;
  };

  var lastName = document.getElementById("lastName").value;
  if (lastName === null || lastName === '' || lastName === "Last Name") {
      alert("Please enter last name");
      return false;

};
  var email = document.getElementById("emailAddress").value;
  if (email === null || email === '' || email === "Email Address") {
      alert("Please enter email address");
      return false;
    } else {
      var validEmail = /\S+@\S+\.\S+/;
      if (!validEmail.test(email)) {
        alert("Please enter a valid email address");
        return false;
    };
  };
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber === null || phoneNumber === '' || phoneNumber === "Phone Number") {
      alert("Please enter phone number");
      return false;
    } else {
      var re = /\d{3}-\d{3}-\d{4}/;
      if(!phoneNumber.test(email) || !phoneNumber1.test(email)) {
        alert("Please enter a valid phone number")
        return false;
    };
  };
  return true;
};

/* for each contact stored in localStorage, add a new table row
*/
var table = document.getElementById("contactsTable");
if (table != null) {
  for(var i in localStorage) {

    var nextRow = table.insertRow();
    var nextContact = JSON.parse(localStorage[i]);

    var nextFirstName = nextRow.insertCell(0);
    nextFirstName.innerHTML = nextContact.firstName;
    var nextLastName = nextRow.insertCell(1);
    nextLastName.innerHTML = nextContact.lastName;
    var nextEmail = nextRow.insertCell(2);
    nextEmail.innerHTML = nextContact.emailAddress;
    var nextPhone = nextRow.insertCell(3);
    nextPhone.innerHTML = nextContact.phoneNumber;

    var nextEdit = nextRow.insertCell(4);
    var editLink = document.createElement("a");
    editLink.setAttribute("href","editContact.html?"+i);
    editLink.innerHTML = "edit";
    nextEdit.appendChild(editLink);

    var nextDelete = nextRow.insertCell(5);
    var deleteLink = document.createElement("a");
    deleteLink.setAttribute("href","deleteContact.html?"+i);
    deleteLink.innerHTML = "delete";
    nextDelete.appendChild(deleteLink);
  };
};

var addButton = document.getElementById("addButton");
if (addButton != null) {
  addButton.addEventListener("click", function(e)  {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    addContact(firstName,lastName,emailAddress,phoneNumber);
  });
};


var editButton = document.getElementById("editButton");
if (editButton != null) {
  var key = (window.location.search.substring(1));
  var contactInfo = JSON.parse(localStorage.getItem(key));
  document.getElementById("firstName").value = contactInfo.firstName;
  document.getElementById("lastName").value = contactInfo.lastName;
  document.getElementById("emailAddress").value = contactInfo.emailAddress;
  document.getElementById("phoneNumber").value = contactInfo.phoneNumber;
  editButton.addEventListener("click", function(e){
    e.preventDefault();
    if (validateForm ())
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    editContact(firstName,lastName,emailAddress,phoneNumber,key);
    window.location.href = "contactsHome.html";
  });
};

var deleteButton = document.getElementById("deleteButton");
if (deleteButton != null) {
  var id = window.location.search.substring(1);
  var contactInfo = JSON.parse(localStorage.getItem(id));
  document.getElementById("firstName").value = contactInfo.firstName;
  document.getElementById("lastName").value = contactInfo.lastName;
  document.getElementById("emailAddress").value = contactInfo.emailAddress;
  document.getElementById("phoneNumber").value = contactInfo.phoneNumber;
  deleteButton.addEventListener("click", function(e) {
    e.preventDefault();
    localStorage.removeItem(id);
    window.location.href = "contactsHome.html";
  });
};


/*var newConstactString = "firstName:Bob,lastName:Smith,emailAddress:bob@smith.com,phoneNumber:123"*/
