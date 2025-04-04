import { pickle } from "./filter";

interface Address {
  city: string;
  zip: string;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

// Example data (with extra fields)
const userData = {
  name: "Alice",
  age: 500,
  address: {
    city: "New York",
    zip: "10001",
    country: "USA", // Extra field
  },
  phone: "123456789", // Extra field
};

// filter
const validatedUser = pickle<User>(userData);
console.log(validatedUser);
