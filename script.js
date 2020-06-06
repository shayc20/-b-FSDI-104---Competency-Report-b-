class Character{
    constructor(id, name, energy){
        this.id=id
        this.name=name;
        this.energy=energy;
    }


    display= function(){
    console.log(`${this.name} ${this.energy}`);

        document.getElementById('info-'+this.id).innerHTML= 
        `<b>Energy: </b> ${this.energy}`
        ;

    }
    //attack function
    
    attack= function(opponent){
        console.log("Attacking...");
        let newEnergy = opponent.energy - 10;
        opponent.energy=newEnergy;
        document.getElementById("console").innerHTML=
        ` ${this.name} is attacking ${opponent.name} `;
        console.log(newEnergy);
        var AttackButtons= document.getElementsByTagName("button");

        if(opponent.energy<0){
            document.getElementById("console").innerHTML=
            `<h2> Game Over! </h2>`
            AttackButtons[0].style.display="none";AttackButtons[1].style.display="none";

        }else{
            opponent.display();
        }
        
    }

}

//create two objects

const link = new Character("c1","Link",100);
const browser= new Character("c2","Browser",100);

link.display();
browser.display();


//create class items

//ramdom selection
