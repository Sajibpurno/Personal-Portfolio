import profileImg from "../assets/image.jpg";
import "./styles/HeroProfile.css";

const HeroProfile = () => {
  return (
    <div className="hero-profile" aria-label="Sajib.Purno profile">
      <div className="hero-profile-ring-outer">
        <div className="hero-profile-ring-spin" aria-hidden />
        <div className="hero-profile-inner">
          <img src={profileImg} alt="Sajib Chanda Purno" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
