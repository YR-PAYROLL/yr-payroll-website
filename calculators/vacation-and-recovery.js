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
    1: [12, 14, 5],
    2: [12, 14, 6],
    3: [12, 14, 6],
    4: [12, 14, 7],
    5: [12, 14, 7],
    6: [14, 16, 7],
    7: [15, 18, 7],
    8: [16, 19, 7],
    9: [17, 20, 7],
    10: [18, 21, 7],
    11: [19, 22, 8],
    12: [20, 23, 8],
    13: [20, 24, 8],
    14: [20, 24, 8],
    15: [20, 24, 8],
    16: [20, 24, 9],
    17: [20, 24, 9],
    18: [20, 24, 9],
    19: [20, 24, 9],
    20: [20, 24, 10],
    '>20': [20, 24, 10]
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
    // parseInt(string)
    var err_msg = document.querySelector(".start-work .error_msg");
    var start_dd = document.querySelector('#start-day');
    var start_mm = document.querySelector('#start-month');
    var start_yyyy = document.querySelector('#start-year');

    // if (start_dd.value == '' || start_mm.value == '' || start_yyyy.value == '') {
    //     err_msg.classList.remove('hide');
    //     err_msg.classList.add('show');
    //     return false;
    // }

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
    // parseInt(string)
    var err_msg = document.querySelector(".calc-date .error_msg");
    var start_dd = document.querySelector('#calc-day');
    var start_mm = document.querySelector('#calc-month');
    var start_yyyy = document.querySelector('#calc-year');

    // if (start_dd.value == '' || start_mm.value == '' || start_yyyy.value == '') {
    //     err_msg.classList.remove('hide');
    //     err_msg.classList.add('show');
    //     return false;
    // }

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

    var vacation_year = 0;
    var vetek = 0;
    var recovery_year = 0;

    // Start
    var start_dd = document.querySelector('#start-day').value;
    var start_mm = document.querySelector('#start-month').value - 1;
    var start_yyyy = document.querySelector('#start-year').value;
    var start_date = new Date(parseInt(start_yyyy), parseInt(start_mm), parseInt(start_dd));

    // Calc Date
    var calc_dd = document.querySelector('#calc-day').value;
    var calc_mm = document.querySelector('#calc-month').value - 1;
    var calc_yyyy = document.querySelector('#calc-year').value;
    var calc_date = new Date(parseInt(calc_yyyy), parseInt(calc_mm), parseInt(calc_dd));

    vacation_year = parseInt(calc_yyyy) - parseInt(start_yyyy) + 1;
    var vetek = Math.abs(calc_date - start_date);
    var times = 1000 * 60 * 60 * 24 * (365 / 12) * 12;
    vetek = vetek / times;
    var vetek_final = vetek.toFixed(2);
    recovery_year = Math.ceil(vetek)

    if (vacation_year > 20) {
        vacation_year = '>20';
    }
    if (recovery_year > 20) {
        recovery_year = '>20';
    }
    var five_days_res = res_dict[vacation_year][0];
    var six_days_res = res_dict[vacation_year][1];
    var entitlement_recovery = res_dict[recovery_year][2];

    document.querySelector('#five-days-work-res').innerText = five_days_res;
    document.querySelector('#six-days-work-res').innerText = six_days_res;
    document.querySelector('#entitlement-recovery-res').innerText = entitlement_recovery;
}

setInterval(() => {
    finalCalc();
}, 100);

function checkInput(input) {
    if (input == "") {
        return false;
    }
    return true;
}

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