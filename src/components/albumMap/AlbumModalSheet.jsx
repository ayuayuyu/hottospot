import { Box, Button, Drawer, Modal, Typography } from "@mui/material";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerBleeding = 56;

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

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

function AlbumModalSheet({ setIsOpen, isOpen, setPosition, position }) {
  return (
    <>
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
          //BackdropProps={{ invisible: true }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              {position.name}で撮った写真
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}
          ></StyledBox>
        </SwipeableDrawer>
      </Root>
    </>
  );
}

export default AlbumModalSheet;
