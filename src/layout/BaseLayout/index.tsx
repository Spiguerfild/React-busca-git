import { AppBar, Box, Card, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

type BaseLayoutProps = {
  children: React.ReactNode,
  appBarTitle: string,
}
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ gap: '10px' }}>
          <GitHubIcon sx={{ fontSize: 80 }} />
          <Typography variant='h5'>   {appBarTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{
        display: "flex",
        width: "100%",
        // height: "75vh",
        justifyContent: "space-around",
        alignItems: "center",
        padding: '10px',
        // border: '5px solid #fff',
        backgroundColor: '#38454c',
        margin: '50px',
        marginTop: '200px'
      }}
      // boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      // borderRadius={15}

      >{children}
      </Card>
    </>
  )
}