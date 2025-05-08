# 1: How does TypeScript help in improving code quality and project maintainability?

Most of the web developers started their coding journey with JavaScript. TypeScript is basically a strongly typed superset of JavaScript. Now some of you may ask, why TypeScript? Suppose you build a web app project by using JavaScript but at some point, you missed maintaining a specific type or you forget to code for a specific type think what will happen the moment your user inputs that specific type? Your function will collapse your API, and as long as your server will be crashed. Now here is the entry of mighty TypeScript. In TypeScript, you have to declare the type for your code. So in build time, your error will be exposed less buggy coding. Sounds good, right? For large codebases, there should be specific data types. It will increase the code maintainability. In a big project, if you try with JavaScript then will tell you "What hell have I come to?". In that, TypeScript makes your life easy.

## Here are some TypeScript life-easy TypeScript Features

### 1. Early Detection of Bugs  
Errors caught at the compile time before the code even runs for its strongly typed nature. In build time, it will detect type mismatches, misspelled variable names, incorrect function calls, invalid property access.

### 2. Improved Code Readability and Self-Documentation  
Developers can quickly understand what function expects and returns. Its annotations act like built-in documentation.

### 3. Powerful IDE Support and Autocomplete  
Modern code editors like VS Code offer intelligent autocompletion, inline documentation, and refactoring tools for TypeScript. These features reduce errors and improve developer productivity.

### 4. Scalability for Large Projects  
TypeScript by default supports interfaces, abstract classes, generics, and more which allow building scalable well-structured code. Consistent typings and modular code structure help manage complexity.

### 5. Better Integration with Modern Frameworks  
TypeScript works like buttery smooth with modern libraries and frameworks like React, Next.js, Angular, and Vue.

---

# 2: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums is short form of enumerations. In TypeScript, they allow you to define a set of named constants, making code more readable and type-safe.

## It helps for:
- Replace magic strings or numbers with meaningful names  
- Group related values together  
- Prevent invalid values from being used

### Three types of Enums

#### 1. Numeric Enums  
By default, TypeScript enums are numeric. The first value starts at 0, and after each, the value increases by 1.

#### 2. String Enums  
Each value is a string explicitly assigned by the developer.

#### 3. Heterogeneous Enums  
Mix of string and numeric values.
