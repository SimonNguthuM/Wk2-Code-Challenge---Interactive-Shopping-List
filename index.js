document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-btn');
    const clearButton = document.getElementById('clear-btn');
    let shoppingList = []

    //add item to the list and mark as purchased

    function render(item) {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);

        const markButton = document.createElement('button')
        markButton.textContent = 'Mark Purchased'
        li.appendChild(markButton)

        markButton.addEventListener('click', () => li.style.color = 'blue')
        markButton.style.marginLeft= '50px'
    }

    addButton.addEventListener('click', () => {
        const newItem = itemInput.value;
        if (newItem !== '') {
            shoppingList.push(newItem);
            render(newItem);
            itemInput.value = '';
        }
    });

    clearButton.addEventListener('click', () => itemList.innerHTML = '')

})