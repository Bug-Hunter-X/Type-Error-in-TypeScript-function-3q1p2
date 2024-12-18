function greeter(person: string): string {
  return "Hello, " + person;
}

function greetPeople(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let users = ["Jane Doe", "John Smith"];
console.log(greetPeople(users)); //Correct usage