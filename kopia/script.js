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
            ${task.content}
            </li>
            `
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };




    const init = () => {
        render();

    }

    init();

}