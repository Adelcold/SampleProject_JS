// output is a bool 
function isnumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// <script src="op2.json"></script> ---> in html file
function addOptions(data) {
    var dropDownArray = data.operation; // in az koja miad?data/.?are - ok
    var selectElements = document.getElementById('firstDropDown');
    var optionTag, i;

    for (i = 0; i < dropDownArray.length; i++) {
        optionTag = document.createElement('option');
        optionTag.text = dropDownArray[i]["operator"];
        selectElements.add(optionTag);
    }
}
document.onload = addOptions(data);

// function addoptionForTestOp(data) {
//     var dropDownArray = data.emp;
//     var selectElements = document.getElementById('secondDropDown');
//     var j, optionTag;

//     for (j = 0; j < dropDownArray.length; j++) {
//         optionTag = document.createElement('option');
//         optionTag.text = dropDownArray[j]["position"];
//         selectElements.add(optionTag);
//     }

// }
// document.onload = addoptionForTestOp(data)


// ok
function getValue(elem) {
    return document.getElementById(elem).value;
}

// in chiee?
//dige hamash nanevisim document.ge......
// hadafo fahmidam... injaye kodo nemifahmam
// thanks
function Print(elemContent, elem) {
    if (elem === undefined)//alan fahmidi? are
        elem = "answer";

    document.getElementById(elem).innerHTML = "The answer is: " + elemContent;
}

//ok
function doPower(nmb) {
    var res = nmb[0];

    for (var i = 1;i<nmb.length;i++) {
        res = Math.pow(res,nmb [i]);
    }

    return res;
}

function doSum(nmb) { //in ro besurate stack benevis
    var res = 0;
    for (var i = 0; i < nmb.length; i++) {
        res = res + nmb[i];
    }

    return res;
}

function doMinus(nmb) {
    var res = nmb[0];

    for (var i = 1; i < nmb.length; i++) {
        res = res - nmb[i];
    }

    return res;
}

function doMultiple(nmb) {
    var res = 1;
    for (var i = 0; i < nmb.length; i++) {
        res = res * nmb[i];
    }

    return res;
}

//operand haye dige ro ham add kon

//ok
//bayad baghie operation haa ham inja ezae konam dg? are va cool
function doOperation(o) {
    if (o.operand === "1st^2nd") {
        return doPower(o.numbers);
    }    
    else if (o.operand === "sum") {
        return doSum(o.numbers);
    }
    else if (o.operand === "minus") {
        return doMinus(o.numbers);
    }
    else if (o.operand === "multiple") {
        return doMultiple(o.numbers);
    }
    else {
        print("operand is Unknown");
    }

}

function validate(fNo, sNo) {
    if (!fNo || !isnumeric(fNo)) { //isnumeric male jquery bud sorry
        Print("First input is not a number");
        console.error("Error in fNo"); // in chikar mikone? // error ee ye ke too console neshoon mide?too console error neshun mide negah kjon
        return false;
    }

    if (!sNo || !isnumeric(sNo)) {
        Print("2nd. input is not a number");
        console.error("Error in sNo");
        return false;
    }
    return true;

}

function prepare(fNo, sNo, selectedOperator) {
    var obj = {
        numbers: [],
        operand: selectedOperator
    };
    obj.numbers.push(parseInt(fNo));
    obj.numbers.push(parseInt(sNo));

    return obj;
}

function calculateFunction() {

    //ok
    var selectedOperator = getValue('firstDropDown');
    var fNo = getValue('fNo');
    var sNo = getValue('sNo');

    if (validate(fNo, sNo)) {
        var obj = prepare(fNo, sNo, selectedOperator);

        Print(doOperation(obj));
    }

}