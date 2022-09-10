import cn from 'classnames';
import s from './TodoItem.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodoByCompleted,
  removeTodo,
  toggleCompletedTodo
} from '../../features/todo/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handlerCompleted = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  useEffect(() => {
    const activeTasks =
      todos.length && todos.filter((item) => item.completed === false);
    const completedTasks =
      todos.length && todos.filter((item) => item.completed === true);
    dispatch(addTodoByCompleted([...activeTasks, ...completedTasks]));
  }, [todo.completed]);

  return (
    <div className={s.todoItem}>
      <div className={s.completed} onClick={() => handlerCompleted(todo.id)}>
        {todo.completed && (
          <div className={s.check}>
            <svg
              viewBox='0 0 80.588 61.158'
              style={{
                enableBackground: 'new 0 0 80.588 61.158'
              }}
            >
              <path
                style={{
                  fill: '#231f20'
                }}
                d='M29.658 61.157a4.673 4.673 0 0 1-3.305-1.369L1.37 34.808a4.674 4.674 0 0 1 0-6.611 4.673 4.673 0 0 1 6.611 0l21.485 21.481 42.96-48.117a4.675 4.675 0 1 1 6.975 6.227L33.145 59.595a4.678 4.678 0 0 1-3.355 1.56l-.132.002z'
              />
            </svg>
          </div>
        )}
      </div>
      <div className={cn(s.text, todo.completed ? s.completedText : '')}>
        {todo.text}
      </div>
      <button
        type='button'
        className={s.button}
        onClick={() => {
          dispatch(removeTodo(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
