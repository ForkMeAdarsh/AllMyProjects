let command = prompt("What would you like to do?").toLowerCase();
let todos = ['Collect Chicken Eggs', 'Water the plant'];

while (command !== 'quit')
{
    if (command == 'new')
    {
        let newTodos = prompt("Enter a new todo");
        todos.push(newTodos);
        console.log("**********");
        console.log(`${newTodos} added to the list`);
        console.log("**********");
    }
    else if (command === 'list')
    {
        console.log("**********");
        for (let i = 0; i < todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }
    else if (command === 'delete')
    {
        const index = parseInt(prompt("Ok, enter an index to delete"));
        if (!Number.isNaN(index))
        {
            const deleted = todos.splice(index, 1);
            console.log("**********");
            console.log(`Ok, deleted ${deleted}`);
            console.log("**********");
        }
        else
        {
            console.log("Invalid index");
        }
    }
    command = prompt("What would you like to do?").toLowerCase();
}
console.log("Ok....Quitting this.....!!!");