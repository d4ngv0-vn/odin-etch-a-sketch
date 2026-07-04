const containerDom = document.getElementById('container');

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);   
}

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

const createGridRandomize = (gridSize) => {
    containerDom.replaceChildren();
    containerDom.style.width = `1200px`;
    containerDom.style.height = `1200px`;
    containerDom.style.backgroundColor = `black`;
    for (let i = 0; i < gridSize; ++i) {
        const divRow = document.createElement('div');
        divRow.setAttribute('id', `row-${i}`);
        divRow.setAttribute('class', `row`);

        for (let j = 0; j < gridSize; ++j) {
            const divItem = document.createElement('div');
            divItem.setAttribute('id', `div-${i}_${j}`);
            divItem.style.backgroundColor = `rgb(${randomInRange(0,255)}, ${randomInRange(0,255)}, ${randomInRange(0,255)})`;
            divItem.style.width =  `${MAX_GRID_SIZE/(gridSize+1)}px`;
            divItem.style.height = `${MAX_GRID_SIZE/(gridSize+1)}px`;
            divItem.style.opacity = "1";
            divItem.addEventListener('mouseover', (event) => {   
                event.target.style.opacity = String(Number(event.target.style.opacity) - 0.1);
                
                // console.log(Number(event.target.style.opacity));
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
        createGridRandomize(size);
    }
})

