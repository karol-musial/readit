let items = document.getElementById('items')

exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []

// Persist storage
exports.save = () => {
  localStorage.setItem('readit-items', JSON.stringify(this.storage))
}

// Set item as selected
exports.select = e => {

  // Remove currently selected item class
  document.getElementsByClassName('read-item selected')[0].classList.remove('selected')

    e.currentTarget.classList.add('selected')
}

exports.addItem = (item, isNew = false) => {
    let itemNode = document.createElement('div')

    itemNode.setAttribute('class', 'read-item')

    itemNode.innerHTML = `<img src="${ item.screenshot }"><h2>${ item.title }</h2>`

    items.appendChild(itemNode)

    itemNode.addEventListener('click', this.select)

    if (document.getElementsByClassName('read-item').length === 1) {
        itemNode.classList.add('selected')
    }

    if (isNew) {
        this.storage.push(item)
        this.save()
    }
}

this.storage.forEach(item => {
    this.addItem(item)
})
