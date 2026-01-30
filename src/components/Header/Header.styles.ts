import { SxProps, Theme } from "@mui/material";

export const headerContainer: SxProps<Theme> = {
  width: "100%",
  px: 4,
  py: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid #eaeaea",
};

export const navLinks: SxProps<Theme> = {
  display: "flex",
  gap: 1,
  alignItems: "center",
};
