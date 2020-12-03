import PropTypes from 'prop-types';

function Section(props) {
  const { title, children } = props;
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children} {/* тут лежит <PaintingList paintingList={paintingsData} /> */}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
