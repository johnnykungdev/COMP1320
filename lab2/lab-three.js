const dayCodes = [
    { day: "Saturday", remainder: 0 },
    { day: "Sunday", remainder: 1 },
    { day: "Monday", remainder: 2 },
    { day: "Tuesday", remainder: 3 },
    { day: "Wednesday", remainder: 4 },
    { day: "Thursay", remainder: 5 },
    { day: "Friday", remainder: 6 }
];

const monthCodes = [
    { month: 1, code: 1 },
    { month: 2, code: 4 },
    { month: 3, code: 4 },
    { month: 4, code: 0 },
    { month: 5, code: 2 },
    { month: 6, code: 5 },
    { month: 7, code: 0 },
    { month: 8, code: 3 },
    { month: 9, code: 6 },
    { month: 10, code: 1 },
    { month: 11, code: 4 },
    { month: 12, code: 6 }
];

const centuryCodes = [
    { century: 16, code: 6 },
    { century: 17, code: 4 },
    { century: 18, code: 2 },
    { century: 20, code: 6 },
    { century: 21, code: 4 }
];

function isLeapYear (year){
    if ( year % 4 !== 0 ){
        return 0; //common year
    } else if ( year % 100 !== 0 ){
        return -1; //leap year
    } else if ( year % 400 !== 0 ){
        return 0; //common year
    } else {
        return -1; //leap year
    }
}

function validateType (year, month, date){
    if ( !Number(year) ){
        return false;
    } else if ( !Number(month) ){
        return false;
    } else if ( !Number(date) ){
        return false
    } else {
        return true;
    }
}

function checkCenturies (year){
    const year_century = Math.floor(year/100);
    const century_code = centuryCodes.find(century => century.century === year_century);
    if ( century_code ){
        return century_code.code;
    } else {
        return 0;
    }
}

function getDayOfTheWeek (year, month, date){
    //validate the data type of year, month and date
    if ( !validateType(year, month, date)){
        console.log("Wrong input format. Please ensure the values are numbers.");
        return;
    }
    let algoResult;
    // const is_leap_year = isLeapYear(year);

    // let additionResult;

    function runAlgo (year, month, date){
        //get last 2 digits
        const last_two_digits = year % 100;
        //step 1: determine how many 12s fit in last_two_digits
        const num_of_12s = Math.floor(last_two_digits / 12);
        //step 2: determine the remainder
        const remainder = last_two_digits % 12;
        //step 3: determine the number of 4s in the remainder;
        const num_of_4s = Math.floor(remainder / 4);
        //step 4: determine the correspond month code;
        const target_month = monthCodes.find(ele => ele.month === month);
        let target_month_code, century_code, leapyear_code, total_in_step4;
        if ( target_month ){
            target_month_code = target_month.code;
        } else {
            console.log("Error occured when searching month code.");
            return;
        }
        century_code = checkCenturies(year);
        if ( month === 1 || month === 2 ){
            leapyear_code = isLeapYear(year);
        } else {
            leapyear_code = 0;
        }
        total_in_step4 = target_month_code + century_code + leapyear_code;
        //final step: add all the numbers together
        algoResult =  num_of_12s + remainder + num_of_4s + date + total_in_step4;
        //get the remainder divided by 7
        const result_remainder = algoResult % 7;
        //find matched day
        const day_in_week = dayCodes.find(day => day.remainder === result_remainder).day;
        return day_in_week;
    }

    return runAlgo(year, month, date);
}

function makeCalender (){
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    months.forEach((month, index) => {
        const month_days = days_in_month[index];
        for (let i = 0; i < month_days; i++){
            const date_msg = `${month}-${i+1}-2020 is ${getDayOfTheWeek(2020, month, i+1)}`;
            console.log(date_msg);
        }
    })
}

module.exports = {
    getDayOfTheWeek: getDayOfTheWeek,
    makeCalender: makeCalender
}

