🥒 pickle: filter by interface

Recursively filters objects by TypeScript interfaces at runtime — removes extra properties with zero dependencies.

✨ Features

- ✅ Type-safe object filtering
- ✅ Automatically removes extra keys
- ✅ Supports deeply nested objects
- ✅ No need to define schemas or decorators
- ✅ Zero dependencies, tiny footprint

🚀 Installation

`npm intall @gulzer/pickle`

or

`yarn add @gulzer/pickle`

🔧 Usage

```
import { pickle } from "@gulzer/pickle";

interface Address {
  city: string;
  zip: string;
}

interface User {
  Name: string;
  Age: number;
  Address: Address;
}

const usersFromDB = {
  Name: "Alice",
  Age: 25,
  Address: {
    city: "New York",
    zip: "10001",
    country: "USA", // extra property
  },
  Phone: "123456789", // extra property
};

const filteredUser = pickle<User>(usersFromDB);

console.log(filteredUser);
// Output:
// {
//   Name: "Alice",
//   Age: 25,
//   Address: {
//     city: "New York",
//     zip: "10001"
//   }
// }
```

🧠 How it works

TypeScript types are not available at runtime — so this utility infers the structure from a generic type T and filters the input object based on that shape using a dummy instance `({} as T)`.

- The function walks through each key in the inferred type
- It copies only those keys from the input object
- If a value is an object, it applies the same logic recursively

💡 When to Use

- Sanitizing user or DB input before using it
- Enforcing a strict structure from loosely typed sources (e.g. APIs)
- Creating lightweight runtime validation without a schema definition
