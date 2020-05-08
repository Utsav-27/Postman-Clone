let jsonRadio = document.getElementById('json');
let paramsRadio = document.getElementById('params');
let parametersBox = document.getElementById('parametersBox');
let jsonBox = document.getElementById('inputJson')
let btn = document.getElementById('submit');
parametersBox.style.display = 'none';


jsonRadio.addEventListener('click', () => {
    jsonBox.style.display = 'block';
    parametersBox.style.display = 'none';
})
paramsRadio.addEventListener('click', () => {
    parametersBox.style.display = 'block';
    jsonBox.style.display = 'none';
})


btn.addEventListener('click', () => {
    document.getElementById('response').innerHTML = 'Fetching response...';
    let url = document.getElementById('url').value;
    let methodType = document.getElementById('requestType').value;
    let content = document.querySelector("input[name='inputType']:checked").value;

    //gather the data based on the contentType
    if (content == 'PARAMS') {
        data = {};
        let key = document.getElementById('keyText').value;
        let value = document.getElementById('valueText').value;
        data[key] = value;
        data = JSON.stringify(data);
    } else {
        data = document.getElementById('jsonText').value;
        console.log(JSON.stringify(data))
    }

    //fetch the url
    if (methodType == 'GET') {
        fetch(url, {
                method: 'GET'
            })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('response').innerHTML = text;
            })
    } else {
        fetch(url, {
                method: 'POST',
                body: data,
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('response').innerHTML = text;
            })
    }
})



























































