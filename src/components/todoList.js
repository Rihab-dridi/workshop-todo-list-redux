
import Todo from './todo'
export default function TodoList({todos}) {



    return (
        <div className="todoList-container">
        {todos.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
      </div>
    )
}
