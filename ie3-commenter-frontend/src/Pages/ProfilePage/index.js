import HeaderComponent from "../../Components/HeaderComponent";
import FooterComponent from "../../Components/FooterComponent";
import ProfileComponent from "../../Components/ProfileComponent";

const ProfilePage = () => {
  return (
    <div>
      <HeaderComponent />
      <hr />

      <ProfileComponent />

      <hr />
      <FooterComponent />
    </div>
  );
};

export default ProfilePage;
