import { Drawer } from "@mui/material";
import styled from "styled-components";

export const PermanentDrawer = styled(Drawer)(({ theme }) => ({
    width: 250,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 250,
      boxSizing: 'border-box',
      top: '64px',
      height: 'calc(100vh - 64px)',
      borderRight: 'none',
    },
  }));