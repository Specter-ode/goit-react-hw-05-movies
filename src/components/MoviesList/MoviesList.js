import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

const MovieList = ({ movies }) => {
  const elements = movies.map(({ id, title, poster_path }) => {
    poster_path
      ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
      : (poster_path = 'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');
    return (
      <li className={s.items} key={id}>
        <Link to={`/movies/${id}`}>
          <img src={poster_path} alt={title} className={s.items__img} width="200" />
          <p className={s.title}>{title}</p>
        </Link>
      </li>
    );
  });

  return <ul className={s.list}>{elements}</ul>;
};

export default MovieList;