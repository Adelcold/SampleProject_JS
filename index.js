
// data = '[{"operation":"Please select..."}, {"operation":"Exp2"}, {"operation":"Sum"}, {"operation":"Minus"}, {"operation":"Multiple"}]';


function loadJSON() {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'op2.json', true);
    xobj.send();

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
}

function init() {
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        document.getElementById("test").innerHTML = actual_JSON;
    });

    
}
init();
console.log(data);



//  function addOptions() {
//         var jsonArray = JSON.parse(xobj.responseText);
//         var select = document.getElementById('dd');
//         var option;

//         for (var i = 0; i < jsonArray.length; i++) {
//             option = document.createElement('option');
//             option.text = jsonArray[i]["operation"];
//             select.add(option);
//         }
//     }


        //options += '<option value ="' + data[i] + '">' + '</option>';