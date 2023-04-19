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
        width="80vw"
        height="75vh"
        justifyContent="space-around"
        alignItems="center"
        padding='10px'
        border='5px solid #a203ff'
        margin='50px'
        marginTop='160px'
        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
        borderRadius={15}
        sx={{ backgroundColor: 'black' }}
      >{children}
      </Box>
    </>
  )
}