// =========================
// Project Status
// =========================

const projectStatus = {
    PENDING: {
        description: "Pending Execution",
    },
    SUCCESS: {
        description: "Executed Successfully",
    },
    FAILURE: {
        description: "Execution Failed",
    },
};

// =========================
// ProjectIdea Class
// =========================

class ProjectIdea {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.status = projectStatus.PENDING;
    }

    updateProjectStatus(newStatus) {
        this.status = newStatus;
    }
}

// =========================
// ProjectIdeaBoard Class
// =========================

class ProjectIdeaBoard {
    constructor(title) {
        this.title = title;
        this.ideas = [];
    }

    pin(projectIdea) {
        this.ideas.push(projectIdea);
    }

    unpin(projectIdea) {
        const index = this.ideas.indexOf(projectIdea);

        if (index !== -1) {
            this.ideas.splice(index, 1);
        }
    }

    count() {
        return this.ideas.length;
    }

    formatToString() {
        let result = `${this.title} has ${this.count()} idea(s)\n`;

        if (this.count() === 0) {
            return result;
        }

        this.ideas.forEach((idea) => {
            result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
        });

        return result;
    }
}

// =========================
// DOM Elements
// =========================

const form = document.getElementById("ideaForm");
const titleInput = document.getElementById("projectTitle");
const descriptionInput = document.getElementById("projectDescription");

const ideaContainer = document.getElementById("ideaContainer");
const ideaCount = document.getElementById("ideaCount");
const clearBoard = document.getElementById("clearBoard");
const boardTitle = document.getElementById("boardTitle");

// =========================
// Board
// =========================

const board = new ProjectIdeaBoard("My Project Workspace");

boardTitle.textContent = board.title;

// =========================
// Render Function
// =========================

function renderIdeas() {

    ideaCount.textContent = board.count();

    ideaContainer.innerHTML = "";

    if (board.count() === 0) {

        ideaContainer.innerHTML = `
            <div class="empty-state">
                <h3>No Projects Yet</h3>
                <p>Create your first project idea above.</p>
            </div>
        `;

        return;
    }

    board.ideas.forEach((idea) => {

        const card = document.createElement("div");
        card.className = "idea-card";

        card.innerHTML = `
            <h3>${idea.title}</h3>

            <p>${idea.description}</p>

            <div class="status">

                <select>

                    <option value="PENDING"
                    ${idea.status === projectStatus.PENDING ? "selected" : ""}>
                    Pending Execution
                    </option>

                    <option value="SUCCESS"
                    ${idea.status === projectStatus.SUCCESS ? "selected" : ""}>
                    Executed Successfully
                    </option>

                    <option value="FAILURE"
                    ${idea.status === projectStatus.FAILURE ? "selected" : ""}>
                    Execution Failed
                    </option>

                </select>

            </div>

            <div class="card-actions">

                <button class="remove-btn">
                    Remove
                </button>

            </div>
        `;

        const select = card.querySelector("select");

        select.addEventListener("change", function () {

            if (this.value === "PENDING") {
                idea.updateProjectStatus(projectStatus.PENDING);
            }

            else if (this.value === "SUCCESS") {
                idea.updateProjectStatus(projectStatus.SUCCESS);
            }

            else {
                idea.updateProjectStatus(projectStatus.FAILURE);
            }

        });

        card.querySelector(".remove-btn").addEventListener("click", () => {

            board.unpin(idea);

            renderIdeas();

        });

        ideaContainer.appendChild(card);

    });

}

// =========================
// Add Project
// =========================

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (!title || !description) return;

    const project = new ProjectIdea(title, description);

    board.pin(project);

    renderIdeas();

    form.reset();

});

// =========================
// Clear Board
// =========================

clearBoard.addEventListener("click", () => {

    if (confirm("Remove all projects?")) {

        board.ideas = [];

        renderIdeas();

    }

});

// =========================
// Initial Render
// =========================

renderIdeas();