import { Grid } from '@mui/material'
import React from 'react'
//17.02.24 Ogleden sonra [14:36-] oturumu kayıt 4:52:46
//Layout
//Ant design: Grid: 24e böler
//Material UI: Grid: 12ye böler breakpoints: xs, sm, md, lg, xl
//mui.com/material-ui/react-grid
//mui.com/material-ui/customization/breakpoints/#default-breakpoints
//css-tricks.com/snippets/css/a-guide-to-flexbox/
function GridSample() {
  // return (<div>GridSample</div>)
  return (<>
    <Grid container> {/* spacing={2} columnSpacing={{xs:1,sm:2,md:3}}*/}
      <Grid item xs={6} sm={3}><div style={{borderStyle:'solid'}}>BOX-1</div></Grid>
      <Grid item xs={6} sm={3}>BOX-2</Grid>
      <Grid item xs={6} sm={3}>BOX-3</Grid>
      <Grid item xs={6} sm={3}>BOX-4</Grid>
    </Grid>
  </>
  )
}

export default GridSample