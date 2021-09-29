function shout(string) {
    return string.toUpperCase();
  }
 
  function whisper(string) {
      return string.toLowerCase()
  }

  function logShout(string) {
    console.log("hello".toUpperCase());
    
  }

 function logWhisper(string) {
      console.log('hello'.toLocaleLowerCase());
  }

  function sayHiToGrandma(string) {
  console.log(string)
  console.log(string.toLowerCase());
 console.log(string.toUpperCase());
      if (string === string.toLowerCase()) {
        return ("I can't hear you!")
    } else if (string === string.toUpperCase()) {
        return ("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.")
    }
}