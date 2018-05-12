(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim","jitesh","soni"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0));
   if (firstLetter == 'j' || firstLetter == 'J' ) {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);