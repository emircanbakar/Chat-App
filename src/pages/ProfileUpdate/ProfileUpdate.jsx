import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { useState } from "react";

const ProfileUpdate = () => {
  const [img, setImg] = useState(false);

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={img ? URL.createObjectURL(img) : assets.avatar_icon}
              alt=""
            />
            upload profile image
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="write your bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-pic"
          src={img ? URL.createObjectURL(img) : assets.logo_icon}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
