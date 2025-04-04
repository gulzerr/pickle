📦 filter-by-interface

Recursively filters objects by TypeScript interfaces at runtime — removes extra properties with zero dependencies.

✨ Features
• ✅ Type-safe object filtering
• ✅ Automatically removes extra keys
• ✅ Supports deeply nested objects
• ✅ No need to define schemas or decorators
• ✅ Zero dependencies, tiny footprint

🚀 Installation

`npm install pickle`

# or

`yarn add pickle`

🔧 Usage

```
import { pickle } from "pickle";

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

const filteredUser = filterByInterface<User>(usersFromDB);

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

⸻

🧠 How it works

TypeScript types are not available at runtime — so this utility infers the structure from a generic type T and filters the input object based on that shape using a dummy instance ({} as T).
• The function walks through each key in the inferred type
• It copies only those keys from the input object
• If a value is an object, it applies the same logic recursively

⸻

📁 File Structure (for contributors)

src/
├── index.ts // Entry point
└── filter.ts // Core filtering logic
tests/
└── filter.test.ts // Unit tests (optional)

README.md
package.json
tsconfig.json

⸻

🧪 Testing

yarn test

# or

npm test

You can use Jest, Vitest, or your preferred test runner.

⸻

💡 When to Use
• Sanitizing user or DB input before using it
• Enforcing a strict structure from loosely typed sources (e.g. APIs)
• Creating lightweight runtime validation without a schema definition

⸻

⚠️ Limitations
• Doesn’t support arrays or complex types (yet)
• Relies on dummy cast {} as T to infer structure
• Type-only — no actual runtime validation (e.g. type checking for string vs number)

For full validation, consider combining with zod or ajv.

⸻

📜 License

MIT — free to use, share, and modify.

⸻

Want a zod version or add support for arrays? Let me know — I can help you extend it!
