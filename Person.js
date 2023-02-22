class Person {
    // Include a Constructor Method for Properties: 
        // 1. Name
        // 2. Bags
            // 2a. Bags should contain/reference a data type for storing more than one bag object.

    // Include an addBag method
    constructor(name, bags = []) {
        this.name = name;
        this.bags = bags;
    }

    addBag(bag) {
        if (!bag) {
            throw new Error("Bag is required to be added");
        }
        this.bags.push(bag);
        console.log("Added a bag:", bag);
    }
}
    







//Export the Module
module.exports = Person
