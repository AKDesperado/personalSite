$(document).ready(function () {

    var sogetiStartDate = new Date(2014, 5, 16);
    var sogetiTime = calculateDate(sogetiStartDate);

    var huntingtonStartDate = new Date(2014, 6, 17);
    var huntingtonTime = calculateDate(huntingtonStartDate);

    $("#sogetiStartDate").text("Tenure: " + sogetiTime);
    $("#huntingtonStartDate").text("Tenure: " + huntingtonTime);

});

function calculateDate(startDate)
{
    var now = new Date();
    now.getDate();
    var difference = now - startDate;
    var days = (difference / (1000 * 60 * 60 * 24));
    var week = days / 7;
    var month = days / 30;
    var monthRemainderInWeeks = ((week % 4));
    var yearRemainderInMonths = ((month % 12));
    var year = days / 365;

    //value to Return
    var time;

    //Format String based on plural cases


    //Less than a month 
    if (days < 30) {
        //Days is less than one month - print in weeks

        if (days < 7) {
            //Days is less than one week print in days.
            //Print in "X days"
            days = Math.floor(days);
            if (days == 1)
                time = days + " day";
            else
                time = days + " days";
        }
        else {
            //Longer than one week print weeks
            //Print "X weeks"
            week = Math.floor(week);
            if (week == 1)
                time = week +  " week";
            else
                time = week + " weeks";
        }
    }
        //Greater than a month
    else if (days > 30 && days < 365) {

        month = Math.floor(month);
        monthRemainderInWeeks = Math.floor(monthRemainderInWeeks);

        //If week is less than one print in "X months"
        if (monthRemainderInWeeks < 1) {
            if (month == 1)
                time = Math.floor(month) + " Month";
            else
                time = Math.floor(month) + " Months";
        }
        else {
            //Days is longer than one month but less than one year 
            //Print in "X month X week"
            if (monthRemainderInWeeks == 1 && month == 1)
                time = month + " Month " + monthRemainderInWeeks + " week";
            else if (monthRemainderInWeeks == 1 && month > 1)
                time = month + " Months " + monthRemainderInWeeks + " week";
            else if (monthRemainderInWeeks > 1 && month == 1)
                time = month + " Month " + monthRemainderInWeeks + " weeks";
            else
                time = month + " Months " + monthRemainderInWeeks + " weeks";
        }
    }
        //Days is greater than a year
    else {
        year = Math.floor(year);
        yearRemainderInMonths = Math.floor(yearRemainderInMonths);
        monthRemainderInWeeks = Math.floor(monthRemainderInWeeks);


        //    var yearString;
        var monthString;
        var monthRemainderInWeeks;
        if (year == 1)
            yearString = " Year ";
        else
            yearString = " Years ";
        if (month == 1)
            monthString = " Month ";
        else
            monthString = " Months ";
        if (monthRemainderInWeeks == 1)
            weekString = " Week "
        else
            weekString = " Weeks "  

        //If the time is eqal to one year with no weeks + or months
        if (yearRemainderInMonths < 1 && monthRemainderInWeeks < 1)
            time = year + yearString;
            //Month is greater than one + but no weeks
        else if (yearRemainderInMonths > 1 && monthRemainderInWeeks < 1)
            time = year + yearString + yearRemainderInMonths + monthString;
            //Display Year + month + week
        else if (yearRemainderInMonths < 1 && monthRemainderInWeeks > 1)
            time = year + yearString + monthRemainderInWeeks + weekString;
        else
            time = year + yearString + yearRemainderInMonths + monthString + monthRemainderInWeeks + weekString;


    }

    return time;
}

