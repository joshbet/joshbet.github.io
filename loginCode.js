function checkCreds(){
    console.log("checkCreds() Started")
    
    //Declared variables
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;
    
    //Get value of firstName from input box fName.
    firstName = document.getElementById("fName").value;
    console.log("The first name is: " + firstName);
    
    //Get value of lastName from input box lName.
    lastName = document.getElementById("lName").value;
    console.log("The last name is: " + lastName);
    
    //Get value of badgeNumb from input box badgeID.
    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is: " + badgeNumb);

    //Add firstName and LastName to get the fullName
    fullName = firstName + " " + lastName;
    console.log("The user's full name is: " + fullName);

    //fullNameLength uses .length to get the number of characters fullName is using.
    fullNameLength = fullName.length;
    console.log("The user's full name length is: " + fullNameLength);

    //If statement checks if fullNameLength is greater than 20 or less than 1 to meet login requirements
    if(fullNameLength > 20 || fullNameLength < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again."
    //If statement checks if badgeNumb is greater than 999 or less than 1 to meet login requirements
    }else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again. "
    } 
    //If conditions are met, redirect user to uatSpace.html
    else {
        location.replace("./uatSpace.html")
    }

}