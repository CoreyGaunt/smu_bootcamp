// Switch function
function takeUpper(Letter) {
    var message = "";
    switch(Letter) {
        case "A":
          message = "1";
          break;
        case "B":
          message = "2";
          break;
        case "C":
          message = "3";
          break;
        case "D":
          message = "4";
          break;
        case "E":
          message = "5";
          break;
        default:
          message = "Please enter an Upper Case letter"
    }
    console.log(message);
};