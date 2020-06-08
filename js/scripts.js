$("document").ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();

    const userInput = $("input#user-sentence").val();
    const userInputArray = userInput.split(" ");
    const newArray = [];
    userInputArray.forEach(function(word) {
      if(word.length >= 3) {
        newArray.push(word);
      }
    });

    newArray.reverse();
    const returnString = newArray.join(' ');
    $("#display").text(returnString);
  });
});