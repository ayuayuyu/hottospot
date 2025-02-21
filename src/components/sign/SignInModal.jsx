import React from "react";
import { Box, Button, Drawer, Modal, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { RankingCard } from "../ranking/RankingCard";
import Sign from "./Sign";


const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));


function SignInModal({ setIsOpen, isOpen ,login}) {
  const drawerBleeding = 56;

  return (
    <div>
      <Root>
        <Global
          styles={{
            ".MuiDrawer-root > .MuiPaper-root": {
              height: `calc(60% - ${drawerBleeding}px)`, ///////////// 高さの変更
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox sx={{  height: "100%", overflow: "auto" }}>
            <Sign login={login}/>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </div>
  );
}

export default SignInModal;
