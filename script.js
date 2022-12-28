{
    const tasks = [
        {
            content: "zadanie_testowe",
            done: false,
        },
        {
        },

    ]
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        })
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
                render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });

        });
    }

    const render = () => {
        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
            <li class="add_task">
            <button class="js-done">${task.done ? "✔" : ""}</button>
            <span class="newtask${task.done ? " task--done" : ""}">${task.content}</span>
            <button class="js-remove">🗑</button>
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
  
        const newTask = document.querySelector(".js-newTask")
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent !== ""){
            addNewTask(newTaskContent);
            newTask.value = "";  
        };
    newTask.focus() ;
}
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit );

        const element = document.querySelector(".js-newTask")

        if (element === true) {
            element.innerText = "";
        } 
    }
    init();

}