import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box,Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";


const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{color: colors.grey[100]}}
      onClick={() =>{
        setSelected(title);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to}/>
    </MenuItem>
  );
}

const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("dashboard");
  console.log(colors)
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner":{
          background:`${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        }
      }}
    >
      <ProSidebar collapsed={false}>
        <Menu iconShape="square">
          <MenuItem
            style={{
              width:"300px",
              margin: "10px 0 15px 0",
              color: colors.grey[100],
            }}
          >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            ml="15px"
          >
            <Typography variant="h3" color={colors.grey[100]}>
              ADMINIS
            </Typography>
          </Box>
          <Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt ="logo"
                width="100px"
                height="100px"
                src={`../../assets/signal.png`}
                style={{ cursor: "pointer", borderRadius:"50%"}}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{
                  m: "0px 0 0 0"
                }}
              >
                Admin Dashboard
              </Typography>
            </Box>
          </Box>

            <Box paddingLeft={"10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Users"
              to="/users"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Add a Team Member"
              to="/add/team"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Trending words"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sentiment Analysis"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Most Active users"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar