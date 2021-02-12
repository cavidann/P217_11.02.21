function getInputText(e) {
    e.preventDefault();


    let inputValue = document.getElementById('cityName').value;
    let cityList = document.getElementById('city-list');
    if (!inputValue.trim()) {
        return
    }

    let itemDiv = document.createElement('div');
    itemDiv.className = "item flex justify-between";

    let contentSpan = document.createElement('span')
    let contentSpanData = document.createTextNode(inputValue)

    contentSpan.append(contentSpanData)
    itemDiv.append(contentSpan)

    let closeSpan = document.createElement('span')
    closeSpan.className = 'close'
    let closeSpanData = document.createTextNode('x')

    closeSpan.append(closeSpanData)
    itemDiv.append(closeSpan)

    cityList.prepend(itemDiv)

    document.getElementById('cityName').value = '';


    let closeList = document.querySelectorAll('.close');

    // console.log(closeList);
    closeList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.currentTarget.parentNode.remove()
        })
    })

}