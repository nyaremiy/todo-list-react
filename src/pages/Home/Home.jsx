import Header from '../../components/Header/Header';
import s from './Home.module.scss';
import Main from './../../components/Main/Main';

const Home = () => {
  return (
    <div className={s.home}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
