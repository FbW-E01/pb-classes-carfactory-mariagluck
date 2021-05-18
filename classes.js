// Create a constructor function that can be used to create objects. The objects your factory creates should all have a "type" property that always has the value "car".
// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

function CarFactory( make, model, year) {
    this.type = "car";
    this.make = make;
    this.model = model;
    this.year = year
};



// Use your function to create 10 different cars. Store all of them inside a "garage" array.

let car1 = new CarFactory("Mercedes Benz", "Smart", 2005);
let car2 = new CarFactory("Seat", "Ibiza", 2010);
let car3 = new CarFactory("BMW", "X3", 2018);
let car4 = new CarFactory("Toyota", "Yaris", 2012);
let car5 = new CarFactory("Hyundai", "Tucson", 2017);
let car6 = new CarFactory("Peugeot", "205", 1994);
let car7 = new CarFactory("Citroen", "Berlingo", 2008);
let car8 = new CarFactory("Opel", "Astra", 1995);
let car9 = new CarFactory("Volvo", "xc60", 20100);
let car10 = new CarFactory("Tesla", "model X", 2021);

const garage = [ car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

console.log(garage);

//it prints:
//    [
//        CarFactory {
//          type: 'car',
//          make: 'Mercedes Benz',
//          model: 'Smart',
//          year: 2005
//        },
// //     CarFactory { 
//          type: 'car', 
//          make: 'Seat', 
//          model: 'Ibiza', 
//          year: 2010 },
// //     CarFactory { 
//          type: 'car', 
//          make: 'BMW', 
//          model: 'X3', 
//          year: 2018 },
// //     CarFactory {
// //       type: 'car',
// //       make: 'Toyota',
// //       model: 'Yaris',
// //       year: 2012
// //     },
// //     CarFactory {
// //       type: 'car',
// //       make: 'Hyundai',
// //       model: 'Tucson',
// //       year: 2017
// //     },
// //     CarFactory { 
//          type: 'car', 
//          make: 'Peugeot', 
//          model: '205', 
//          year: 1994 },
// //     CarFactory {
// //       type: 'car',
// //       make: 'Citroen',
// //       model: 'Berlingo',
// //       year: 2008
// //     },
// //     CarFactory { 
//          type: 'car', 
//          make: 'Opel', 
//          model: 'Astra', 
//          year: 1995 },
// //     CarFactory { 
//          type: 'car', 
//          make: 'Volvo', 
//          model: 'xc60', 
//          year: 20100 },
// //     CarFactory {
// //       type: 'car',
// //       make: 'Tesla',
// //       model: 'model X',
// //       year: 2021
// //     }
// //   ]