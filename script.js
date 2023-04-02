const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock',
        icon: '🪨',
        beats: 'scissors',
    },
    {
        name: 'paper',
        icon: '📃',
        beats: 'rock',
    },
    {
        name: 'scissors',
        icon: '✂️',
        beats: 'paper'
    }

]


selectionButtons.forEach(SelectionButton => {
    selectionButton.addEventListner('click', e => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection) 
    })
})

function makeSelection(selection) {
    console.log(selection)
}


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
    
}



