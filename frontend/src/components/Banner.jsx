import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Banner = () => {
  return (
    <section className="admin-banner">
      <div>
        <img
          src="https://itdlapp.com/assets/images/avatars/blank-profile.png"
          style={{ height: "64px", borderRadius: "50%" }}
        />
      </div>
      <div className="admin-b1">
        <div style={{ fontSize:'36px', fontWeight:'bold' }}>Reyansh Test</div>
        <div>
            <AccountCircleOutlinedIcon />
            <div style={{ fontSize:'14px' }}>Doctor</div>
        </div>
        <div style={{ fontSize:'14px' }}>Your profile is 83% Complete</div>
        <div><img src="/image.png" style={{ height:'15px', width: '224px' }}/></div>
      </div>
    </section>
  );
};

export default Banner;
