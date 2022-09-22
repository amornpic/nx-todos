import { Todo } from '@nx-todos/data';
import './todos.module.css';

export interface TodosProps {
  todos: Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li key={t.title} className={'todo'}>
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
