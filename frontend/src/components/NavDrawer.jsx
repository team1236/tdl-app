import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import { useNavigate } from "react-router-dom";

const NavDrawer = ({ open, setOpen, data }) => {
  const nav = useNavigate("/");
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 150, marginTop: "20%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <img
        src="https://itdlapp.com/assets/images/logo/Icon.png"
        style={{
          width: "40px",
          height: "46px",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
      />
      <List>
        {data?.map((text) => (
          <ListItem
            key={text.title}
            disablePadding
            sx={{ marginBottom: "13px" }}
            onClick={() => nav(text.link)}
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                sx={{ justifyContent: "center", minWidth: "unset" }}
              >
                {(() => {
                  switch (text.title) {
                    case "Dashboard":
                      return <HomeOutlinedIcon sx={{ color: "#ffffff" }} />;
                    case "Appraisal":
                      return (
                        <VerifiedUserOutlinedIcon sx={{ color: "#ffffff" }} />
                      );
                    case "Revalidation":
                      return <LoopOutlinedIcon sx={{ color: "#ffffff" }} />;
                    case "Support Document":
                      return (
                        <DescriptionOutlinedIcon sx={{ color: "#ffffff" }} />
                      );
                    case "Feedback":
                      return <TextsmsOutlinedIcon sx={{ color: "#ffffff" }} />;
                    case "Medico Legal":
                      return (
                        <FilterNoneOutlinedIcon sx={{ color: "#ffffff" }} />
                      );
                    case "Settings":
                      return <SettingsOutlinedIcon sx={{ color: "#ffffff" }} />;
                    default:
                      return null;
                  }
                })()}
              </ListItemIcon>
              <ListItemText
                primary={text.title}
                sx={{ textAlign: "center", marginTop: "8px" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  return (
    <div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: `${false ? "#0c3c15" : "#0057a4"}`,
            color: "whitesmoke",
          },
          "& .css-10hburv-MuiTypography-root": {
            fontSize: "13px",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
