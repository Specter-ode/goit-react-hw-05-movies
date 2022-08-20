import s from './MovieSearchForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
const MovieSearchForm = ({ catchSubmitInfo }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    catchSubmitInfo(query);
    setQuery('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <input className={s.input} name="search" value={query} onChange={handleChange}></input>
      </label>
      <button className={s.btn} type="submit">
        search
      </button>
    </form>
  );
};

MovieSearchForm.propTypes = {
  catchSubmitInfo: PropTypes.func.isRequired,
};
export default MovieSearchForm;
