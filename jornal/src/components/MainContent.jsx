import Item from './Item';
import data from '../assets/data';

const MainContent = () => {
  const jornal = data.map((item) => {
    return <Item item={item} />;
  });

  return <div className='container'>{jornal}</div>;
};

export default MainContent;
