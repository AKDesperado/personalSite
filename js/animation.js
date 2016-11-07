var currentPoint = 0;



$(document).ready(function () {
       $(function(){
            $("#meetAgustin").typed({ 
                strings: ["<span class='comment'>// Hello...let's code.</span> <br> <span class='var'>var</span> siteOwner = <span class='string'>\"Agustin Ortiz III\"</span>;<br> <span class='var'>var</span> nickName = <span class='string'>\"Augie\"</span>;<br> <span class='var'>var</span> traits = [<span class='string'>\"Developer\"</span>,<span class='string'>\"Researcher\"</span>, <span class='string'>\"Consultant\"</span>];<br> <span class='var'>var</span> home = map.LatLong(<span class='int'>39.9500064</span>,<span class='int'>-83.0313914</span>); <span class='comment'> //Columbus, OH</span> "],
                typeSpeed: 75,
                contentType: 'html'
            });




        }); 
    $window = $(window);

    //Iphone change table 
    if (screen.width >= 320 && screen.width <= 568) 
    {
          $("#contactTable").html('<tr><td><a href="mailto:augieortiz@me.com"><img id="mailPersonal"src="img/mail_icon.png" /></a><a href="mailto:augieortiz@me.com"><p class="left" id="personalEmail">augieortiz@me.com</p></a></td><td><a href=tel:"19078543164"><img id="" src="img/phone_icon.png" /></a> <a href=tel:"1907854-164"><p class="left" id="">Call Me</p></a></td>  <td><a href="../files/Agustin_Ortiz_Resume.pdf"><img id="documentImg" src="img/document_icon.png" /></a><a href="../files/Agustin_Ortiz_Resume.pdf"><p class="left" id="contactResume">Download R&#233sum&#233</p></a></td></tr><');
          $("#touchInfo").html('<p>(Tap square for more info)');
    }

    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
    {
        $("#touchInfo").html('<p>(Tap square for more info)');

        $(".page1").on("swipe", function () {
            $("#stay").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
                function () {
                $("#stay").removeClass('animated fadeOutDown');
                $("#centerContent").css({visibility: "hidden"});
                $("#stay").addClass('animated fadeInDown')
                $('#stay').css('background-image', 'url("../img/fenway.jpg")');
                $('#stay').css('background-size', 'cover');
            });
        });

         $(window).scroll(function() {

            var block = (page2 / 6) + $("#interest").height();
            var block1 = (page2 / 6) + ($("#interest").height() * 2);
            var block2 = (page2 / 6) + ($("#interest").height() * 3);
            var block3 = (page2 / 6) + ($("#interest").height() * 4);
            var block4 = (page2 / 6) + ($("#interest").height() * 5);

            if ($(this).scrollTop() > page1 / 4) 
            {
                $("#aboutAgustin").css({ visibility: "visible" });
                $("#aboutAgustin").addClass('animated slideInLeft');
            }
            if ($(this).scrollTop() > page2 / 5) 
            {
                $("#touchInfo").css({ visibility: "visible" });
                $("#touchInfo").addClass('animated flash');
            }
             if ($(this).scrollTop() > page2 / 6) 
            {
                $("#interest").css({ visibility: "visible" });
                $("#interest").addClass('animated fadeIn');
            }
            if ($(this).scrollTop() > block) 
            {
                $("#employer").css({ visibility: "visible" });
                $("#employer").addClass('animated fadeIn');
            }
            if ($(this).scrollTop() > block1) 
            {
                $("#assignment").css({ visibility: "visible" });
                $("#assignment").addClass('animated fadeIn');
            }
            if ($(this).scrollTop() > block2)
            {
                $("#mblock").css({ visibility: "visible" });
                $("#mblock").addClass('animated fadeIn');
            }
            if ($(this).scrollTop() > block3) 
            {
                $("#apple").css({ visibility: "visible" });
                $("#apple").addClass('animated fadeIn');
            }
                if ($(this).scrollTop() > block4) 
            {
                $("#code").css({ visibility: "visible" });
                $("#code").addClass('animated fadeIn');
            }


        });
    }
    else 
    {

        $(window).scroll(function() {
            if ($(this).scrollTop() > page1 / 2) 
            {
                $("#interest").css({ visibility: "visible" });
                $("#interest").addClass('animated fadeIn');
               
                
            }
             if ($(this).scrollTop() > page1 / 2) 
            {
                $("#employer").css({ visibility: "visible" });
                $("#employer").addClass('animated fadeIn');
            }
             if ($(this).scrollTop() > page1  / 2) 
            {
                $("#assignment").css({ visibility: "visible" });
                $("#assignment").addClass('animated fadeIn');
            }
               if ($(this).scrollTop() > page1) 
            {
                $("#mblock").css({ visibility: "visible" });
                $("#mblock").addClass('animated fadeIn');
            }
               if ($(this).scrollTop() > page1) 
            {
                $("#code").css({ visibility: "visible" });
                $("#code").addClass('animated fadeIn');
            }
               if ($(this).scrollTop() > page1) 
            {
                $("#apple").css({ visibility: "visible" });
                $("#apple").addClass('animated fadeIn');
            }
               if ($(this).scrollTop() > page1 / 4) 
            {
                $("#aboutAgustin").css({ visibility: "visible" });
                $("#aboutAgustin").addClass('animated slideInLeft');

            }


        });
        
        var picNum = 0;

     /*  $(".page").click(function () {


            if (picNum == 0)
            {

                $("#stay").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
                    function () {
                    $("#stay").removeClass('animated fadeOutDown');
                    $("#centerContent").css({visibility: "hidden"});
                    $("#stay").addClass('animated fadeInDown')
                    $('#stay').css('background-image', 'url("../img/from.jpg")');
                    $('#stay').css('background-size', 'cover');
                    picNum++;
                });
            }
            if (picNum == 1)
            {
               $("#stay").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
                    function () {
                    $("#stay").removeClass('animated fadeOutDown');
                    $("#centerContent").css({visibility: "hidden"});
                    $("#stay").addClass('animated fadeInDown')
                    $('#stay').css('background-image', 'url("../img/superman.jpg")');
                    $('#stay').css('background-size', 'cover');
                    $('#stay').height() = $("#centerContent").height();
                    $('#stay').html("<p>I am from columbus</p>");
                    picNum++;
                });  
            }

        });*/

    }

    var page0 = 0;
    var page1 = $(document).height() - $(".page4").height() - $(".page3").height() - $(".page3-1").height() - $(".page2").height() - $("#cssmenu").height();
    var page2 = $(document).height() - $(".page4").height() - $(".page3").height() - $(".page3-1").height() - $("#cssmenu").height();
    var page3 = $(document).height() - $(".page4").height() - $(".page3").height() - $("#cssmenu").height();

    var currentPage = page0;

    $(".page").click(function () {
    });


    //
    // Change Nav bar color based on hover of block object on page 2
    //

    

    $("#interest").hover(function () {
        $("#cssmenu").css({ background: "rgba(187, 0, 0, 1)" });
        $("#nav").html('<p class="navContent" id="navInterest">Travel. Programming. San Francisco 49ers. Apple. Tech. Microsoft. Boston Red Sox. USMNT. Blue Jackets. Columbus Crew. FCK1. LeBron James. Ohio State. Bowling Green State. Computer Science. PR. </p>');
        $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
        
    }, function () {
        $("#cssmenu").css({ background: "black" })
        $("#nav").html(' <a href="#" target=""><p class="navContent1" id="homes">| Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
        $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    });

    $("#mblock").hover(function () {
        $("#cssmenu").css({ background: "rgba(21, 112, 166, 1)" });
        $("#nav").html('<p class="navContent">4 years experience in .NET development. C# is most skilled language.  Developed both WPF and Silverlight applications for Eureka Gaming Inc.</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    }, function () {
        $("#cssmenu").css({ background: "black" });
        $("#nav").html(' <p class="navContent1">|</p><a href="#" target=""><p class="navContent1" id="homes">Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
        $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    });
    $("#apple").hover(function () {
        $("#cssmenu").css({ background: "rgba(102, 102, 102, 1)" });
        $("#nav").html('<p class="navContent">Currently running project management on iOS development project. Developed iOS application for BGSU.  Apple desktop support experience for both software and hardware.</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    }, function () {
        $("#cssmenu").css({ background: "black" });
        $("#nav").html(' <p class="navContent1">|</p><a href="#" target=""><p class="navContent1" id="homes">Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });

    });
    $("#employer").hover(function () {
        $("#cssmenu").css({ background: "rgba(255, 68, 17, 1)" })
        $("#nav").html(' <p class="navContent" id="navInterest">DevAO is a brand started by myself offering technology solutions featuring custom code & development.  My development skills have allowed me to reach out and help companies with their development needs.  If you are need of a solution, don\'t hesitate to call</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    }, function () {
        $("#cssmenu").css({ background: "black" });
        $("#nav").html(' <p class="navContent1">|</p><a href="#" target=""><p class="navContent1" id="homes">Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    });
    $("#assignment").hover(function () {
        $("#cssmenu").css({ background: "rgba(122, 193, 98, 1)" });
        $("#nav").html('<p class="navContent">Some previous client work includes: Database design, DevOps, Web Landing Pages, Content management solutions, email migrations, SharePoint dev, Domain Administration, Mobile Apps. </p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    }, function () {
        $("#cssmenu").css({ background: "black" });
        $("#nav").html(' <p class="navContent1">|</p><a href="#" target=""><p class="navContent1" id="homes">Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    });
    $("#code").hover(function () {
        $("#cssmenu").css({ background: "rgba(15, 22, 111, 1)" });
        $("#nav").html('<p class="navContent">5 years programming experience. Developed simulation market game with Eureka Gaming Inc. Developed bank server management site. Developed this :)</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    }, function () {
        $("#cssmenu").css({ background: "black" });
        $("#nav").html('<p class="navContent1">|</p> <a href="#" target=""><p class="navContent1" id="homes">Agustin Ortiz</p></a><p class="navContent1">|</p><a href="https://www.linkedin.com/pub/agustin-ortiz/5a/b60/764" target="_blank"><p class="navContent1" id="linkedIn">LinkedIn </p></a><p class="navContent1">|</p><a href="https://twitter.com/augieortiz" target="_blank"><p class="navContent1" id="twitter">Twitter </p></a><p class="navContent1">|</p><a href="https://www.facebook.com/ortizaugie" target="_blank"><p class="navContent1" id="facebook"</p>facebook</a><p class="navContent1">|</p>');
         $("#cssmenu").addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $("#cssmenu").removeClass('animated fadeInDown');
        });
    });

    //
    //  End of Nav Bar Hover Events 
    //

    //
    // Footer hover events
    //

    $("#mailPersonal, #personalEmail").hover(function () {
        $("#mailPersonal").attr("src", "img/mail_icon_white.png");
        $("#personalEmail").css({ color: "#3498db" });
    }, function () {
        $("#mailPersonal").attr("src", "img/mail_icon.png");
        $("#personalEmail").css({ color: "white" });
    });

    $("#mailSogeti, #contactSogeti").hover(function () {
        $("#mailSogeti").attr("src", "img/mail_icon_white.png");
        $("#contactSogeti").css({ color: "#ff4411" });
    }, function () {
        $("#mailSogeti").attr("src", "img/mail_icon.png");
        $("#contactSogeti").css({ color: "white" });
    });

    $("#mailBGSU, #contactBgsu").hover(function () {
        $("#mailBGSU").attr("src", "img/mail_icon_white.png");
        $("#contactBgsu").css({ color: "#fe871a" });
    }, function () {
        $("#mailBGSU").attr("src", "img/mail_icon.png");
        $("#contactBgsu").css({ color: "white" });
    });

    $("#mailOSU, #contactOhioState").hover(function () {
        $("#mailOSU").attr("src", "img/mail_icon_white.png");
        $("#contactOhioState").css({ color: "#b00" });
    }, function () {
        $("#mailOSU").attr("src", "img/mail_icon.png");
        $("#contactOhioState").css({ color: "white" });
    });

    $("#phoneImg, #number").hover(function () {
        $("#phoneImg").attr("src", "img/phone_icon_white.png");
        $("#number").css({ color: "#3498db" });
    }, function () {
        $("#phoneImg").attr("src", "img/phone_icon.png");
        $("#number").css({ color: "white" });
    });

    $("#facebookImg, #contactFacebook").hover(function () {
        $("#facebookImg").attr("src", "img/facebook_icon_white.png");
        $("#contactFacebook").css({ color: "#3498db" });
    }, function () {
        $("#facebookImg").attr("src", "img/facebook_icon.png");
        $("#contactFacebook").css({ color: "white" });
    });

    $("#twitterImg, #contactTwitter").hover(function () {
        $("#twitterImg").attr("src", "img/twitter_icon_white.png");
        $("#contactTwitter").css({ color: "#3498db" });
    }, function () {
        $("#twitterImg").attr("src", "img/twitter_icon.png");
        $("#contactTwitter").css({ color: "white" });
    });

    $("#documentImg, #contactResume").hover(function () {
        $("#documentImg").attr("src", "img/document_icon_white.png");
        $("#contactResume").css({ color: "#3498db" });
    }, function () {
        $("#documentImg").attr("src", "img/document_icon.png");
        $("#contactResume").css({ color: "white" });
    });






    //$(".page2").click(function () {//dddddddddd
    //    $('html, body').animate({ scrollTop: page2 +3 });
    //});
    $(".page3-1").click(function () {
        $('html, body').animate({ scrollTop: page3 + 3 });
    });
    $("#ohiostate   ").click(function () {
        $('html, body').animate({ scrollTop: page3 + 3 });
    });
    $(".page3").click(function () {
        $('html, body').animate({ scrollTop: $(document).height()});
    });
    

    $('[data-type]').each(function () {
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        $(this).data('Xposition', $(this).attr('data-Xposition'));
        $(this).data('speed', $(this).attr('data-speed'));
    });

    $('section[data-type="background"]').each(function () {


        var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
        $(window).scroll(function () {

            //console.log($(document).scrollTop());
 
            
            //animateSection($(document).scrollTop())
            console.log($(document).scrollTop());

            //if ($(document).scrollTop() >= 0 && $(document).scrollTop() < page1) {
            //    $("#cssmenu").css("background-color", "#b3b3b3");
            //}
            //if ($(document).scrollTop() >= page1 && $(document).scrollTop() < page2)
            //{
            //    $("#cssmenu").css("background-color", "#b00");
            //}
            //if ($(document).scrollTop() >= page2 && $(document).scrollTop() < page3)
            //{
            //    $("#cssmenu").css("background-color", "#b00");
            //}
            
            //if ($(document).scrollTop() >= page3)
            //{
            //    $("#cssmenu").css("background-color", "#fe871a");
            //}

            if (($window.scrollTop() + $window.height()) > (topOffset) &&
				 ((topOffset + $self.height()) > $window.scrollTop())) {

                var yPos = -($window.scrollTop() / $self.data('speed'));

                if ($self.data('offsetY')) {
                    yPos += $self.data('offsetY');
                }

                var coords = '50% ' + yPos + 'px';

                $self.css({ backgroundPosition: coords });

                $('[data-type="sprite"]', $self).each(function () {

                    var $sprite = $(this);

                    var yPos = -($window.scrollTop() / $sprite.data('speed'));
                    var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

                    $sprite.css({ backgroundPosition: coords });

                });

                $('[data-type="video"]', $self).each(function () {

                    var $video = $(this);

                    var yPos = -($window.scrollTop() / $video.data('speed'));
                    var coords = -(yPos + $video.data('offsetY')) + 'px';

                    $video.css({ top: coords });

                });
                $('[data-type="content"]', $self).each(function () {

                    var $content = $(this);

                    var yPos = -($window.scrollTop() / $content.data('speed'));
                    var coords = -(yPos + $content.data('offsetY')) + 'px';

                    $content.css({ top: coords });

                });

            }; // in view			

        }); // window scroll

    });	// each data-type


}); // document ready


function animateSection(newPoint)
{
    var page0 = 0;
    var page1 = $(document).height() - $(".page4").height() - $(".page3").height() - $(".page3-1").height() - $(".page2").height() - $("#cssmenu").height();
    var page2 = $(document).height() - $(".page4").height() - $(".page3").height() - $(".page3-1").height() - $("#cssmenu").height();
    var page3 = $(document).height() - $(".page4").height() - $(".page3").height() - $("#cssmenu").height();
    
    //var currentPoint = $(document).scrollTop();

    if (newPoint > currentPoint)
        //Scroll down to next page
    {

        if (currentPoint == page0) {
            //Scroll down from 0 to 1
            $('html, body').animate({ scrollTop: page1 });
            currentPoint = page1;
        }
    }

    else
    {
        //Scroll up
        if (currentPoint == page1)
        {
      }
    }
}