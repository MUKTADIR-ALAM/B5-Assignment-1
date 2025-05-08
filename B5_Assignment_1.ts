{
  //

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  type Books = { title: string; rating: number }[];

  const books: Books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 4 },
  ];

  const filterByRating = (books: Books): Books => {
    const filterdBooks = books.filter((b) => b.rating >= 4);
    return filterdBooks;
  };


  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const finalArray: T[] = [];
    for (const element of arrays) {
      finalArray.push(...element);
    }
    return finalArray;
  }


  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      return `Model: ${this.model}`;
    }
  }


  function processValue (value: string | number): number  {
    if (typeof value === "number") {
      return value * 2;
    } else {
      return value.length;
    }
  };


  interface Product {
    name: string;
    price: number;
  }

  const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  function getMostExpensiveProduct (products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    } else {
      let ep: Product = products.reduce((a, b) => (a.price > b.price ? a : b));
      return ep;
    }
  };
  

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType (day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  };


  function squareAsync (n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n >= 0) {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      } else {
        reject("Error: Negative number not allowed");
      }
    });
  };

  

  //
}
