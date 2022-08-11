import icon from '../assets/icon.svg';

const Item = (props) => {
  return (
    <div className='item'>
      <img className='item__img' src={props.item.imageUrl} alt='' />
      <div className='details'>
        <div className='location'>
          <img className='location__icon' src={icon} alt='' />
          <p className='location__name'>{props.item.location}</p>
          <a className='location__link' href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className='details__title'>{props.item.title}</h1>
        <div className='details__date'>
          <p>{props.item.startDate} -</p>
          <p> {props.item.endDate}</p>
        </div>
        <p className='details__description'>{props.item.description}</p>
      </div>
    </div>
  );
};

export default Item;
