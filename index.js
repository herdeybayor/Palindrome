$("input[type='button']").on("click", ()=>{
    palindrome(input);
})

$("input[type='text']").on('keypress', function (e) {
    if (e.key === "Enter"){
        palindrome(input);
    }
});

var input;

function palindrome(input) {
    input = $("input[type='text']").val();
    var inputLowerCase = input.toLowerCase();
    var inputArray = inputLowerCase.split("");
    var reversedArray = inputArray.reverse();
    var inputString = reversedArray.toString().replaceAll(",", "");
    var result = inputString.toString();

    if (input === ""){
        $("p").text("Enter a word!");
        $("p").css("color", "red");
    }
    else if(inputLowerCase === result) {
        $("p").text("Word is Palindrome");
        $("p").css("color", "green");
    } else {
        $("p").text("Word is not Palindrome");
        $("p").css("color", "red");
    };
}