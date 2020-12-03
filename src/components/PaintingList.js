import PropTypes from 'prop-types';

import Painting from './Painting/Painting';

export default function PaintingList({ paintingList }) {
  return (
    <ul>
      {paintingList.map(painting => (
        <li key={painting.id}>
          {' '}
          {/* key нужен тут, на самом верхнем елементе  */}
          <Painting
            // key={painting.id} // При рендере однотипных елементов нужен key для каждого
            imageUrl={painting.url}
            title={painting.title}
            authorUrl={painting.author.url}
            authorTag={painting.author.tag}
            price={painting.price}
            quantity={painting.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  // paintingList: PropTypes.array.isRequired // этого мало
  // Только свойство id на прямую относится к PaintingList
  // для Painting PropTypes уже описаны
  paintingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
