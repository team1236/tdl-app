import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LinearProgress from "@mui/material/LinearProgress";

const Banner = ({
  name,
  role,
  backGroundClr,
  isProgressBar,
  progressBarPercentage,
  progressBarclr,
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ backgroundColor: backGroundClr }} className="user-profile">
      <div className="user-profile-sub">
        <div style={{ cursor: "pointer" }}>
          <img
            height={64}
            className="avtar"
            src="https://itdlapp.com/assets/images/avatars/blank-profile.png"
          />
        </div>
        <div className="user-parent">
          <div className="user-name">{name}</div>
          <div className="user-role">
            <AccountCircleRoundedIcon />
            <div>{role}</div>
          </div>
          {isProgressBar && (
            <>
              <div>your profile is {progressBarPercentage}% complete</div>
              <LinearProgress
                variant="determinate"
                value={progressBarPercentage}
                sx={{
                  marginTop: "5px",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: progressBarclr,
                  },
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
