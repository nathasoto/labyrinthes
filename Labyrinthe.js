

class Labyrinthe {


    constructor(labyData) {
        this.cells = this.initCells(labyData);
    }


    display() {

        let container = document.getElementById('container');

        let nbre_cells_largeur = Math.sqrt(this.cells.length);

        let computed_width = nbre_cells_largeur * this.cells[0].width;
        container.style.width = computed_width + 'px';


        container.classList.add('main-container');

        for (let cell of this.cells) {
            let cellDOM = cell.getDOM();
            container.appendChild(cellDOM);
        }
    }


    initCells(labyData) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell(cellData);
            cells.push(cell);
        }

        return cells;
    }


    getcell(index) {

        let cells = this.initCells(labyData);
        let cell = cells[index];
        console.log(cell);
        return cell;

    }

    getNeighbor(arraySize, index) {

        let cells = this.initCells(labyData);
        
        
        
        


        return neighbor;


    }

    getNeighbors(cellCourante, labyData) {

        let neighbors = [];

        if (!cellCourante.walls[0]) {//top

            neighbors.push(cellCourante.walls[0]);

        }
        if (!cellCourante.walls[1]) {//right

            let y = cellCourante.columnY;
            let x = cellCourante.rowX;

            //let neighbor = labyData.[0];


            neighbors.push(cellCourante);

        }
        if (!cellCourante.walls[2]) {//bottom

            neighbors.push(cellCourante.walls[2]);

        }
        if (!cellCourante.walls[3]) {//left

            neighbors.push(cellCourante.walls[3]);

        }

        console.log(neighbors);
        return neighbors;

    }



}


function DFS_interative(labyData, cellStar) {

    const stack = [cellStar];
    const visited = new Set(); //set stocker 
    const result = [];

    //console.log(stack.length);

    while (stack.length) {

        const cellCourante = stack.pop();


        if (!visited.has(cellCourante)) { //has renvoie un booléén si le trouver
            visited.add(cellCourante); //stoker v as visited
            result.push(cellCourante);



            let neighbors = labyrinthe.getNeighbors(cellCourante, labyData)

            // for (const neighbor of labyData) {
            //   stack.push(neighbor);
            // }
        }
    }

    //console.log(result);
    return result;

}



