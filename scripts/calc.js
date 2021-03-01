window.addEventListener('load', () => {
	document.querySelector('#basis').value = 10000;
	document.querySelector('#tikralegemel').value = document.querySelector('#basis').value;
	document.querySelector('#hishtalmutSelect').value = 2;
	document.querySelector('#tikralhishtalmut').value = tikraHishtalmutHok;
	document.querySelector('#nzikoi').value = 2.25;
	document.querySelector('#ahuzoved').value = 6.00;
	document.querySelector('#ahuzhishtalmutoved').value = 2.5;
	document.querySelector('#ahuzhishtalmutmaavid').value = 7.5;
	document.querySelector('#ahuzgemelmaavid').value = 6.5;
	document.querySelector('#ahuzpizuim').value = 8.33;
})

var a = 6330;
var b = 9080;
var c = 14580;
var d = 20260;
var e = 42160;
var f = 54300;
var b_a = 6331;
var b_b = 44020;
var ma = 0.1;
var mb = 0.14;
var mc = 0.2;
var md = 0.31;
var me = 0.35;
var mf = 0.47;
var mg = 0.5;
var mas = 0;
var b_leumi = 0;
var b_brioot = 0;
var bl_a = 0.004;
var bl_b = 0.07;
var bb_a = 0.031;
var bb_b = 0.05;
var mbl_a = 0.0355;
var mbl_b = 0.076;
var b_leumi_maavid;
var nekuda = 219;
var brutolemas = 0;
var gemel = 0;
var gemelmaavid = 0;
var pizuim = 0;
var hishtalmut = 0;
var hishtalmutmaavid = 0;
var ahuzhishtalmut = 0;
var ahuzhishtalmutmaavid = 0;
var ahuzgemelmaavid = 0;
var ahuzpizuim = 0;
var nzikoi = 0;
var basis = 0;
var lolegemel = 0;
var ahuzoved = 0;
var zkifatRecev = 0;
var zkifot = 0;
var seif45 = 0;
var tikralegemel = 0;
var tikralhishtalmut = 0;
var tikraseif45 = 215.6;
var tikragemel = 1978.35;
var tikrahishtalmut = 1178.4;
var tikrapizoim = 2908;
var tikragemelsachar = 0;
var tikraGemelHok = 10551;
var tikraHishtalmutHok = 15712;

