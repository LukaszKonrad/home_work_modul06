{

    const tasks = [
        {
            content: "zadanie1",
            done: false,
        },
        {
            content: "zadanie2",
            done: true,

        },

    ]

    const render = () => {
        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
            <li
            ${task.done ? "style=\"text-decoration: line-through\"": ""}>
            <div class="add_task">${task.content}</div>
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };




    const init = () => {
        render();


        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
      

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === ""){
                return;
            }

            tasks.push({
                content: newTaskContent
            })
            render();
    });
    }
    init();

}