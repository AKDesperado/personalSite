$(function () {



    var sogeti = $("#contactSogeti");

    var sogetiString = $("#contactSogeti").text();

    console.log(sogeti.text());

    sogeti.hover(function () {

        sogeti.html("agustin.ortiz@us.sogeti.com");

    }, function () {

        sogeti.html(sogetiString);

    });



    var workNumber = $("#workNumber");

    var workNumberString = $("#workNumber").text();

    workNumber.hover(function () {

        workNumber.html("Sorry : (");

    }, function () {

        workNumber.html(workNumberString);

    });



    var number = $("#number");

    var numberString = $("#number").text();

    number.hover(function () {

        number.html("907-854-3164");

    }, function () {

        number.html(numberString);

    });



    var personalEmail = $("#personalEmail");

    var personalEmailString = $("#personalEmail").text();

    personalEmail.hover(function () {

        personalEmail.html("augie@devao.me");

    }, function () {

        personalEmail.html(personalEmailString);

    });



    var contactBgsu = $("#contactBgsu");

    var contactBgsuString = $("#contactBgsu").text();

    contactBgsu.hover(function () {

        contactBgsu.html("aortiz@bgsu.edu");

    }, function () {

        contactBgsu.html(contactBgsuString);

    });



    var contactOhioState = $("#contactOhioState");

    var contactOhioStateString = $("#contactOhioState").text();

    contactOhioState.hover(function () {

        contactOhioState.html("ortiz.108@osu.edu");

    }, function () {

        contactOhioState.html(contactOhioStateString);

    });



    var contactTwitter = $("#contactTwitter");

    var contactTwitterString = $("#contactTwitter").text();

    contactTwitter.hover(function () {

        contactTwitter.html("@augieortiz");

    }, function () {

        contactTwitter.html(contactTwitterString);

    });



    var contactFacebook = $("#contactFacebook");

    var contactFacebookString = $("#contactFacebook").text();

    contactFacebook.hover(function () {

        contactFacebook.html("facebook.com/ortizaugie");

    }, function () {

        contactFacebook.html(contactFacebookString);

    });



    

});