function calc() {
	basis = parseFloat(document.querySelector('#basis').value, 0)
	if (isNaN(basis)) {
		basis = 0
	}
	lolegemel = parseFloat(document.querySelector('#lolegemel').value, 0)
	if (isNaN(lolegemel)) {
		lolegemel = 0
	}
	zkifatRecev = parseFloat(document.querySelector('#zkifatRecev').value, 0)
	if (isNaN(zkifatRecev)) {
		zkifatRecev = 0
	}
	zkifot = parseFloat(document.querySelector('#zkifot').value, 0)
	if (isNaN(zkifot)) {
		zkifot = 0
	}
	ahuzoved = parseFloat(document.querySelector('#ahuzoved').value, 0) / 100
	if (isNaN(ahuzoved)) {
		ahuzoved = 0
	}
	ahuzgemelmaavid = parseFloat(document.querySelector('#ahuzgemelmaavid').value, 0) / 100
	if (isNaN(nzikoi)) {
		nzikoi = 0
	}
	ahuzpizuim = parseFloat(document.querySelector('#ahuzpizuim').value, 0) / 100
	if (isNaN(ahuzpizuim)) {
		ahuzpizuim = 0
	}
	tikralegemel = parseFloat(document.querySelector('#tikralegemel').value, 0)
	if (isNaN(tikralegemel)) {
		tikralegemel = 0
	}
	tikralhishtalmut = parseFloat(document.querySelector('#tikralhishtalmut').value, 0)
	if (isNaN(tikralhishtalmut)) {
		tikralhishtalmut = 0
	}
	if (tikralegemel < basis) {
		gemel = tikralegemel * ahuzoved
		gemelmaavid = tikralegemel * ahuzgemelmaavid
		pizuim = tikralegemel * ahuzpizuim
	} else {
		gemel = basis * ahuzoved
		gemelmaavid = basis * ahuzgemelmaavid
		pizuim = basis * ahuzpizuim
	}
	seif45 = gemel * 0.35
	if (seif45 > tikraseif45) {
		seif45 = tikraseif45
	}
	ahuzhishtalmut = parseFloat(document.querySelector('#ahuzhishtalmutoved').value, 0) / 100
	if (isNaN(ahuzhishtalmut)) {
		ahuzhishtalmut = 0
	}
	ahuzhishtalmutmaavid = parseFloat(document.querySelector('#ahuzhishtalmutmaavid').value, 0) / 100
	if (isNaN(ahuzhishtalmutmaavid)) {
		ahuzhishtalmutmaavid = 0
	}
	if (tikralhishtalmut < basis) {
		hishtalmut = tikralhishtalmut * ahuzhishtalmut
		hishtalmutmaavid = tikralhishtalmut * ahuzhishtalmutmaavid
	} else {
		hishtalmut = basis * ahuzhishtalmut
		hishtalmutmaavid = basis * ahuzhishtalmutmaavid
	}
	nzikoi = parseFloat(document.querySelector('#nzikoi').value, 0)
	if (isNaN(nzikoi)) {
		nzikoi = 0
	}
	brutolemas = basis + lolegemel + zkifot + zkifatRecev
	tikragemelsachar = Math.min((brutolemas - zkifatRecev) * 0.075, tikragemel)
	if (gemelmaavid > tikragemelsachar) {
		zkifot = zkifot + gemelmaavid - tikragemelsachar
		document.querySelector('#zkifatGemel').text = (gemelmaavid - tikragemelsachar).toFixed(2)
	}
	if (hishtalmutmaavid > tikrahishtalmut) {
		zkifot = zkifot + hishtalmutmaavid - tikrahishtalmut
	}
	var tikraPizuimSachar = Math.min(basis * 0.0833, tikrapizoim)
	if (pizuim > tikraPizuimSachar) {
		zkifot = zkifot + pizuim - tikraPizuimSachar
		document.querySelector('#zkifatPizuim').text = tikraPizuimSachar.toFixed(2)
	}
	brutolemas = basis + lolegemel + zkifot + zkifatRecev
	if (brutolemas < a) {
		mas = (brutolemas * ma) - (nzikoi * nekuda) - seif45
	} else if (brutolemas < b) {
		mas = ((brutolemas - a) * mb) + (a * ma) - (nzikoi * nekuda) - seif45
	} else if (brutolemas < c) {
		mas = ((brutolemas - b) * mc) + (a * ma) + (b - a) * mb - (nzikoi * nekuda) - seif45
		if (mas < 0) {
			mas = 0
		}
	} else if (brutolemas < d) {
		mas = ((brutolemas - c) * md) + (a * ma) + (b - a) * mb + (c - b) * mc - (nzikoi * nekuda) - seif45
		if (mas < 0) {
			mas = 0
		}
	} else if (brutolemas < e) {
		mas = ((brutolemas - d) * me) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md - (nzikoi * nekuda) - seif45
	} else if (brutolemas < f) {
		mas = ((brutolemas - e) * mf) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md + (e - d) * me - (nzikoi * nekuda) - seif45
	} else {
		mas = ((brutolemas - f) * mg) + (a * ma) + (b - a) * mb + (c - b) * mc + (d - c) * md + (e - d) * me + (f - e) * mf - (nzikoi * nekuda) - seif45
	}
	if (brutolemas < b_a) {
		b_leumi = brutolemas * bl_a
		b_brioot = brutolemas * bb_a
		b_leumi_maavid = brutolemas * mbl_a
	} else if (brutolemas < b_b) {
		b_leumi = ((brutolemas - b_a) * bl_b) + (b_a * bl_a)
		b_brioot = ((brutolemas - b_a) * bb_b) + (b_a * bb_a)
		b_leumi_maavid = ((brutolemas - b_a) * mbl_b) + (b_a * mbl_a)
	} else {
		b_leumi = ((b_b - b_a) * bl_b) + (b_a * bl_a)
		b_brioot = ((b_b - b_a) * bb_b) + (b_a * bb_a)
		b_leumi_maavid = ((b_b - b_a) * mbl_b) + (b_a * mbl_a)
	}
	if (mas < 0) {
		mas = 0
	}
	mas = Math.round(mas)
	var neto = basis + lolegemel - mas - gemel - hishtalmut - b_leumi - b_brioot
	if (isNaN(neto)) {
		neto = 0
	}
	if (b_leumi < 0) {
		b_leumi = 0
	}
	if (b_brioot < 0) {
		b_brioot = 0
	}

	document.querySelector('#neto').innerText = (neto.toFixed(2))
	document.querySelector('#mashacnasa').innerText = (mas.toFixed(2))
	document.querySelector('#bbrioot').innerText = (b_brioot.toFixed(2))
	document.querySelector('#bleumioved').innerText = (b_leumi.toFixed(2))
	document.querySelector('#gemeloved').innerText = (gemel.toFixed(2))
	document.querySelector('#hishtalmutoved').innerText = (hishtalmut.toFixed(2))
	document.querySelector('#hishtalmutoved').innerText = (hishtalmut.toFixed(2))
	document.querySelector('#tashlumim').innerText = ((basis + lolegemel).toFixed(2))
	document.querySelector('#bleumimaavid').innerText = (b_leumi_maavid.toFixed(2))
	document.querySelector('#gemelmaavid').innerText = (gemelmaavid.toFixed(2))
	document.querySelector('#pizuim').innerText = (pizuim.toFixed(2))
	document.querySelector('#hishtalmutmaavid').innerText = (hishtalmutmaavid.toFixed(2))
	document.querySelector('#alut').innerText = ((basis + lolegemel + b_leumi_maavid + gemelmaavid + pizuim + hishtalmutmaavid).toFixed(2))
}
function GemelSelect() {
	var value = document.querySelector('#gemelSelect').value;
	if (value == 1) {
		document.querySelector('#tikralegemel').value = document.querySelector('#basis').value;
		document.querySelector('#tikralegemel').readOnly = true;
	}
	if (value == 2) {
		document.querySelector('#tikralegemel').value = tikraGemelHok;
		document.querySelector('#tikralegemel').readOnly = true;
	}
	if (value == 3) {
		document.querySelector('#tikralegemel').value = 0;
		document.querySelector('#tikralegemel').readOnly = false;
	}
}
function HishtalmutSelect() {
	var value = document.querySelector('#hishtalmutSelect').value;
	if (value == 1) {
		document.querySelector('#tikralhishtalmut').value = document.querySelector('#basis').value;
		document.querySelector('#tikralhishtalmut').readOnly = true;
	}
	if (value == 2) {
		document.querySelector('#tikralhishtalmut').value = tikraHishtalmutHok;
		document.querySelector('#tikralhishtalmut').readOnly = true;
	}
	if (value == 3) {
		document.querySelector('#tikralhishtalmut').value = 0;
		document.querySelector('#tikralhishtalmut').readOnly = false;
	}
}
function NewCalc() {
	location.reload();
}

setInterval(() => {
	calc();
}, 10);