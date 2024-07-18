//for shapes class(es)

function Shape(colorSelected){

    this.color = "";
    
    
    this.setColor = function(){

        this.color = colorSelected;

    }

}

//eg. triangle.setColor(Blue);

function Circle(){

    Shape.call(colorSelected);

    this.displayShape = function(){

        return `<circle cx="25" cy="75" r="20" width="100%" fill="${this.color}"/>`

    }

}

function Square(){

    Shape.call(colorSelected);

    this.displayShape = function(){

        return `<rect width="100" height="100" x="10" y="10" rx="0" ry="0" fill="${this.color}" />`

    }

}

function Triangle(){

    Shape.call(colorSelected);

    this.displayShape = function(){

        return `<polygon points="100,100 150,190 50,190" style="fill:"${this.color};"/>`

    }

}

module.exports = {Circle,Square,Triangle};
