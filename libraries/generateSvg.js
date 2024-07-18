





function generateSvg(data){ //insert needed code

    if(data.shape === "Triangle"){

        return `
        
        
        <svg height="300" width="500" xmlns="http://www.w3.org/2000/svg">
        
            <polygon points="250,60 100,400 400,400" style="fill:${data.shapeColor}"/>

            <text x="250" y="250" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>

        </svg>
    
    `
    } else if(data.shape === "Circle"){

        return`

        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="140" r="100" width="100%" fill="${data.shapeColor}"/>

            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>

        </svg>

        `

    } else{ //square

        return `

        <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            <rect width="300" height="300" x="0" y="0" rx="0" ry="0" fill="${data.shapeColor}"/>

            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>

        </svg>

        `

    }

}

//add switch case scenarios probably








module.exports = generateSvg;