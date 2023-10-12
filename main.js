

let size = '3';
let ex = 'ex-0';

let labyData = data[size][ex];

let labyrinthe = new Labyrinthe( labyData );

labyrinthe.display();
labyrinthe.getcell(0);

DFS_interative(labyData,labyrinthe.getcell(0));