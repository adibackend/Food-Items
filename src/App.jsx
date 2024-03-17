import Title from './Title';
import Menu from './Menu';
import data from './data';
import { useState } from 'react';
import Buttons from './Buttons';
const App = () => {
  const [menu, setMenu] = useState(data);
  const ll = menu.map((data) => data.category);
  console.log(ll);
  const newtemp = new Set(ll);
  const temp = ['All', ...newtemp];
  const [categories, setCategories] = useState(temp);
  const filterItems = (eat) => {
    if (eat === 'All') {
      setMenu(data);
      return;
    }
    const temp = data.filter((data) => data.category === eat);
    setMenu(temp);
  };
  console.log(newtemp);
  return (
    <>
      <div>
        <Title text="Our menu" />
        <Buttons buttonsArray={categories} filterItems={filterItems} />
        <div className="flex justify-center flex-col  ">
          <Menu items={menu} />
        </div>
      </div>
    </>
  );
};
export default App;
