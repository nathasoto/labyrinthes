

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


    // getcell(index) {

    //     let cells = this.initCells(labyData);
    //     let cell = cells[index];
    //     console.log(cell);
    //     return cell;

    // }

    getcell(cellCouranteX, cellCouranteY) {

        let cells = this.initCells(labyData);
        let cell = cells.find(cell => cell.posX === cellCouranteX && cell.posY === cellCouranteY);
        //console.log(cell);
        return cell;

    }

    getNeighbors(cellCourante) {

        let neighbors = [];

        let y = cellCourante.posY;
        let x = cellCourante.posX;

        if (!cellCourante.walls[0]) {//top

            let neighbor = labyrinthe.getcell(y - 1, x);
            neighbors.push(neighbor);

        }
        if (!cellCourante.walls[1]) {//right

            let neighbor = labyrinthe.getcell(y, x+1);
            neighbors.push(neighbor);

        }
        if (!cellCourante.walls[2]) {//bottom

            let neighbor = labyrinthe.getcell(y + 1, x);
            neighbors.push(neighbor);

        }
        if (!cellCourante.walls[3]) {//left

            let neighbor = labyrinthe.getcell(y, x-1);
            neighbors.push(neighbor);

        }
        
        //console.log(neighbors);
        return neighbors;

    }


}


function DFS_interative(cellStart) {

    let stack = [cellStart];
    let result = [];
    //console.log(cellStart);

    while (stack.length+1) {

        let cellCourante = stack.pop();
        
        console.log(cellCourante.exit);
        
        if(cellCourante.exit){

            return result;
        }

        if (!cellCourante.visited) { 
            cellCourante.visited = true;
            result.push(cellCourante);


            let neighbors = labyrinthe.getNeighbors(cellCourante);
            

            for (let neighbor of neighbors) {
                
                 if(!neighbor.visited){
                    
                    neighbor.parent.push(cellCourante);
                    console.log(neighbor);
                    
                 }
              
             }
        }
    }

    //console.log(result);
    return result;

}



