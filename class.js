(function(){
	"use strict";

	class Person {
		constructor(firstName, lastName, age){
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
		}
		personInfo(){
			console.log(this.firstName + " " + this.lastName + " age: " + this.age);
		}
	}

	var person = new Person("Jan", "Kowalski", 30);
	person.personInfo();

	class Employee extends Person {
		constructor(firstName, lastName, age, position){
			super(firstName, lastName, age);
			this.position = position;
		}
		employeeInfo(){
			console.log(this.firstName + " " + this.lastName + " position: " + this.position);
		}
	}

	var employee = new Employee("Jan", "Kowalski", 30, "journalist");
	employee.employeeInfo();
	
}());
