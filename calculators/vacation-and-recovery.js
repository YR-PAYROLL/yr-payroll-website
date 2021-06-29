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

function finalCalc() {
    var vacation_year = 0;
    var vetek = 0;
    var recovery_year = 0;

    // Start
    var start_dd = document.querySelector('#start-days').value;
    var start_mm = document.querySelector('#start-months').value-1;
    var start_yyyy = document.querySelector('#start-years').value;
    var start_date = new Date(parseInt(start_yyyy), parseInt(start_mm), parseInt(start_dd));
    // Calc Date
    var calc_dd = document.querySelector('#end-days').value;
    var calc_mm = document.querySelector('#end-months').value-1;
    var calc_yyyy = document.querySelector('#end-years').value;
    var calc_date = new Date(parseInt(calc_yyyy), parseInt(calc_mm), parseInt(calc_dd));

    vacation_year = parseInt(calc_yyyy) - parseInt(start_yyyy) + 1;
    var vetek = Math.abs(calc_date - start_date);
    var times = 1000 * 60 * 60 * 24 * (365 / 12) * 12;
    vetek = vetek / times;
    var vetek_final = vetek.toFixed(2);
    recovery_year = Math.ceil(vetek_final)

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
    document.querySelector(".result-container").classList.add("open");
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

// RESULTS VIEW
var close_btn = document.querySelector(".result-container .close-btn");

close_btn.addEventListener("click", ()=>{
    document.querySelector(".result-container").classList.remove("open");
})

document.onkeyup = function(e) {
    if (e.key == 'Escape') {
        document.querySelector(".result-container").classList.remove("open");
    }
}