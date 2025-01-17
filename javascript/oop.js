class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

dog.makeSound();
cat.makeSound();
