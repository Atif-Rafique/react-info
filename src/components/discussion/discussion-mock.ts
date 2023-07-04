export const DISCUSSION_DATA = [
  {
    id: "01",
    heading: "1) What is SPA (Single Page Application)",
    description: `A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with it. SPAs use JavaScript frameworks like React, Angular, or Vue to handle the dynamic rendering and data updates, allowing for a more seamless and interactive user experience.`,
  },
  {
    id: '02',
    heading: "2) Why do we have SPA and what were the problems in the past with front-end web development?",
    description: `SPAs were developed to enhance user experience by reducing page reloads and providing a more fluid, desktop-like application feel. In traditional multi-page applications, each user action required a server request, resulting in slower load times and a less engaging experience. SPAs solve this problem by loading data asynchronously and updating only the necessary parts of the page, creating a more responsive and efficient user interface.`
  },
  {
    id: "03",
    heading: "3) Is JavaScript a single-threaded language? How to implement multi-threading if we want to (In front-end or Node.js)?",
    description: `Yes, JavaScript is primarily a single-threaded language. However, you can achieve asynchronous behavior through techniques like callbacks, promises, and async/await, which don't create additional threads but allow non-blocking execution of code. In Node.js, you can use Worker Threads to create separate threads for CPU-intensive tasks, effectively enabling multi-threading.`
  },
  {
    id: "04",
    heading: "4) As we know that JavaScript code is executed by its engine (JS engine), Do you think Node.js and front-end tools have the same JS engine for their execution?",
    description: `Yes, both Node.js and front-end tools like browsers have a JavaScript engine to execute JavaScript code. However, the engines may differ. For example, Node.js uses the V8 engine, while browsers like Chrome and Opera also use V8, but others like Firefox use SpiderMonkey.`
  },
  {
    id: "05",
    heading: "5) How many methods (techniques) do we have in React to share data between components?",
    description: `In React, there are primarily three methods for sharing data between components: a. Props: Parent components can pass data down to child components through props. b. Context API: It allows data to be accessed by components at different nesting levels without explicit passing through props. c. Redux: A state management library that provides a centralized store for managing application state and enables data sharing between components.`
  },
  {
    id: "06",
    heading: "6) What is the difference between a GraphQL App and a Redux App?",
    description: `The main difference between a GraphQL App and a Redux App lies in their data-fetching and state management approaches:
GraphQL App: Uses GraphQL to efficiently fetch data from the server, and the server determines the shape of the response based on the client's request.
Redux App: Relies on a centralized store to manage the application's state and typically makes RESTful API calls to fetch data from the server`
  },
  {
    id: '07',
    heading: "7) Difference between REST API, Restful API, and GraphQL API.",
    description: `REST API: Stands for Representational State Transfer. It uses standard HTTP methods like GET, POST, PUT, DELETE to perform CRUD (Create, Read, Update, Delete) operations on resources and returns data in various formats like JSON, XML, etc.
Restful API: This term is often used interchangeably with REST API. It refers to APIs that follow the principles of REST.
GraphQL API: A query language for APIs that allows clients to request only the data they need, reducing over-fetching and under-fetching issues commonly associated with REST APIs.`
  },
  {
    id: "08",
    heading: "8) What are generator functions in JS? Do you use them on a daily basis, or not? If yes, tell me an example where you use them daily.",
    description: `Generator functions are a special type of function in JavaScript defined using function* syntax. They can pause and resume their execution, allowing for the generation of a sequence of values over time using the yield keyword. Generator functions are not commonly used on a daily basis, but they are helpful when dealing with large datasets or asynchronous operations that need to be processed incrementally.

Here's a simple example of a generator function that generates an infinite sequence of numbers:`
  },
  {
    id: "09",
    heading: "9) Difference between Fragment and Portal in React.",
    description: `Fragment: A Fragment is a built-in component in React that allows you to group multiple children without adding extra nodes to the DOM. It's helpful when you want to return multiple elements from a component's render method without a wrapper element.

Portal: Portals provide a way to render children into a different DOM subtree outside the parent component. This is useful when you want to render a component's children in a different part of the DOM hierarchy, like a modal or a popup, without affecting the parent's layout.`
  },
  {
    id: "10",
    heading: "10) What is the position of a Portal in the DOM? Is it inside the root div? Adjacent to the root div? Or outside the body section of the DOM?",
    description: `Portals render their content outside of the root div of the React application but still within the body section of the DOM. This allows you to render components in separate DOM subtrees while still keeping them under the React application's control.`
  },
  {
    id: "11",
    heading: "11) Can we create a whole React application in a single file? I.e., index.tsx, etc.? What are the pros and cons.",
    description: `Technically, you can create a small React application in a single file, but it's not recommended for larger projects. The main pros and cons are as follows:

Pros:

Simplicity: A single-file application may be easier to understand for small projects with minimal complexity.
Quick Prototyping: For simple prototypes or demos, a single-file approach can be fast and convenient.
Maintainability: As the application grows, managing all code in a single file becomes challenging and less maintainable.
Code Organization: It becomes harder to organize and manage different components, utilities, and styles in a single file.
Readability: Code readability can suffer as the file grows larger, making it harder to find and manage specific parts of the application.`
  },
  {
    id: "12",
    heading: "12) Why do we use npx create-react-app when we can use npm i for everything?",
    description: `npx create-react-app is a command used to create a new React application using the Create React App (CRA) tool, while npm i is used to install packages listed in the package.json file. The main difference is that npx create-react-app sets up the entire project structure and boilerplate code for a new React application, including all the necessary dependencies and configurations. On the other hand, npm i is used to install individual packages (dependencies) after the project has already been set up.

In summary, npx create-react-app is used to bootstrap a new React application, while npm i is used for installing specific packages in an existing project.`
  },
  {
    id: "13",
    heading: "13) What is the macro queue? What is the micro queue? What is the call stack? Which one has higher priority and what order?",
    description: `Macro Queue (Task Queue): It holds tasks that are executed asynchronously. These tasks include I/O operations, DOM events, setTimeout, setInterval, etc.
Micro Queue (Job Queue): It holds tasks that are also executed asynchronously but with a higher priority than the Macro Queue. Promises and async/await tasks are typically placed in the Micro Queue.
Call Stack: It is the mechanism used by the JavaScript runtime to keep track of function calls. When a function is called, it's added to the top of the stack, and when it returns, it's removed from the stack.
The Call Stack processes functions synchronously until it's empty.
If there are tasks in the Micro Queue, they are processed before any other tasks from the Macro Queue.
After the Micro Queue is empty, tasks from the Macro Queue are processed.`
  },
  {
    id: "14",
    heading: "14) What is the heap?",
    description: `The heap is the memory area used by JavaScript to allocate memory for objects and data structures during runtime. It's where objects, arrays, and variables are stored. Unlike the call stack, which is used for tracking function calls and their local variables, the heap is used for dynamic memory allocation and deallocation.`
  },
  {
    id: "15",
    heading: "15) What is CDN and Cache?",
    description: `CDN (Content Delivery Network): A CDN is a distributed network of servers located in multiple geographic locations. It caches and delivers web content, such as JavaScript files, CSS stylesheets, images, and videos, to users from the nearest server. This helps reduce latency and improves the loading speed of web pages.

Cache: In the context of web development, caching refers to the temporary storage of web resources to reduce the need for fetching them from the server on subsequent requests. Caching can be done at different levels, such as the browser cache (client-side caching) or server cache (server-side caching). It helps improve the overall performance and user experience of web applications by reducing data transfer and server load.`
  },

];
