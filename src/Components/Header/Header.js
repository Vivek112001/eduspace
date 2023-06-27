import React from 'react';
import { useStyles } from './Style';
import { AppBar, Avatar, Toolbar, Typography,Menu,MenuItem } from '@mui/material';
import { Add, Apps } from '@mui/icons-material';
import CreateClass from '../CreateClass/CreateClass';
import { useLocalContext } from '../../context/createclasscontext';
import JoinClass from '../JoinClass/JoinClass';

export default function Header(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const { setCreateClassDialog, setJoinClassDialog, loggedInUser, logout } = useLocalContext();
  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  }
  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  }
  return (
    <>
      <div >
        <AppBar style={{ flexGrow: 1, }} position="static">
          <Toolbar style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {props.children}
              <Typography variant="h6" className={classes.title} style={{ fontSize: "1.38rem", color: "#fff", marginLeft: "5px", cursor: "pointer", }}>
                Eduspace
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
              <Add onClick={handleClick} style={{ marginRight: "15px", color: "#fff", cursor: "pointer" }} />
              <Apps style={{ marginRight: "15px", color: "#fff", cursor: "pointer" }} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleJoin}>Join Class</MenuItem>
                <MenuItem onClick={handleCreate}>Create Class</MenuItem>
              </Menu>
              <div>
                <Avatar src={loggedInUser?.photoURL} onClick={() => logout()} style={{ marginRight: "15px", color: "#fff", cursor: "pointer" }} />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <CreateClass />
        <JoinClass/>
      </div>
    </>
  )
}

