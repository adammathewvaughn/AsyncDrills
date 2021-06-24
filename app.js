let someFunction = astringmessage=>console.log(astringmessage);
someFunction("amessage");
setTimeout(()=>{
    someFunction("slowermessage")
}, 2000);


