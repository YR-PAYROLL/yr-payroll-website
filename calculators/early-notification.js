var month_dict = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}
var res_dict = {
    1: [1, 1],
    2: [2, 2],
    3: [3, 3],
    4: [4, 4],
    5: [5, 5],
    6: [6, 6],
    7: [8.5, 7],
    8: [11, 8],
    9: [13.5, 9],
    10: [16, 10],
    11: [18.5, 11],
    12: [21, 12],
    13: [31, 14],
    14: [31, 15],
    15: [31, 15],
    16: [31, 16],
    17: [31, 16],
    18: [31, 17],
    19: [31, 17],
    20: [31, 18],
    21: [31, 18],
    22: [31, 19],
    23: [31, 19],
    24: [31, 20],
    25: [31, 31],
    '>25': [31, 31]
}

function makeToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    var calc_day = document.querySelector('#calc-day')
    var calc_month = document.querySelector('#calc-month')
    var calc_year = document.querySelector('#calc-year')
    calc_day.value = dd;
    calc_month.value = mm;
    calc_year.value = yyyy;
}

function checkStartDate() {
    var err_msg = document.querySelector(".start-work .error_msg");
    var start_dd = document.querySelector('#start-day');
    var start_mm = document.querySelector('#start-month');
    var start_yyyy = document.querySelector('#start-year');

    start_dd = parseInt(start_dd.value)
    start_mm = parseInt(start_mm.value)
    start_yyyy = parseInt(start_yyyy.value)

    var today_calc_helper = new Date();
    var today_yyyy = today_calc_helper.getFullYear();

    var show_checker = false;
    var max_dd = month_dict[start_mm];

    if (start_yyyy > today_yyyy || max_dd < start_dd || start_mm > 12 || start_mm < 1 || start_dd < 1) {
        show_checker = true;
    }

    if (show_checker) {
        err_msg.classList.remove('hide');
        err_msg.classList.add('show');
    } else {
        err_msg.classList.remove('show');
        err_msg.classList.add('hide');
    }

}

function checkCalcDate() {
    var err_msg = document.querySelector(".calc-date .error_msg");
    var start_dd = document.querySelector('#calc-day');
    var start_mm = document.querySelector('#calc-month');
    var start_yyyy = document.querySelector('#calc-year');

    start_dd = parseInt(start_dd.value)
    start_mm = parseInt(start_mm.value)
    start_yyyy = parseInt(start_yyyy.value)

    var today_calc_helper = new Date();
    var today_yyyy = today_calc_helper.getFullYear();

    var show_checker = false;
    var max_dd = month_dict[start_mm];

    if (start_yyyy > today_yyyy || max_dd < start_dd || start_mm > 12 || start_mm < 1 || start_dd < 1) {
        show_checker = true;
    }

    if (show_checker) {
        err_msg.classList.remove('hide');
        err_msg.classList.add('show');
    } else {
        err_msg.classList.remove('show');
        err_msg.classList.add('hide');
    }

}

function finalCalc() {
    checkStartDate();
    checkCalcDate();

    var yyyy_delta = 0;
    var mm_delta = 0;
    var senior_in_months = 0;

    // Start
    var start_dd = document.querySelector('#start-day').value;
    var start_mm = document.querySelector('#start-month').value - 1;
    var start_yyyy = document.querySelector('#start-year').value;
    var start_date = new Date(parseInt(start_yyyy), parseInt(start_mm), parseInt(start_dd));

    // Calc Date
    var calc_dd = document.querySelector('#calc-day').value;
    var calc_mm = document.querySelector('#calc-month').value - 1;
    var calc_yyyy = document.querySelector('#calc-year').value;

    // Worker Type -> 1 = Monthly, 2 = Dayly/Hourly
    var worker_type = document.querySelector('.worker-type').value;

    yyyy_delta = parseInt(calc_yyyy) - parseInt(start_yyyy);
    mm_delta = parseInt(calc_mm) - parseInt(start_mm);
    senior_in_months = (yyyy_delta * 12) + mm_delta;
    if (parseInt(calc_dd) > parseInt(start_dd)) {
        senior_in_months -= 1;
    }

    document.querySelector('#seniority-in-months-res').innerText = senior_in_months;
    if (senior_in_months > 25){
        senior_in_months = '>25';
    }
    document.querySelector('#notice-days-res').innerText = res_dict[senior_in_months][parseInt(worker_type)-1];

    var end_date_of_work = new Date(parseInt(calc_yyyy), parseInt(calc_mm), parseInt(calc_dd));
    end_date_of_work.setDate(end_date_of_work.getDate() + res_dict[senior_in_months][parseInt(worker_type)-1]);
    var end_dd = end_date_of_work.getDate();
    var end_mm = parseInt(end_date_of_work.getMonth()) + 1;
    var end_yyyy = end_date_of_work.getFullYear();

    if (parseInt(end_dd) < 10){
        end_dd = `0${end_dd}`
    }
    if (parseInt(end_mm) < 10){
        end_mm = `0${end_mm}`
    }
    document.querySelector('#end-date-of-work-res').innerText = `${end_dd}/${end_mm}/${end_yyyy}`;
}

setInterval(() => {
    finalCalc();
}, 100);

function makeNumberForPrint(n, b, st) {
    if (n == "" || n == NaN) {
        return st;
    }
    var x = "0";
    // n = String(n);
    if (b){
        return `${x.repeat(4 - n.length)}${n}`
    }else{
        return `${x.repeat(2 - n.length)}${n}`
    }
}

function writeStartDate() {
    var dd_start = makeNumberForPrint(document.querySelector("#start-day").value, false, "dd");
    var mm_start = makeNumberForPrint(document.querySelector("#start-month").value, false, "mm");
    var yyyy_start = makeNumberForPrint(document.querySelector("#start-year").value, true, "yyyy");

    var start_date_p = document.querySelector("#start-date-p");
    start_date_p.innerText = `${dd_start} / ${mm_start} / ${yyyy_start}`
}
function writeCalcDate() {
    var dd_calc = makeNumberForPrint(document.querySelector("#calc-day").value, false, "dd");
    var mm_calc = makeNumberForPrint(document.querySelector("#calc-month").value, false, "mm");
    var yyyy_calc = makeNumberForPrint(document.querySelector("#calc-year").value, true, "yyyy");
    
    var calc_date_p = document.querySelector("#calc-date-p");
    calc_date_p.innerText = `${dd_calc} / ${mm_calc} / ${yyyy_calc}`
}

setInterval(() => {
    writeStartDate();
    writeCalcDate();
}, 10);