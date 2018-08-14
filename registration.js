$(function(){
    var clickLock = 0;
    
    $("a#next").bind("click", validateOne);
    $("a#next").on("click",function() {
        if(clickLock === 0) {
          clickLock = 1;
          setTimeout(function() {clickLock = 0;}, 500);
          if(validateOne()){
              $(".inner-container").animate({marginLeft : '-=370px'}, 500);
          }
        }
        return false;
    });
    
    $("a#back").click(function() {
        if(clickLock === 0) {
          clickLock = 1;
          setTimeout(function() {clickLock = 0;}, 500);
          $(".inner-container").animate({marginLeft : '+=370px'}, 500);
        }
        return false;
    }); 
    
    $("#email-address").on("blur", validateEmail);
    $("#first-name").on("blur", validateFirstName);
    $("#last-name").on("blur", validateLastName);
    $("#username").on("blur", validateUserName);
    $("#psw1").on("blur", validatePassword);
    $("#psw1, #psw2").on("blur", checkPasswordMatch);
    
    $("a#submit").bind("click", validateTwo);
    $("a#submit").on("click",function() {
        if(clickLock === 0) {
          clickLock = 1;
          setTimeout(function() {clickLock = 0;}, 500);
          if(validateTwo()){
              /**AJAX**/
          }
        }
    });
});

function validateEmail() {
    var email = $("#email-address").val();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        $("#invalid-email").css('display','none');
    }
    else {
        $("#invalid-email").css('display','block');
    }
    return re.test(email);
}

function validateFirstName() {
    var firstName = $("#first-name");
    if(firstName.val().length > 0) {
      $("#fname-req").css('display','none');
      return true;
    }
    else {
      $("#fname-req").css('display','block');
      return false;
    }
}

function validateLastName() {
     var lastName = $("#last-name");
    if(lastName.val().length > 0) {
      $("#lname-req").css('display','none');
      return true;
    }
    else {
      $("#lname-req").css('display','block');
      return false;
    }
} 

function validateUserName() {
    var username = $("#username").val();
    var re = /^((?!_)[A-Za-z0-9]){1,30}$/;
    if(re.test(username))
        $("#invalid-user").css('display','none');
    else
        $("#invalid-user").css('display','block');
    return re.test(username);
}

function validatePassword() {
    var psw = $("#psw1").val();
    var re = /^([0-9a-zA-Z@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\?]){1,30}$/;
    if(re.test(psw))
        $("#invalid-psw").css('display','none');
    else
        $("#invalid-psw").css('display','block');
    return re.test(psw);
}

function checkPasswordMatch() {
    var password = $("#psw1").val();
    var confirmPassword = $("#psw2").val();

    if (password != confirmPassword){
        $("#psw-dnm").css('display','block');
        return false;
    }
    else{
        $("#psw-dnm").css('display','none');
        return true;
    }
}

function validateOne() {
    /**if(validateEmail()) {
      $("#invalid-email").css('display','none');
    }
    if(validateFirstName()) {
      $("#fname-req").css('display','none');
    }
    if(validateLastName()) {
      $("#lname-req").css('display','none');
    }**/
    
    if (validateEmail() && validateFirstName() && validateLastName()) {
        return true;
    } 
    else {
        if(!validateEmail()) {
          $("#invalid-email").css('display','block');
        }
        if(!validateFirstName()) {
          $("#fname-req").css('display','block');
        }
        if(!validateLastName()) {
          $("#lname-req").css('display','block');
        }
        return false;
    }
}

function validateTwo() {
    /**
    if(validateUserName()){
        $("#invalid-user").css('display','none');
    }
    if(validatePassword()){
        $("#invalid-psw").css('display','none');
    }
    if(checkPasswordMatch()){
          $("#psw-dnm").css('display','none');
    }**/
    if(validateUserName() && validatePassword() && checkPasswordMatch()){
      return true;
    }
    
    else {
      if(!validateUserName()){
          $("#invalid-user").css('display','block');
      }
      if(!validatePassword()){
          $("#invalid-psw").css('display','block');
      }
      if(!checkPasswordMatch()){
          $("#psw-dnm").css('display','block');
      }
      return false;
    }
}
