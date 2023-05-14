import { TodoLayout } from "../layout"
import { CompleteTasksView, ToDoTasksView } from '../views'

export const ToDoPages = () => {
    console.log('Hola mundo')
    return (
        <TodoLayout>
            <ToDoTasksView />
        </TodoLayout>
    )
}
