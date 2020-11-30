import './App.css';
import Goods from './Goods';

const goods = [
  {'title':'apple', 'price': 330, 'image':'https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-512.png'},
  {'title':'pear', 'price': 490, 'image':'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png'},
]

function App() {
  return (
    <>
      {goods.map(item =><Goods title={item.title} price={item.price} image={item.image} key={item.title}/>)}
    </>
  );
}

export default App;
