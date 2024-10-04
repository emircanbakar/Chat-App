import "./LeftSideBar.css";
import assets from "../../assets/assets";

const LeftSideBar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="logo" className="logo" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p>Edit profile</p>
              <hr/>
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search Here..." />
        </div>
      </div>
      <div className="ls-list">
        {Array(12)
          .fill("")
          .map((item, index) => (
            <div className="friends" key={index}>
              <img src={assets.profile_img} alt="" />
              <div>
                <p>Emircan Bakar</p>
                <span>hello, whats up?</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
