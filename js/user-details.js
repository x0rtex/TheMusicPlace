if (localStorage.getItem('user-details') === null) {

    let userDetails = {
        firstName: "Walter",
        lastName: "Mitty",
        dateOfBirth: "1990-12-01",
        address1: "Buenos Ayres Drive",
        address2: "Strandhill",
        address3: "Co. Sligo"
    };

    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    localStorage.setItem('user-details',JSON.stringify(userDetails));
    document.getElementById("dateOfBirthID").setAttribute('value',userDetails.dateOfBirth);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
} else {
    userDetails = JSON.parse(localStorage.getItem('user-details'));
    document.getElementById("firstNameID").setAttribute('value',userDetails.firstName);
    document.getElementById("lastNameID").setAttribute('value',userDetails.lastName);
    document.getElementById("dobID").setAttribute('value',userDetails.dateOfBirth);
    document.getElementById("address1ID").setAttribute('value',userDetails.address1);
    document.getElementById("address2ID").setAttribute('value',userDetails.address2);
    document.getElementById("address3ID").setAttribute('value',userDetails.address3);
}

const userDetailsUpdate = document.getElementById('user-details');
userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails(event) {
    const userDetails = {};
    userDetails.firstName = document.getElementById('firstNameID').value;
    userDetails.lastName = document.getElementById('lastNameID').value;
    userDetails.dateOfBirth = document.getElementById('dobID').value;
    userDetails.address1 = document.getElementById('address1ID').value;
    userDetails.address2 = document.getElementById('address2ID').value;
    userDetails.address3 = document.getElementById('address3ID').value;

    localStorage.setItem('user-details',JSON.stringify(userDetails));

    event.preventDefault();
}
