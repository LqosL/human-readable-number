module.exports = function toReadable (number) {
    let result = "";
    let hundreds;
    let dozens;
    let units;
    let leftover = 0;
    function numToWord(num) {
        switch (num){
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            case 4:
                return "four";
                break;
            case 5:
                return "five";
                break;
            case 6:
                return "six";
                break;
            case 7:
                return "seven";
                break;
            case 8:
                return "eight";
                break;
            case 9:
                return "nine";
                break;
            case 10:
                return "ten";
                break;
            case 11:
                return "eleven";
                break;
            case 12:
                return "twelve";
                break;
            case 13:
                return "thirteen";
                break;
            case 14:
                return "fourteen";
                break;
            case 15:
                return "fifteen";
                break;
            case 16:
                return "sixteen";
                break;
            case 17:
                return "seventeen";
                break;
            case 18:
                return "eighteen";
                break;
            case 19:
                return "nineteen";
                break;
            case 20:
                return "twenty";
                break;
            case 30:
                return "thirty";
                break;
            case 40:
                return "forty";
                break;
            case 50:
                return "fifty";
                break;
            case 60:
                return "sixty";
                break;
            case 70:
                return "seventy";
                break;
            case 80:
                return "eighty";
                break;
            case 90:
                return "ninety";
                break;
        }
    }
    if (number == 0){
        return "zero";
    }
    if (number >=100) {
        hundreds = Math.floor(number / 100)
        result = result + numToWord(hundreds) + " hundred";
        leftover = number - hundreds * 100;
    } else {
        leftover = number;
    }
    switch (true) {
        case leftover < 20 && leftover > 0:
            result = result +" " +numToWord(leftover);
            break;
        case leftover > 0 && leftover / 10 == Math.floor( leftover / 10):
            dozens = leftover;
            result = result + " " + numToWord(dozens);
            break
        case leftover > 0 && leftover / 10 != Math.floor( leftover / 10):
            dozens = Math.floor( leftover / 10);
            result =  result + " " + numToWord(dozens * 10);
            units = leftover - dozens * 10;
            if (units > 0) {
                result =  result + " " + numToWord(units);
            }
    }
    return result.trim()
}
