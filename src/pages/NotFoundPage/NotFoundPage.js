import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h2>Page not found.</h2>
      <Link to="/">Go to home page</Link>
    </main>
  );
};

export default NotFoundPage;
