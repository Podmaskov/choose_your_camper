import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div>
      <h1 css={{ backgroundColor: "hotpink" }}>Caravans page</h1>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorite</Link>
    </div>
  );
};

export default Catalog;
