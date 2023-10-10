
aficheLab("6", "ex-1");

function aficheLab(num, ex) {


    let lab = labyrinthe[num][ex];

    lab.forEach((item, index) => {


        const newcell = document.createElement('div');
        newcell.id = `div_${index + 1}`;
        newcell.className = 'cell';

        const divContainer = document.getElementById("container");
        divContainer.appendChild(newcell);

        if (item.entrance) {
            newcell.style.backgroundColor = 'orange';
        }
        if (item.exit) {
            newcell.style.backgroundColor = 'greenyellow';
        }
        if (item.walls[0]) { // top
            
            newcell.style.borderTop ='2px solid red';
            
        };
        if (item.walls[1]) { // right

            newcell.style.borderRight ='2px solid red';

        };
        if (item.walls[2]) { // bottom

            newcell.style.borderBottom ='2px solid red';

        };
        if (item.walls[3]) { //left

            newcell.style.borderLeft ='2px solid red';

        };


    });

};



