$("document").ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>HELLO!</li>");
    $("ul#webpage").prepend("<li>WHY HELLO THERE</li>");
    $('li').css('background-color', 'green');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").after("<li>GOODBYE!</li>");
    $("ul#webpage").after("<li>GOOODBYE,SEE YOU SOON</li>");
    $("li").css("background-color" , "red");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#stop").click(function(){
    $("ul#user").append("<li>STOP COPYING ME</li>");
    $("ul#webpage").append("<li>I JUST WANT A FRIEND</li>")
  });
  $("li").css("background-color" , "yellow");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    })
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    })
});