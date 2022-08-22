import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movieApi';
import Spinner from '../Spinner/Spinner';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      setLoading(true);
      try {
        const data = await getMovieReviews(movieId);
        console.log('data: ', data);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieById();
  }, [movieId]);
  const elements = reviews.map(({ id, author, content }) => {
    return (
      <li className={s.items} key={id}>
        <h3>Author: {author}</h3>
        <p className={s.name}>{content}</p>
      </li>
    );
  });
  return (
    <>
      {loading && <Spinner />}
      {error && <p>Movies not found, try again</p>}
      {reviews.length > 0 ? <ul className={s.list}>{elements}</ul> : <p>We don't have any reviews for this movie</p>}
    </>
  );
};

export default ReviewsPage;
