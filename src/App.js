//import logo from './logo.svg';
import './scss/app.scss';
import Header from './components/header';
import Catigories from './components/catigories';
import Sorting from './components/sorting';
import PizzaBlock from './components/pizza-block';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories />
            <Sorting />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock
              tittle="Пепперони"
              price={500}
              pic="https://media.dodostatic.net/image/r:292x292/11EE7D5ED4C9050D84B1932A18396C2E.avif"
            />
            <PizzaBlock
              tittle="Песто"
              price={350}
              pic="https://media.dodostatic.net/image/r:292x292/11EEAA3DCE1E36DB983445A578830144.avif"
            />
            <PizzaBlock
              tittle="4 сезона"
              price={800}
              pic="https://media.dodostatic.net/image/r:292x292/11EE7D5EDE8F665C89A9328216FE2126.avif"
            />
            <PizzaBlock
              tittle="Ветчина и грибы"
              price={240}
              pic="https://media.dodostatic.net/image/r:292x292/11EE7D5ED738D821894D5CF6BF6EC98C.avif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
