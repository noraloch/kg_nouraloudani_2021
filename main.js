//helper
function numberConverter(x) {
    let number = null;
    switch (x) {
        case "0":
            number = "Zero";
            break;
        case "1":
            number = "One";
            break;
        case "2":
            number = "Two";
            break;
        case "3":
            number = "Three";
            break;
        case "4":
            number = "Four";
            break;
        case "5":
            number = "Five";
            break;
        case "6":
            number = "Six";
            break;
        case "7":
            number = "Seven";
            break;
        case "8":
            number = "Eight";
            break;
        case "9":
            number = "Nine";
            break;
//not a clear edge case but I prefered to handle it because negative numbers are valid integers
        case "-":
            number = "Minus";
            break;
//prefered to handle a non valid input by throwing an error, istead of returning an unexpected value
        default:
            throw Error (x + "is not a valid integer");
    }
    return number
}
//end of helper

function mainFeature(array) {
    let result = "";
    let subRes = "";
    for (let i = 0; i < array.length; i++) {
        let str = array[i].toString();
        for (let y = 0; y < str.length; y++) {
            subRes += numberConverter(str.charAt(y));
            if (y === str.length - 1 && i !== array.length - 1) {
                result += subRes + ",";
                subRes = "";
            } else if (y === str.length - 1 && i === array.length - 1) {
                result += subRes;
                subRes = "";
            }
        }
    }
    return result
}
