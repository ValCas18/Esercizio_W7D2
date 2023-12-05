/*
class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

	compareAge(ageToCompare) {
		return ageToCompare.age > this.age
			? this.firstName +
					" " +
					this.lastName +
					" è più giovane di " +
					ageToCompare.firstName +
					" " +
					ageToCompare.lastName
			: this.firstName + " " + this.lastName + " è più vecchio di " + this.firstName + " " + this.lastName;
	}
}

const userOne = new User("Mario", "Rossi", "45", "Roma");
const userTwo = new User("Alessandro", "Bianchi", "48", "Napoli");
const userThree = new User("Luca", "Verdi", "39", "Milano");

console.log(userThree.compareAge(userOne));
*/

class Pet {
	constructor(petName, ownerName, species, breed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.breed = breed;
	}
}

window.onload = function () {
	let form = document.getElementById("form");
	form.addEventListener("submit", function (event) {
		event.preventDefault();

		const petName = document.getElementById("petName");
		const ownerName = document.getElementById("ownerName");
		const species = document.getElementById("species");
		const breed = document.getElementById("breed");
	});
};
