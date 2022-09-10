import s from './Main.module.scss';
import cn from 'classnames';
import Input from './../Input/Input';
import store from 'store';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import TodoItem from './../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Main = () => {
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    store.set('todos', todos);

    // const activeTasks =
    //   todos.length && todos.filter((item) => item.completed === false);
    // const completedTasks =
    //   todos.length && todos.filter((item) => item.completed === true);

    // todos = [...activeTasks, ...completedTasks];
  }, [todos]);

  return (
    <div className={s.main}>
      <div className={cn('container', s.wrapper)}>
        <div className={s.head}>
          <Input />
          <ButtonAdd />
        </div>
        <div className={s.todos}>
          {todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          ) : (
            <div className={s.noTasks}>You have no tasks...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
