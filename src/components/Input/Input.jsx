import s from './Input.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTextInput } from '../../features/textInput/textInputSlice';

const Input = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.textInput.value);
  return (
    <>
      <input
        onChange={(e) => dispatch(addTextInput(e.target.value))}
        type='text'
        value={value}
        placeholder='Your todo...'
        className={s.input}
      />
    </>
  );
};

export default Input;
