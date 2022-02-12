// evenListener for plus button
document.getElementById("case-plus").addEventListener('click',function () {
    const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseFloat(caseNumber)+ 1;
});

// evenlistener for minus button
document.getElementById("case-minus").addEventListener('click',function () {
    const caseInput = document.getElementById("case-number");
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber)-1;
});