# TypeScript Mastery: 2-Week Learning Plan

## Prerequisites
- Basic JavaScript knowledge (variables, functions, arrays, objects)
- A code editor (VS Code recommended)
- Node.js installed (16+ recommended)

## Setup (Day 0)
```bash
# Install Node.js from nodejs.org
# Install TypeScript globally
npm install -g typescript

# Create your learning folder
mkdir typescript-learning
cd typescript-learning
npm init -y
npm install --save-dev typescript @types/node

# Initialize TypeScript
npx tsc --init
```

---

## Week 1: Foundations

### Day 1: TypeScript Basics & Type Annotations
**Goal**: Understand why TypeScript exists and basic type system

**Learn**:
- What is TypeScript and why use it?
- Basic types: `string`, `number`, `boolean`, `array`, `any`, `unknown`
- Type inference vs explicit typing
- Compiling TypeScript to JavaScript

**Practice**:
```typescript
// Create: day1-basics.ts

// Basic type annotations
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Function with types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Exercise: Create a function that calculates BMI
function calculateBMI(weight: number, height: number): number {
  // Your code here
}
```

**Exercise**: Build a simple user profile creator with typed variables

---

### Day 2: Interfaces & Objects
**Goal**: Structure complex data with interfaces

**Learn**:
- Defining interfaces
- Optional properties (`?`)
- Readonly properties
- Extending interfaces

**Practice**:
```typescript
// Create: day2-interfaces.ts

interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // optional
  readonly createdAt: Date;
}

interface Admin extends User {
  permissions: string[];
}

// Exercise: Create interfaces for a blog system
// - Post (title, content, author, tags, published date)
// - Comment (author, content, postId)
// - Category
```

**Project**: Create a contact management system with proper interfaces

---

### Day 3: Functions & Type Aliases
**Goal**: Master function typing and create reusable types

**Learn**:
- Function parameter types
- Return types
- Optional and default parameters
- Type aliases
- Union types (`|`)

**Practice**:
```typescript
// Create: day3-functions.ts

type ID = string | number;
type Status = "pending" | "active" | "inactive";

function processUser(
  id: ID,
  status: Status = "pending"
): void {
  console.log(`Processing user ${id} with status ${status}`);
}

// Arrow functions
const multiply = (a: number, b: number): number => a * b;

// Exercise: Create a calculator with typed functions
type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(a: number, b: number, op: Operation): number {
  // Your code here
}
```

**Exercise**: Build a task manager with typed CRUD operations

---

### Day 4: Advanced Types
**Goal**: Use advanced type features for better type safety

**Learn**:
- Literal types
- Intersection types (`&`)
- Type guards (`typeof`, `instanceof`)
- Discriminated unions

**Practice**:
```typescript
// Create: day4-advanced.ts

// Literal types
type Direction = "north" | "south" | "east" | "west";

// Intersection types
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

// Discriminated unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

// Exercise: Create a payment system with discriminated unions
// - CreditCard, PayPal, BankTransfer (each with different properties)
```

---

### Day 5: Classes & OOP
**Goal**: Object-oriented programming with TypeScript

**Learn**:
- Class syntax
- Access modifiers (`public`, `private`, `protected`)
- Constructors and properties
- Inheritance
- Abstract classes

**Practice**:
```typescript
// Create: day5-classes.ts

class Animal {
  constructor(protected name: string) {}
  
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }
  
  makeSound(): void {
    console.log("Woof!");
  }
  
  getBreed(): string {
    return this.breed;
  }
}

// Exercise: Create a banking system
// - BankAccount (base class)
// - SavingsAccount (with interest rate)
// - CheckingAccount (with overdraft limit)
```

**Project**: Build a simple inventory management system with classes

---

### Day 6: Generics Basics
**Goal**: Write reusable, type-safe code

**Learn**:
- Generic functions
- Generic interfaces
- Generic classes
- Constraints

**Practice**:
```typescript
// Create: day6-generics.ts

// Generic function
function identity<T>(value: T): T {
  return value;
}

// Generic interface
interface Box<T> {
  value: T;
}

// Generic with constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

// Exercise: Create a generic Stack class
class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    // Your code
  }
  
  pop(): T | undefined {
    // Your code
  }
}
```

---

### Day 7: Review & Mini-Project
**Goal**: Consolidate Week 1 learning

**Project**: Build a Todo List Application
- Use interfaces for Todo items
- Implement CRUD operations with typed functions
- Use classes for TodoList management
- Add categories with union types
- Use generics for storage

```typescript
// Create: todo-app.ts

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}

class TodoList {
  private todos: Todo[] = [];
  
  // Implement: add, remove, update, filter, sort
}
```

---

## Week 2: Advanced Concepts

### Day 8: Modules & Namespaces
**Goal**: Organize code across files

**Learn**:
- ES6 modules (`import`/`export`)
- Default vs named exports
- Namespaces (legacy but useful to know)
- Module resolution

**Practice**:
```typescript
// Create multiple files:
// utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

// utils/string.ts
export default function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// main.ts
import { add, PI } from './utils/math';
import capitalize from './utils/string';

// Exercise: Create a modular e-commerce system
// - products module
// - cart module
// - user module
```

---

### Day 9: Utility Types & Mapped Types
**Goal**: Transform types effectively

