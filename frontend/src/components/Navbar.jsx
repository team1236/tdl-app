import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DraftsIcon from "@mui/icons-material/Drafts";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { handleFullScreen } from "../utils/getFullScreen";
import NavDrawer from "./NavDrawer";
import {
  view_permission,
  view_permission_admin,
} from "../api/query/doctor-dashboard";
import { grapQLAPI } from "../api/doctor-dashboard";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showBell, setShowBell] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [openDrawer, setOpen] = React.useState(false);
  const [data, setData] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchData_view_permission = async () => {
    try {
      const query = false ? view_permission_admin.query : view_permission.query;
      const res = await grapQLAPI({ query });
      setData(res?.data?.view_permission?.permissions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData_view_permission();
  }, [view_permission]);

  return (
    <nav className="navbar">
      {showSearch ? (
        <>
          <div>
            <MenuIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setOpen(!openDrawer)}
            />
            <NavDrawer setOpen={setOpen} open={openDrawer} data={data} />
          </div>
          <section className="nav-sub-2">
            <div className="nav-icons">
              <div onClick={handleFullScreen}>
                <img
                  src="/arrow.svg"
                  style={{ height: "24px" }}
                  className="img-hover"
                />
              </div>
              <div onClick={() => setShowSearch(!showSearch)}>
                <img
                  src="/search.svg"
                  style={{ height: "24px" }}
                  className="img-hover"
                />
              </div>
              <div>
                <img
                  src="/msg.svg"
                  style={{ height: "24px" }}
                  className="img-hover"
                />
              </div>
              <div onClick={() => setShowBell(!showBell)}>
                <img
                  src="/bell.svg"
                  style={{ height: "24px" }}
                  className="img-hover"
                />
              </div>
            </div>
            <div
              style={{ display: "flex", gap: "5px", cursor: "pointer" }}
              onClick={handleClick}
            >
              <img src="/admin-online.png" style={{ height: "24px" }} />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
              >
                <div className="admin-name-nav">Reyansh Test</div>
                <div className="admin-name-nav-sub">Doctor</div>
              </div>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="admin-menu-item">Signed in as</div>
              <div
                className="admin-menu-item"
                style={{
                  paddingTop: "5px",
                  fontWeight: "bold",
                  paddingBottom: "15px",
                }}
              >
                reyansh@gmail.com
              </div>
              <Divider />
              <MenuItem
                onClick={handleClose}
                sx={{
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <AccountCircleIcon />
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ paddingBottom: "15px", display: "flex", gap: "15px" }}
              >
                <SettingsIcon />
                Settings
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleClose}
                sx={{
                  display: "flex",
                  gap: "15px",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <LogoutIcon />
                Sign out
              </MenuItem>
            </Menu>
            {showBell && (
              <section className="admin-bell-self">
                <div className="admin-bell-b1">
                  <div className="admin-bell-h1">Notifications</div>
                  <DraftsIcon />
                </div>
                <div className="admin-bell-b2">
                  <div className="admin-bell-b2-icon">
                    <NotificationsNoneOutlinedIcon />
                  </div>
                  <div className="admin-bell-b2-h1">No notifications</div>
                  <div className="admin-bell-b2-h2">
                    When you have notifications, they will
                  </div>
                  <div
                    className="admin-bell-b2-h2"
                    style={{ marginTop: "5px" }}
                  >
                    appear here.
                  </div>
                </div>
              </section>
            )}
          </section>
        </>
      ) : (
        <>
          <img src="/search.svg" style={{ height: "24px" }} />
          <input
            style={{
              width: "100%",
              marginLeft: "25px",
              marginRight: "25px",
              border: "none",
              outline: "none",
              height: "40px",
              fontSize: "16px",
            }}
            placeholder="Search for a page"
          />
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setShowSearch(!showSearch)}
          />
        </>
      )}
    </nav>
  );
};

export default Navbar;
