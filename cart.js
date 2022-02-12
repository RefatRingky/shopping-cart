// use function for shopping cart
function updateCaseNumber( product,price,isIncreasing) {
    const caseInput = document.getElementById(product+'-number');
    let caseNumber = caseInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber)+ 1;  
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber)-1; 
    }
    caseInput.value = caseNumber;
    // for increasing the value
    const caseTotal = document.getElementById(product+ '-total');
    caseTotal.innerText = caseNumber * price ; 
}

// evenListener for plus button
document.getElementById("case-plus").addEventListener('click',function () {
   updateCaseNumber('case',59, true);
});

// evenlistener for minus button
document.getElementById("case-minus").addEventListener('click',function () {
    updateCaseNumber('case',59, false);
});

// phone increase decrease 
document.getElementById("phone-plus").addEventListener('click', function name(params) {
    updateCaseNumber('phone',1219,true);
});
// for minus
document.getElementById("phone-minus").addEventListener('click', function name(params) {
    updateCaseNumber('phone',1219,false);
});



