const num1 = +prompt("Birinchi raqamni kirting");
const num2 = +prompt("Ikkinchi raqamni kirting");
const operation = prompt("Qanday amal bajarasiz? (+, -, *, /)");

let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else {
    result = `Noto‘g‘ri amal: ${num1} ${operation} ${num2}`;
}

const outerContainer = document.createElement('div');
outerContainer.style.width = '500px';
outerContainer.style.backgroundColor = 'lightgray';
outerContainer.style.margin = '20px auto';
outerContainer.style.padding = '10px';
outerContainer.style.display = 'flex';
outerContainer.style.flexDirection = 'column';
outerContainer.style.alignItems = 'center';
outerContainer.style.justifyContent = 'center';

const rowContainer = document.createElement('div');
rowContainer.style.display = 'flex';
rowContainer.style.flexDirection = 'row';
rowContainer.style.gap = '30px'; 
rowContainer.style.marginBottom = '20px'; 

const firstContainer = document.createElement('div');
firstContainer.style.width = '100px';
firstContainer.style.height = '50px';
firstContainer.style.backgroundColor = 'yellow';
firstContainer.style.textAlign = 'center';
firstContainer.style.lineHeight = '50px';
firstContainer.style.color = 'black';
firstContainer.innerHTML = `${num1}`;

const secondContainer = document.createElement('div');
secondContainer.style.width = '100px';
secondContainer.style.height = '50px';
secondContainer.style.backgroundColor = 'yellow';
secondContainer.style.textAlign = 'center';
secondContainer.style.lineHeight = '50px';
secondContainer.style.color = 'black';
secondContainer.innerHTML = `${operation}`;

const threeContainer = document.createElement('div');
threeContainer.style.width = '100px';
threeContainer.style.height = '50px';
threeContainer.style.backgroundColor = 'yellow';
threeContainer.style.textAlign = 'center';
threeContainer.style.lineHeight = '50px';
threeContainer.style.color = 'black';
threeContainer.innerHTML = `${num2}`;

const resultButton = document.createElement('button');
resultButton.style.width = '400px';
resultButton.style.height = '150px';
resultButton.style.backgroundColor = 'green';
resultButton.style.color = 'white';
resultButton.style.border = 'none';
resultButton.style.cursor = 'pointer';
resultButton.style.fontSize = '20px';
resultButton.textContent = 'Check';
resultButton.onclick = function () {
    resultButton.textContent = `Natija: ${result}`;
    resultButton.style.cursor = 'default';
    resultButton.disabled = true; 
    resetButton.style.display = 'block'; 
};

const resetButton = document.createElement('button');
resetButton.style.width = '400px';
resetButton.style.height = '50px';
resetButton.style.backgroundColor = 'red';
resetButton.style.color = 'white';
resetButton.style.border = 'none';
resetButton.style.cursor = 'pointer';
resetButton.style.fontSize = '18px';
resetButton.textContent = '';
resetButton.style.display = 'none';
resetButton.onclick = function () {
    location.reload(); 
};

rowContainer.append(firstContainer); 
rowContainer.append(secondContainer); 
rowContainer.append(threeContainer);

outerContainer.append(rowContainer); 
outerContainer.append(resultButton); 
outerContainer.append(resetButton);

document.body.appendChild(outerContainer);
