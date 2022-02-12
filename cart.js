// use function for shopping cart
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById("case-number");
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber)+ 1;  
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber)-1; 
    }
    caseInput.value = caseNumber;
    // for increasing the value
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = caseNumber * 59 ; 
}

// evenListener for plus button
document.getElementById("case-plus").addEventListener('click',function () {
   updateCaseNumber(true);
});

// evenlistener for minus button
document.getElementById("case-minus").addEventListener('click',function () {
    updateCaseNumber(false);
});

// shopping cart


