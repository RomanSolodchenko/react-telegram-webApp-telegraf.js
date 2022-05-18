import React,{useState} from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Card from './components/Card/Card';

const { getData } = require ("./db/db");
const foods = getData(); // к переменной присваен всю бд с товаром


function App() {

  const [cartItems, setCartItems] = useState([]); // состяние карточки старт 0 потом сумма


 // функция для добавление в карточку(типа корзина товаров)
 const onAdd = (food) => {
  const exist = cartItems.find((x) => x.id === food.id); // если уже есть в карточке 
  if (exist) {
    setCartItems(
      cartItems.map((x) =>
        x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x  // если элемент есть то прибав 1 
      )
    );
  } else {
    setCartItems([...cartItems, { ...food, quantity: 1 }]);
  }
};
//ф-я удаление из карточки товара
const onRemove = (food) => {
  const exist = cartItems.find((x) => x.id === food.id);
  if (exist.quantity === 1) {
    setCartItems(cartItems.filter((x) => x.id !== food.id));
  } else {
    setCartItems(
      cartItems.map((x) =>
        x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
      )
    );
  }
};

  return (<>
  <h1 className='heading'>Order fooood</h1>
<Cart cartItems={cartItems} />   {/* типа корзина в которой цена на выбранные товары, cartitems хук состояния, и две функции добав\удалить */}
<div className="cards__container">
{foods.map((food) => {
    return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}  />
  })}
</div>
 


  </>
  );
}

export default App;
