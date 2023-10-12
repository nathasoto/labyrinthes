class Cell {

    constructor( cellData ){

        this.entrance = cellData.entrance;
        this.rowX = cellData.posX;
        this.columnY = cellData.posY;   
        this.walls = cellData.walls;
        this.width = 100; // largeur en px
        this.exit = cellData.exit;
        this.visited = false; 
        
    }

    getDOM(){

        let cellDOM = document.createElement('div');
        cellDOM.id = ['cell', this.rowX, this.columnY].join('-')
        cellDOM.style.width = this.width + 'px';
        cellDOM.style.height = this.width + 'px';
        cellDOM.style.backgroundColor = 'black';
        cellDOM.style.border = 'solid 1px red';
        cellDOM.style.borderWidth = this.computeBorders();

        if(this.entrance){

            cellDOM.style.backgroundColor = 'orange';

        }
        if(this.exit){

            cellDOM.style.backgroundColor = 'greenyellow';

        }

        return cellDOM;
    }


    computeBorders(){
        return this.walls.map( wall => wall ? '1px' : '0px').join(' ')
    }



}

