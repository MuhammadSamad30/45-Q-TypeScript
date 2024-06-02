// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing 
// these items.

interface info {
    name: string;
    age: number;
    profession: string;
  }
  
  interface institute {
    title: string;
    author: string;
    learning: string;
  }
  
  interface product {
    name: string;
    price: number;
    category: string;
  }
  
  const myInfo: info = {
    name: "Muhammad samad",
    age: 17,
    profession: "Certified cloud applied generative ai engineer",
  };
  
  const myInstitute: institute = {
    title: "Governor House Karachi",
    author: "Kamran tessori",
    learning: "Typescript",
  };
  
  const myProduct: product = {
    name: "Laptop",
    price: 63000,
    category: "Electronics",
  };
  console.log("");
  console.log(`My Information is: \n${myInfo.name} \n${myInfo.age} \n${myInfo.profession}`);
  console.log("");
  console.log(`My Institute is: \n${myInstitute.title} \n${myInstitute.author} \n${myInstitute.learning}`);
  console.log("");
  console.log(`My Product is: \n${myProduct.name} \n${myProduct.price} \n${myProduct.category}`);
  console.log("");