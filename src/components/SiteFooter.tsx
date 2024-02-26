import React, { useState } from "react";
import {Paper, Typography, Grid, IconButton, Box } from "@mui/material";
const COPYRIGHT_TEXT = "2023-2024";//import { COPYRIGHT_TEXT } from "../../../shared/data/dtConstants";

function SiteFooter() { // //const SiteFooter = (): JSX.Element => {//export class SiteFooter extends Component {
  const [displayPopUp, setDisplayPopUp] = useState<string | null>(null);
  return (
      <div className="app-footer-comp-root">
          <Paper elevation={3} >
            <Grid container className="footer-items">
              <Grid item container xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" align="left" gutterBottom>
                  {"Copyright"} {" "}:{COPYRIGHT_TEXT}
                </Typography>
              </Grid>
              <Grid item container xs={4} direction="column" justifyContent="center" alignItems="center">
                <Box className="footer-logo">
                  <img  className="avatar_background" alt="avatar" src="/images/vsrm-logo.png"/>
                </Box>
              </Grid>
              <Grid item container xs={4} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <IconButton title={"Contact us"}> </IconButton>
                {/*// onClick={() => setDisplayPopUp("bb")} <PublicTwoToneIcon /> */}
                {/* {displayPopUp && (<CpContactPopUp title={displayPopUp} onClose={() => setDisplayPopUp("")} />)} */}
              </Grid>
            </Grid>
          </Paper>
        </div>
  )
}
export default SiteFooter