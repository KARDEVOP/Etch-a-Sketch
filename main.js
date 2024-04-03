//gridContainer
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)'; // Creates 16 columns
gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)'; // Creates 16 rows
gridContainer.style.width = '960px';
gridContainer.style.height = '600px';
gridContainer.style.border = '2px solid black';
gridContainer.style.margin = 'auto';
gridContainer.style.position = 'absolute';
gridContainer.style.top = '70%';
gridContainer.style.left = '50%';
gridContainer.style.transform = 'translate(-50%, -50%)';

//popup Page function
function popup()
{
    mainPage.style.filter = 'blur(2px)';
    popupContainer.style.display = 'block';
    text.textContent = 'Add grid value (Max: 100):';
    textBox.style.border = '1px solid black';
}
//popupContainer
const popupContainer = document.createElement('div');
const mainPage = document.querySelector('.grid-container');
popupContainer.classList.add('popup-container');
popupContainer.style.position = 'absolute';
popupContainer.style.top = '50%';
popupContainer.style.left = '50%';
popupContainer.style.transform = 'translate(-50%, -50%)';
popupContainer.style.width = '300px';
popupContainer.style.height = '200px';
popupContainer.style.backgroundColor = 'white';
popupContainer.style.border = '2px solid black';
popupContainer.style.padding = '20px';
popupContainer.style.display = 'none';
//exitButton
const exitButton = document.createElement('button');
exitButton.textContent = 'X';
exitButton.style.position = 'absolute';
exitButton.style.top = '10px';
exitButton.style.left = '10px';
exitButton.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    mainPage.style.filter = 'none'; 
});
popupContainer.appendChild(exitButton);
//text
const text = document.createElement('p');
text.textContent = 'Add grid value (Max: 100):';
text.style.textAlign = 'center';
popupContainer.appendChild(text);
//textBox
const textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.style.display = 'block';
textBox.style.margin = '0 auto';
// Event listener for enter key in textBox
textBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitButton.click();
    }
});
popupContainer.appendChild(textBox);
//submitButton
const submitButton = document.createElement('button');

submitButton.textContent = 'Submit';
submitButton.style.display = 'block';
submitButton.style.margin = '0 auto';
text.style.position = 'center';
submitButton.addEventListener('click', () => {
    const enteredText = textBox.value;
    //if enteredText is between 1 and 100
    if (enteredText > 1 && enteredText <= 100) 
    {       
        gridContainer.innerHTML = ''; // Reset gridContainer by removing all child elements
        popupContainer.style.display = 'none';
        mainPage.style.filter = 'none'; 
        num = enteredText;
        const gridSize = num;
        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item');
                gridItem.style.boxSizing = 'border-box'; // Include padding and border in total width and height
                gridContainer.appendChild(gridItem);              
            }
        }        
    } 
    //if enteredText is not between 1 and 100
    else {
        text.textContent = 'Wrong. Add value between 2 and 100';
        textBox.style.border = '1px solid red';
    }
});
popupContainer.appendChild(submitButton);

document.body.appendChild(popupContainer);

//printing grids
let num = 16;
const gridSize = num; // 10x10 grid, so 100 iterations
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.boxSizing = 'border-box'; // Include padding and border in total width and height
        gridContainer.appendChild(gridItem);
    }
}

//hover change color function
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-item') && event.buttons === 1) {
            event.target.style.backgroundColor = '#d72e2e';
        }
    });
});
//reset button
const button = document.createElement('button');
button.textContent = 'Reset';
button.style.position = 'absolute';
button.style.top = '20%';
button.style.left = '48%'; // Position a little right
document.body.appendChild(button);
button.addEventListener('click', popup);

