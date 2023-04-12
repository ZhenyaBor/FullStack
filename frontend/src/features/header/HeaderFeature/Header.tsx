import { AppBar, Stack, Avatar } from "@mui/material";
import { palette } from "theme";
import { NavLickCustom } from "./components";
import { useLocation } from "react-router-dom";

const menuHeader = [
  { to: "/", menu: "Home" },
  { to: "/addUser", menu: "Creation User" },
];

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          width: "100%",
          height: 68,
          padding: { md: "14px 20px 14px 20px", xs: "14px 20px 14px 20px" },
          backgroundColor: palette.white.main,
          borderBottom: `1px solid ${palette.grey[100]}`,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "100%",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            sx={{ display: { xs: "none", sm750: "flex" } }}
          >
            {menuHeader.map(({ to, menu }, index) => (
              <Stack key={index} sx={{ position: "relative" }}>
                <NavLickCustom to={to} isSelected={pathname === to}>
                  {menu}
                </NavLickCustom>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </AppBar>
    </>
  );
};
