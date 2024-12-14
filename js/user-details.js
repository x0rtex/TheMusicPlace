if (localStorage.getItem('user-details') === null) {
    // if userDetails is null, that means it has not been loaded before. we not initialize user-details object

    let userDetails = {
        firstName: "Walter",
        lastName: "Mitty",
        dateOfBirth: "1990-12-01",
        address1: "Buenos Ayres Drive",
        address2: "Strandhill",
        address3: "Co. Sligo"
    };

    // Now we store the user-details object as a localstorage object but
    // localstorage only stores text and user-details is a javascript object.
    // We convert a javascript object ot a string using JSON.stringify - we are being expedient!
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    localStorage.setItem('user-details',JSON.stringify(userDetails));
    document.getElementById("dateOfBirthID").setAttribute('value',userDetails.dateOfBirth);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
} else {
    // if localstorage variable user-details is already created - load it to javascript object.
    // JSON.parse turns it back into a javascript object
    userDetails = JSON.parse(localStorage.getItem('user-details'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dateOfBirthID").setAttribute('value',userDetails.dateOfBirth);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
}


const userDetailsUpdate = document.getElementById('user-details');
// add a listener for update details if user decides to save updated details 
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() {
    // if the user updates the user details - we update the userDetails javascript object
    const userDetails = {};
    userDetails.firstName = document.getElementById('firstNameID').value;
    userDetails.lastName = document.getElementById('lastNameID').value;
    userDetails.dateOfBirth = document.getElementById('dateOfBirthID').value;
    userDetails.address1 = document.getElementById('address1ID').value;
    userDetails.address2 = document.getElementById('address2ID').value;
    userDetails.address3 = document.getElementById('address3ID').value;
  
    // Finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
    localStorage.setItem('user-details',JSON.stringify(userDetails));

    event.preventDefault();
}
