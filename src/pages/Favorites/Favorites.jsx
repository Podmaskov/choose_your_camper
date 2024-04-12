import { Link } from "react-router-dom";

function Favorites() {
  return (
    <div>
      <h1>Favorite page</h1>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
    </div>
  );
}

export default Favorites;
