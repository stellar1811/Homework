function Human(name, gender) {
    this.name = name;
    this.gender = gender;
}

function createApartment() {
    const apartment = {
        residents: [],
        addResident: function(person) {
            if (person instanceof Human) {
                this.residents.push(person);
                console.log(`Add a resident ${person.name}`);
            } else {
                console.log('Error: this object is not instance of the class "Human"');
            }
        }
    };
    return apartment;
}

function House(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;

    this.addApartment = function(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
            console.log('Add an apartment');
        } else {
            console.log('Error: The maximum number of apartments has been reached');
        }
    };
}

let person1 = new Human("Robert", "male");
let person2 = new Human("Dan", "male");
console.log(person1, person2);

let apartment1 = createApartment();
let apartment2 = createApartment();
console.log(apartment1, apartment2);


apartment1.addResident(person1);
apartment2.addResident(person2);


let house = new House(10);
house.addApartment(apartment1);
house.addApartment(apartment2);
console.log(house);


