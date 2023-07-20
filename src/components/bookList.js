import propTypes from 'prop-types';

const BookList = ({ Title, author }) => (
  <div>
    <li>
      <h2>{Title}</h2>
      <p>{author}</p>
    </li>
  </div>
);
BookList.propTypes = {
  Title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};
export default BookList;
