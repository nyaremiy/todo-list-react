import s from './ButtonAdd.module.scss';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import { addTextInput } from '../../features/textInput/textInputSlice';

const ButtonAdd = () => {
  const text = useSelector((state) => state.textInput.value);

  const dispatch = useDispatch();

  const hadlerTodoAddClick = () => {
    const todo = {
      id: v4(),
      text: text,
      completed: false
    };

    if (!(text.length <= 0)) {
      dispatch(addTodo(todo));
    }

    dispatch(addTextInput(''));
  };
  return (
    <button type='button' className={s.button} onClick={hadlerTodoAddClick}>
      <span>Add</span>
    </button>
  );
};

export default ButtonAdd;
