const input = document.querySelector(".input-date");
const show = document.querySelector("#btn");
const output = document.querySelector("#output");

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    var reverseStr = reverseString(str);
    return str === reverseStr;
}

function checkPalindromeForAllFormats(date) {
    var listOfFormats = getDateFormats(date);

    flag = false;
    for(let i=0; i<listOfFormats.length; i++) {
        if(isPalindrome(listOfFormats[i])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function getDateFormats(date) {
    var dateStr = convertDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function convertDateToString(date) {
    newDate = {
        day: '',
        month: '',
        year: ''
    };

    if(date.day < 10) {
        newDate.day = "0" + date.day;
    }
    else {
        newDate.day = date.day.toString();
    }

    if(date.month < 10) {
        newDate.month = "0" + date.month;
    }
    else {
        newDate.month = date.month.toString();
    }

    newDate.year = date.year.toString();

    return newDate;    
}

function handler() {
    const dateString = input.value;

    if(dateString !== "") {
        listOfDate = dateString.split("-");
        
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }
        var answer = checkPalindromeForAllFormats(date);
        if(answer) {
            output.innerText = "Yay! Your birthday is Palindrome🥳🥳";
        }
        else {
            output.innerText = "Your birthday is not Palindrome😕😕";
        }
    }
}


show.addEventListener("click", handler);