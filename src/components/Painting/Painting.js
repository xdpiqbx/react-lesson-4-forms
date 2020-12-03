import PropTypes from 'prop-types';
import defaultImage from './default-image.jpg';

export default function Painting(props) {
  // Только с большой буквы!
  const {
    imageUrl = defaultImage,
    title,
    authorUrl,
    authorTag = 'Не известно',
    price,
    quantity,
  } = props; // Для удобства деструктуризирую пропс
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>
        Availability: {quantity > 0 ? quantity : null}{' '}
        {quantity ? 'in stock' : 'out of stock'}
      </p>
      {/* <p>Availability: {quantity < 10 ? 'out of stock' : 'in stock'}</p> */}
      <button type="button">Add to cart</button>
    </div>
  );
}

//Typechecking With PropTypes
// https://reactjs.org/docs/typechecking-with-proptypes.html
// https://www.npmjs.com/package/prop-types
// npm i prop-types
// import PropTypes from 'prop-types'; в компонент где использую

// Описываю типы для пропсов, и при нарушении типов будут Warnings
// По нормальному все пропсы обязательные, по этому .isRequired
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

// Напоминалка!
// Передаю пропсы в компонент
// Описываю propTypes
// Принимаю пропсы из места куда рендерю компонент например <Painting ..... />
