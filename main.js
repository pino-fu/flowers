
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // --- DETERMINE WHICH FLOWERS ARE LESS THAN $2 ---
    // somehow store the returned items in a new variable?
   for (const flower of flowers) { // go through flowers
    if (flower.price < 2.00) { // check value condition
        filteredFlowers.push(flower) // add object(s) to empty array, flower represents the result within loop
    }
   }
   return filteredFlowers  // Do not modify
}
// console.log(inexpensiveFlowers(flowers)); // just checkin'



/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify

    // ADD ALL FLOWERS WITH USDA ZONE VALUES OF 3 AND 8 TO filteredFlowers ARRAY
    for (const flower of flowers) { // run through flowers array
      //for (const zone of flower.usdaZones) {
        if  (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) { // 
            filteredFlowers.push(flower)
      }
    }
    return filteredFlowers  // Do not modify
}
//console.log(zoneFlowers(flowers)); // just checkin'


/* id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
        */





/*
    This function should return flowers that come in the color Orange
    */
   const orangeFlowers = () => {
       const filteredFlowers = []  // Do not modify
        // FIND ALL FLOWERS WITH THE COLOR ORANGE
        // iterate through mulitple levels of iteration to access color array within object within array
        const colorTeria = "Orange"; // defining criteria in preparatoin for .includes() usage
        for (const flower of flowers) { //run through flowers array
            //for (const color of flower.colors) {    // run through flowers.colors 
                if (flower.colors.includes(colorTeria)) { // state condition
                    filteredFlowers.push(flower)    // push to array
                }
            
        
        }
        return filteredFlowers  // Do not modify
    }
    
    //  console.log(orangeFlowers(flowers)); // just checkin'
    
    

    /*
        This function should return an HTML representation of each flower.
    
        Expected string format:
            <article>
                <h1>Bird of Paradise</h1>
    
                <h2>Colors</h2>
                <section>White</section>
                <section>Orange</section>
    
                <h2>USDA Zones</h2>
                <div>9</div>
                <div>10</div>
                <div>11</div>
            </article>
    */
    const flowersAsHTML = () => {
        let flowersHTMLString = ""  // Do not modify
    
        // ITERATE THROUGH ARRAY OF OBJECTS, PULLLING NAME, COLORS AND USDAZONES. FORMAT FOR HTML
        // start with for/of loop to pull name value
        for (const flower of flowers) { // run through flowers to access individual objects of array
            flowersHTMLString +=   `<article>\n\t<h1>${flower.type}</h1>\n\n\t<h2>Colors</h2>`; // print this every time a new object is accessesd
                for (const color of flower.colors) {    // run through flowers.colors to access individual string values within
                    flowersHTMLString += `\n\t\t<section>${color}</section>\n`  // print this and iterate and print again. this occurs AFTER line 173 funs
                } 
                flowersHTMLString += "\n\t<h2>USDA Zones</h2>"; // add this to print between for/of statements 
                for (const zone of flower.usdaZones) {  //run through flowers.usdaZones to access individual values within
                    flowersHTMLString += `\n\t\t<div>${zone}</div>\n` // print this and iterate and print again

                }
                flowersHTMLString += `\n</article>` // no need for a loop, this prints after everything else is done 
        }
        /*
            Algorithmic thinking is most important on this one.
            We would rather see the correct algorithm than the
            correct code. If you have code that works, but no
            algorithm, then you failed the exercise.
        */
    

        return flowersHTMLString  // Do not modify
    }

// console.log(flowersAsHTML(flowers));

















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