**Learn**:
- `Partial<T>`
- `Required<T>`
- `Readonly<T>`
- `Pick<T, K>`
- `Omit<T, K>`
- `Record<K, T>`
- Custom mapped types

**Practice**:
```typescript
// Create: day9-utilities.ts

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit properties
type UserWithoutId = Omit<User, "id">;

// Create a custom mapped type
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// Exercise: Create utility types for API responses
// - Loading state wrapper
// - Error state wrapper
// - Success state wrapper
```

---

### Day 10: Type Assertions & Type Guards
**Goal**: Handle complex type scenarios

**Learn**:
- Type assertions (`as`)
- Non-null assertion (`!`)
- Custom type guards
- `is` keyword
- Type predicates

**Practice**:
```typescript
// Create: day10-guards.ts

// Type guard with 'is'
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Exercise: Create type guards for form validation
// - isEmail
// - isPhoneNumber
// - isValidDate
```

---

### Day 11: Async TypeScript
**Goal**: Type promises and async operations

**Learn**:
- Typing Promises
- Async/await with types
- Error handling in async code
- Typing fetch requests

**Practice**:
```typescript
// Create: day11-async.ts

interface User {
  id: number;
  name: string;
}

// Typed async function
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  const data: User = await response.json();
  return data;
}

// Generic fetch wrapper
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

// Exercise: Create an API client
class ApiClient {
  async get<T>(endpoint: string): Promise<T> {
    // Your code
  }
  
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    // Your code
  }
}
```

---

### Day 12: Decorators & Metadata
**Goal**: Understand decorators (if using experimentalDecorators)

**Learn**:
- Class decorators
- Method decorators
- Property decorators
- Parameter decorators

**Practice**:
```typescript
// Create: day12-decorators.ts
// Enable in tsconfig.json: "experimentalDecorators": true

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Exercise: Create validation decorators
// - @required
// - @min / @max
// - @email
```

---

### Day 13: Configuration & Best Practices
**Goal**: Set up real-world TypeScript projects

**Learn**:
- `tsconfig.json` options
- Strict mode flags
- Path mapping
- ESLint with TypeScript
- Prettier integration

**Practice**:
```json
// tsconfig.json essentials
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Exercise**: Set up a TypeScript project with:
- Proper folder structure
- ESLint + Prettier
- Build scripts
- Watch mode

---

### Day 14: Final Project
**Goal**: Build a complete application

**Project Options** (choose one):

#### Option 1: REST API Server
Build an Express + TypeScript API:
```typescript
// Features:
// - User authentication
// - CRUD operations
// - Middleware with types
// - Database models (with Prisma or TypeORM)
// - Error handling
// - Validation
```

#### Option 2: CLI Tool
Build a command-line application:
```typescript
// Features:
// - Argument parsing
// - File operations
// - Interactive prompts
// - Colored output
// - Config file support
```

#### Option 3: Full-Stack Todo App
```typescript
// Backend:
// - Express API with TypeScript
// - SQLite database
// - RESTful endpoints

// Frontend:
// - React + TypeScript
// - Typed API client
// - State management
```

---

## Learning Resources

### Documentation
- [Official TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Practice Platforms
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Exercism TypeScript Track](https://exercism.org/tracks/typescript)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

### Video Courses
- Net Ninja TypeScript Tutorial (YouTube)
- Traversy Media TypeScript Crash Course

---

## Daily Routine

**Morning (1 hour)**:
- Read documentation/watch tutorial
- Take notes on new concepts
- Run examples in TypeScript Playground

**Afternoon (1-2 hours)**:
- Complete practice exercises
- Experiment with variations
- Debug errors (important learning!)

**Evening (30 min)**:
- Review what you learned
- Write a summary
- Prepare questions for next day

---

## Tips for Success

1. **Type everything manually** - Don't rely on inference at first
2. **Read error messages carefully** - TypeScript errors are educational
3. **Use the playground** - Experiment without setup overhead
4. **Build incrementally** - Start simple, add complexity
5. **Join communities** - TypeScript Discord, Reddit r/typescript
6. **Read other people's code** - Study open-source TypeScript projects
7. **Don't skip exercises** - Hands-on practice is crucial

---

## Common Pitfalls to Avoid

- Using `any` everywhere (defeats the purpose)
- Not enabling strict mode
- Over-engineering types (keep it practical)
- Ignoring type errors with `@ts-ignore`
- Not understanding type inference
- Copying types without understanding them

---

## After 2 Weeks

You should be able to:
- ✅ Write type-safe TypeScript applications
- ✅ Create and use interfaces and types
- ✅ Work with generics confidently
- ✅ Structure projects with modules
- ✅ Handle async operations with proper types
- ✅ Read and understand TypeScript codebases
- ✅ Configure TypeScript projects

**Next Steps**:
- Learn a framework (React + TS, Next.js, NestJS)
- Study design patterns in TypeScript
- Contribute to open-source TypeScript projects
- Build production applications
- Explore advanced type system features

---

## Weekly Checkpoints

### End of Week 1
- Can you create interfaces and type aliases?
- Do you understand function typing?
- Can you use classes with access modifiers?
- Do you know when to use generics?

### End of Week 2
- Can you set up a TypeScript project from scratch?
- Do you understand utility types?
- Can you handle async operations?
- Have you completed a full project?

---

Good luck with your TypeScript journey! Remember: consistency beats intensity. 
30 minutes daily is better than cramming on weekends.
