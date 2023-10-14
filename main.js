

let size = '3';
let ex = 'ex-0';

let labyData = data[size][ex];

let labyrinthe = new Labyrinthe( labyData );

labyrinthe.display();

let cell = labyrinthe.getcell(0,0);
labyrinthe.getNeighbors(cell);

DFS_interative(cell);

