export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}


export const connectToDatabase = () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Database connected");
        }, 1000);
    })

    return dummyPromise;
}