import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/catalog"> Catalog</Link>
      <Link to="/favorites"> Favorites</Link>
    </div>
  );
};

export default Home;
