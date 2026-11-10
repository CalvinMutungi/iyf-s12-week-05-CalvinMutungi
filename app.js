// ==========================================
// IYF WEEK 5: TO-DO LIST APPLICATION (`app.js`)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Load tasks from localStorage or initialize empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let currentFilter = "all";

    // Render tasks on initial load
    renderTasks();

    // Add Task Event Listeners
    addBtn.addEventListener("click", addTask);
    todoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    // Filter Buttons Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilter = btn.getAttribute("data-filter");
            renderTasks();
        });
    });

    // Event Delegation for Complete and Delete actions on the UL
    todoList.addEventListener("click", (e) => {
        const item = e.target.closest(".todo-item");
        if (!item) return;
        const id = Number(item.getAttribute("data-id"));

        if (e.target.classList.contains("complete-btn")) {
            toggleTask(id);
        } else if (e.target.classList.contains("delete-btn")) {
            deleteTask(id);
        }
    });

    function addTask() {
        const text = todoInput.value.trim();
        if (text === "") return;

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        tasks.push(newTask);
        saveAndRender();
        todoInput.value = "";
    }

    function toggleTask(id) {
        tasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveAndRender();
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveAndRender();
    }

    function saveAndRender() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }

    function renderTasks() {
        todoList.innerHTML = "";

        const filteredTasks = tasks.filter(task => {
            if (currentFilter === "active") return !task.completed;
            if (currentFilter === "completed") return task.completed;
            return true; // "all"
        });

        if (filteredTasks.length === 0) {
            todoList.innerHTML = `<li style="text-align: center; color: #777; padding: 15px;">No tasks found.</li>`;
            return;
        }

        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.className = `todo-item ${task.completed ? "completed" : ""}`;
            li.setAttribute("data-id", task.id);

            li.innerHTML = `
                <span>${escapeHTML(task.text)}</span>
                <div class="todo-actions">
                    <button class="complete-btn">${task.completed ? "Undo" : "Complete"}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            todoList.appendChild(li);
        });
    }

    // Basic XSS protection utility
    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
        );
    }
});

