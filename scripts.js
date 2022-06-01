$("document").ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>HELLO!</li>");
  });

  $("button#goodbye").click(function(){
    $("ul").prepend("<li>GOODBYE!</li>");
  });

  $("button#stop").click(function(){
    $("ul").prepend("<li>STOP COPYING ME</li>")
  })
});