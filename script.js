console.log("Script is loaded and working!");
function submitTest() {
    // Bug: `undefinedFunction()` is not defined, which causes a crash
    alert("Submitting your test...");
    undefinedFunction();  // This will crash the site!
}
