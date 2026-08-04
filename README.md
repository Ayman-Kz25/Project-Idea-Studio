# Project Idea Studio

Project Idea Studio is a simple object-oriented JavaScript web application for creating and managing project ideas. It allows users to add project ideas, update their execution status, remove ideas, and keep track of all projects through an interactive interface.

## Features

* Create new project ideas
* Add a project title and description
* Track project status

  * Pending Execution
  * Executed Successfully
  * Execution Failed
* Remove individual projects
* Clear all projects
* Live project counter
* Responsive user interface
* Built using Object-Oriented Programming (OOP)

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Object-Oriented Programming (Classes)

## Project Structure

```
Project-Idea-Studio/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Classes

### ProjectIdea

Represents a single project idea.

#### Properties

* `title`
* `description`
* `status`

#### Methods

* `updateProjectStatus(newStatus)`

---

### ProjectIdeaBoard

Represents a collection of project ideas.

#### Properties

* `title`
* `ideas`

#### Methods

* `pin(projectIdea)`
* `unpin(projectIdea)`
* `count()`
* `formatToString()`

## Project Status

Each project can have one of the following statuses:

| Status  | Description           |
| ------- | --------------------- |
| Pending | Pending Execution     |
| Success | Executed Successfully |
| Failure | Execution Failed      |

## How to Run

1. Download or clone this repository.

```
git clone https://github.com/Ayman-Kz25/Project-Idea-Studio
```

2. Open the project folder.

3. Open `index.html` in your browser.

No additional software or installation is required.

## Learning Objectives

This project demonstrates the following JavaScript concepts:

* Classes
* Constructors
* Objects
* Methods
* Arrays
* DOM Manipulation
* Event Listeners
* Object-Oriented Programming
* Dynamic Rendering
* Responsive Web Design

## Future Improvements

* Store projects using Local Storage
* Edit existing projects
* Search projects
* Filter by status
* Sort projects
* Add due dates
* Add project categories
* Drag and drop project cards
* Dark mode
* Import and export projects

## Author

Developed as an Object-Oriented JavaScript project to practice building interactive web applications using HTML, CSS, and JavaScript.

## License

This project is open source and available under the MIT License.