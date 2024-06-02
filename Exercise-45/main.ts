/* Cars: Write a function that stores information about a car in a Object. The function should always receive a 
manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with 
the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s
returned to make sure all the information was stored correctly. */

interface car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function myCar(manufacturer:string, model:string, option: Partial<car>): car{
    return {
        manufacturer: manufacturer,
        model: model,
        ...option
}
}

let car = myCar("BMW", "M5", { color: "aqua", year: 2023})

console.log(car);
