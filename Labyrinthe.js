

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

        return this.cells.find(cell => cell.posX === cellCouranteX && cell.posY === cellCouranteY);
        
    }

    getUnVisitedNeighbors(cellCourante) {

        let neighbors = [];

        if (!cellCourante.walls[0]) {//top

            let neighbor = this.getcell(cellCourante.posX - 1, cellCourante.posY);
            if(!neighbor.visited){
                neighbors.push(neighbor);
            }
           
        }
        if (!cellCourante.walls[1]) {//right

            let neighbor = this.getcell(cellCourante.posX, cellCourante.posY );
            if(!neighbor.visited){
                neighbors.push(neighbor);
            }

        }
        if (!cellCourante.walls[2]) {//bottom

            let neighbor = this.getcell(cellCourante.posX + 1, cellCourante.posY);
            if(!neighbor.visited){
                neighbors.push(neighbor);
            }
        }
        if (!cellCourante.walls[3]) {//left

            let neighbor = this.getcell(cellCourante.posX, cellCourante.posY - 1);
            if(!neighbor.visited){
                neighbors.push(neighbor);
            }
        }

        //console.log(neighbors);
        //let unvisited = neighbors.filter((neighbor) => neighbor.visited === false);
        //console.log(unvisited);
        return neighbors ;

    }

    getEntrance(){

        return this.cells.find(cell => cell.entrance == true)
    }
    path(cell){

        let path = [cell];
        while(cell.parent){
            cell = cell.parent;
            //cell.color();
            path.push(cell);

        }
        console.log(path);
        return path;

    }

    DFS_interative() {
        
        let entrance = this.getEntrance();
        let stack = [entrance];
        let result = [];

        while (stack.length) {

            let CurrentCell = stack.pop();
            CurrentCell.setVisited();
            //result.push(CurrentCell);
             console.log(CurrentCell.isExit);
            if (CurrentCell.isExit==true) {
                console.log("exit");
                //return this.path(CurrentCell);
                console.log(result);
                return result;
            }
            
        
            let neighbors = this.getUnVisitedNeighbors(CurrentCell);
        
            for (let neighbor of neighbors) {
                 
                     console.log(neighbor);
                     neighbor.parent.push(CurrentCell);
                     neighbor.parent = CurrentCell;
                     result.push(neighbor);
                     stack.push(neighbor); 

            }
           
           
           

        }

        //     
        //     if (!cellCourante.visited) { 

        //         cellCourante.visited = true;
        //         result.push(cellCourante);
        //         //console.log(cellCourante.visited);

        //         let neighbors = this.getNeighbors(cellCourante);

        //         for (let neighbor of neighbors) {

        //             //console.log(neighbor);

        //             if(!neighbor.visited){

        //                 neighbor.parent.push(cellCourante);
        //                 //console.log(neighbor);
        //                 stack.push(neighbor);
        //                 //console.log(stack);
        //             }
        //         }


        //     }
        // }

    }


}






