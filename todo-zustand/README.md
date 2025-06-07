### Practical 6
---
This practical demonstrates how to build a Todo List application using React with Zustand for state management. The application includes features for adding, completing, and deleting todos, with persistent storage using localStorage.

### Features
- Todo Management:

    - Add new todos

    - Mark todos as complete/incomplete

    - Delete individual todos

    - Clear all completed todos

- State Management:

    - Zustand store for centralized state

    - Selective component subscriptions

    - Immutable state updates

- Persistence:

    - Automatic localStorage saving

    - State restoration on page reload

### Project Structure
```
src/
├── components/
│   ├── TodoInput.jsx    # Input form for new todos
│   ├── TodoItem.jsx     # Individual todo component
│   └── TodoList.jsx     # List of all todos
├── store/
│   └── todoStore.js     # Zustand store definition
├── App.js               # Main application component
└── index.js             # Application entry point
```
### Installation
1. Create a new Vite project:
```
npx create vite@latest todo-zustand
cd todo-zustand
```
2. Install Zustand:
```
npm install zustand
```
3. Start the development server:
```
npm run dev
```
### Key Concepts
**Zustand Store**

**The store (todoStore.js) contains:**

- State: todos array

- Actions:

    - addTodo: Adds a new todo

    - toggleTodo: Toggles completion status

    - removeTodo: Deletes a todo

    - clearCompleted: Removes all completed todos

**Component Implementation**
- TodoInput: Form for adding new todos

- TodoItem: Displays and manages individual todos

- TodoList: Renders all todos with clear completed button

**Persistence**
The store uses Zustand's persist middleware to automatically:

- Save state to localStorage

- Restore state on page reload

### Usage
1. Add a Todo:

    - Type in the input field and click "Add"

2. Complete a Todo:

    - Check the checkbox next to a todo

3. Delete a Todo:

    - Click the "Delete" button on a todo

4. Clear Completed:

    - Click the "Clear Completed" button

### Benefits of Zustand
- Simple API: Easy to set up and use

- Performance: Only re-renders components that use changed state

- Flexibility: Can be used with any React application

- Persistence: Built-in middleware for localStorage

