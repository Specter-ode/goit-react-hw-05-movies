import s from './MovieDetails.module.css';

const MovieDetails = () => {
  return (
    <main>
      <button className={s.btn} type="button">
        Go Back
      </button>
      <h2>MovieDetailsPage</h2>

      {/* <li className={s.items} key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          class={s.items__img}
          width="200"
        />
        <p className={s.title}>{title}</p>
      </li> */}
    </main>
  );
};

export default MovieDetails;
