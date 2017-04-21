
data = '[{"operation":"Please select..."}, {"operation":"Exp2"}, {"operation":"Sum"}, {"operation":"Minus"}, {"operation":"Multiple"}]';

function addOptions() {
    var jsonArray = JSON.parse(data);
    var select = document.getElementById('dd');
    var option;

    for (var i = 0; i < jsonArray.length; i++) {
        option = document.createElement('option');
        option.text = jsonArray[i]["operation"];
        select.add(option);
    }
}


        //options += '<option value ="' + data[i] + '">' + '</option>';