const container = document.getElementById('container');


function genDivs(v) {
    if (v <= 100 && v > 0){
        for (let i = 0; i < v; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            for (let x = 1; x <= v; x++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                row.appendChild(cell);
            }
            container.appendChild(row)   
        }
        document.getElementById('container').innerHTML = container.innerHTML;
        container.querySelectorAll('.cell').forEach(item => [
            item.addEventListener('mouseover', event => {
                item.style.backgroundColor = "white";
            })
        ])
    } else if (v == null) {
        
    } else if (v <= 0 || v > 100) {
        alert('Try something between 1 and 100')
    }
}

genDivs(10)
let gridMemory = 10


// Menu buttons

const clear = document.getElementById('clear')
clear.addEventListener('mousedown', event => {
    document.getElementById('container').innerHTML = '';
    genDivs(gridMemory)
})

const size20 = document.getElementById('size20')
size20.addEventListener('mousedown', event => {
    document.getElementById('container').innerHTML = '';
    genDivs(20);
    gridMemory = 20;
})

const size50 = document.getElementById('size50')
size50.addEventListener('mousedown', event => {
    document.getElementById('container').innerHTML = '';
    genDivs(50);
    gridMemory = 50;
})

const size90 = document.getElementById('size90')
size90.addEventListener('mousedown', event => {
    document.getElementById('container').innerHTML = '';
    genDivs(90);
    gridMemory = 90;
})