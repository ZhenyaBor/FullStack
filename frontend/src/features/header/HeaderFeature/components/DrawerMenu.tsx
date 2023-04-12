import {
  Stack,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { palette } from "theme";
import { AiTwotoneHome } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

type Props = {
  open: boolean;
  onClose: () => void;
};

const menuItem = [
  { to: "/", menu: "Головна", icon: <AiTwotoneHome /> },
  { to: "/price", menu: "Вартість", icon: <IoIosPricetags /> },
  { to: "/contacts", menu: "Контакти", icon: <RiContactsFill /> },
  { to: "/services", menu: "Послуги", icon: <MdMiscellaneousServices /> },
  { to: "/about", menu: "Про нас", icon: <FcAbout /> },
];

export const DrawerMenu = ({ open, onClose }: Props) => (
  <Drawer
    sx={{
      width: "100%",
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        background: palette.grey[50],
        width: "240px",
      },
    }}
    onClose={onClose}
    anchor="right"
    open={open}>
    <Stack direction="column" alignItems="center" sx={{ mt: 2 }}>
      {menuItem.map(({ to, menu, icon }, index) => (
        <Stack key={index} sx={{ width: "100%" }}>
          <ListItem sx={{ display: "block", alignSelf: "center", justifySelf: "center" }}>
            <ListItemButton component={Link} to={to} onClick={onClose}>
              <ListItemIcon sx={{ minWidth: "30px", color: palette.grey[700] }}>
                {icon}
              </ListItemIcon>
              <Typography variant="subtitle1" fontWeight={700}>
                {menu}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Divider />
        </Stack>
      ))}
    </Stack>
  </Drawer>
);
