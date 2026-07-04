const containerDom = document.getElementById('container');

const MAX_GRID_SIZE = 12000;

const createGrid = (gridSize) => {
    containerDom.replaceChildren();
    containerDom.style.width = `1200px`;
    containerDom.style.height = `1200px`;

    for (let i = 0; i < gridSize; ++i) {
        const divRow = document.createElement('div');
        divRow.setAttribute('id', `row-${i}`);
        divRow.setAttribute('class', `row`);

        for (let j = 0; j < gridSize; ++j) {
            const divItem = document.createElement('div');
            divItem.setAttribute('id', `div-${i}_${j}`);
            divItem.setAttribute('class', 'item');
            divItem.style.width =  `${MAX_GRID_SIZE/(gridSize+1)}px`;
            divItem.style.height = `${MAX_GRID_SIZE/(gridSize+1)}px`;
            divItem.addEventListener('mouseover', (event) => {   
                event.target.classList.add('hover');
            })
            divRow.append(divItem);
        }
        containerDom.append(divRow);
    }
}

const setSizeBtnDom = document.getElementById('set-size-btn');

setSizeBtnDom.addEventListener('click', () => {
    const size = prompt('Input size [1-100]', '69');
    if (size <= 100 && size >= 1) {
        createGrid(size);
    }
})

