let checkBtn=document.querySelector("#check-btn");
let result=document.querySelector("#results-div");
let input=document.querySelector("#user-input");
let clearBtn=document.querySelector("#clear-btn");




let checkNum=(userInput)=>{
  let patterns =[
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/
  ];

  return patterns.some(pattern=>pattern.test(userInput));
  

}

let showAlert=()=>{
  alert("Please provide a phone number.");
}

let invalidNum=(userInput)=>{
   result.innerText=`Invalid US number: ${userInput}`;
  
}


checkBtn.addEventListener("click",()=>{
  let userInput=input.value.trim();

  if(userInput==""){
    showAlert();
  }
  
  else if(checkNum(userInput)){
    
    result.innerText=`Valid US Number: ${userInput}`;
      // invalidNum(userInput);
  }

  else{
    invalidNum(userInput);
  }

})


clearBtn.addEventListener("click",()=>{
  result.innerText="";
  input.value="";
});




