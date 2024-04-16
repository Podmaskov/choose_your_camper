import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/shared/Button/Button";
// import { Input } from "../../components/Shared/Input/Input";
import { FilterBtn } from "../../components/shared/FilterBtn/FilterBtn";
import { Label, variantMap } from "../../components/shared/Label/Label";
import { Rating } from "src/components/shared/Rating/Rating";
import { Stars } from "src/components/shared/Stars/Stars";
import { Avatar } from "src/components/shared/Avatar/Avatar";
import { css } from "@emotion/react";
// import MapPin from "../../assets/MapPin.svg?react";
import Wind from "../../assets/Wind.svg?react";
import Car from "../../assets/Car.svg?react";
import Car2 from "../../assets/Car_2.svg?react";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const [van, setVan] = useState("");

  return (
    <div>
      <div
        css={css`
          width: 300px;
          padding: 50px;
        `}
      >
        <Avatar name="John" />
        <Stars rating={2.3} />
        <Rating rating={4.5} reviews={100} />
        {Object.keys(variantMap).map((key) => (
          <Label key={key} variant={key} text={key} />
        ))}

        <FilterBtn
          label="AC"
          icon={Wind}
          type="checkbox"
          name="filter"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <FilterBtn
          label="Van"
          value={"van"}
          checked={van === "van"}
          icon={Car}
          name="car"
          type="radio"
          onChange={(e) =>
            console.log(1, e.target.value) || setVan(e.target.value)
          }
        />
        <FilterBtn
          label="Fully Integrated"
          value={"FI"}
          checked={van === "FI"}
          icon={Car2}
          name="car"
          type="radio"
          onChange={(e) => setVan(e.target.value)}
        />
        {/* <Input placeholder="Name" label="Location" wrightIcon icon={MapPin} /> */}
      </div>

      <Button secondary>Search</Button>
      <Link to="/catalog"> Catalog</Link>
      <Link to="/favorites"> Favorites</Link>
    </div>
  );
};

export default Home;
