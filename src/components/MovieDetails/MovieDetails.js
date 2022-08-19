import s from './MovieDetails.module.css';
const MovieDetails = ({ id, title, poster_path, release_date, vote_average, overview, genres }) => {
  const score = (10 * vote_average).toFixed();
  const releaseYear = new Date(release_date).getFullYear();
  const genresList = genres.map(genre => genre.name).join(', ');
  poster_path
    ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
    : (poster_path = 'https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg');
  return (
    <div className={s.item} key={id}>
      <img src={poster_path} alt={title} className={s.img} width="232" />
      <div className={s.description}>
        <h2 className={s.title}>
          {title} ({releaseYear})
        </h2>
        <p>User score: {score ? score : 'Sorry, information not avalaible'}%</p>
        <h3>Overview</h3>
        <p>{overview ? overview : 'Sorry, information not avalaible'}</p>
        <h3>Genres</h3>
        <p>{genresList.length > 0 ? genresList : 'Sorry, information not avalaible'}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
