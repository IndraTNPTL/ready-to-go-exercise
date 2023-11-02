import spaceShuffle from "../assets/space-shuttle-solid 1.png";

const Header = ({ title }) => {
  return (
    <header>
      <img id="logo" src={spaceShuffle} alt="space shuffle" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
