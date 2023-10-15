

let size = '4';
let ex = 'ex-0';

let labyData = data[size][ex];

let labyrinthe = new Labyrinthe( labyData );

labyrinthe.display();

//let cell = labyrinthe.getcell(1,0);
//labyrinthe.getUnVisitedNeighbors(cell);

labyrinthe.DFS_interative();

