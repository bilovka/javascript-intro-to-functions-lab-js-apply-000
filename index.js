function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())
}
function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "HELLO!"
  var lowercase = "hello"
  var mixedcase = "Hi there"
  
  //string.toUpperCase()===uppercase
  //return "YES INDEED!"
  
  if(string.toLowerCase()===lowercase)
  return "I can't hear you"
  
  string.toLowerCase()===mixedcase
  string.toUpperCase()===mixedcase
  return "I love you, too"

}