import { AppBar, Box, Toolbar, Typography } from "@mui/material";
type BaseLayoutProps = {
  children: React.ReactNode,
  appBarTitle: string,
}
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h5'>{appBarTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex"
      width = "75vw"
      height= "50vh"
        padding='50px'
        border='1px solid #4a126b'
        margin='50px'
        marginTop='160px'
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      >{children}
      </Box>
    </>
  )
}