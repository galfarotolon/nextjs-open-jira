import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";
import React from "react";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log("closing")}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, idx) => {
            return (
              <ListItemButton key={item}>
                <ListItemIcon>
                  {idx % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            );
          })}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, idx) => {
            return (
              <ListItemButton key={item}>
                <ListItemIcon>
                  {idx % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
