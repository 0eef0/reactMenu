import React, {useState} from 'react';
import data from './data';
import Item from './components/Item';
import './styles/styles.css';

const App = () => {
    const [menu, setMenu] = useState(data);

    const allItems = () => {
        setMenu(data);
    }
    const breakfast = () => {
        setMenu(data);
        setMenu(data.filter(item => item.category === 'breakfast'));
    }
    const lunch = () => {
        setMenu(data.filter(item => item.category === 'lunch'));
    }
    const shakes = () => {
        setMenu(data.filter(item => item.category === 'shakes'));
    }
    
    return <>
        <h1 id='pageHeader'>Our Menu</h1>
        <hr id='headerLine' />
        <div id='btnPanel'>
            <button onClick={() => {allItems()}}>All</button>
            <button onClick={() => {breakfast()}}>Breakfast</button>
            <button onClick={() => {lunch()}}>Lunch</button>
            <button onClick={() => {shakes()}}>Shakes</button>
        </div>
        <br />
        <div id='menuItems'>
        {
            menu.map((item) => {
                console.log(item.category)
                return <Item item={item} key={item.id} />
            })
        }
        </div>
    </>
}

export default App
