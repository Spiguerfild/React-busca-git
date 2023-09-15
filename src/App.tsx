import { Button, Card, CssBaseline, Paper, TextField, Typography, Grid } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BaseLayout } from './layout/BaseLayout'
import MultiActionAreaCard from './MultiActionAreaCard'
import { Theme } from './ThemeProvider'
import img from '/iconmonstr-github-4.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';



type DataProps = {

  name: string,
  avatar_url: string,
  html_url: string
  public_repos: string
  bio: string
}


function App() {


  const [nome, setNome] = useState<string>('');
  const [data, setData] = useState<DataProps>();


  const handleClick = async () => {

    try {
      const response = await fetch(`https://api.github.com/users/${nome}`)

      const data: DataProps = await response.json();
      setData(data);

    } catch (error) {
      console.log('erro = ' + error)
    }

  }


  return (
    <>
      <Theme>
        <CssBaseline />


        <BaseLayout appBarTitle='SEARCH GIT PROFILE' >

          <Card elevation={10} sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '20px'
          }}>


            <GitHubIcon sx={{ fontSize: 100 }} />
            <Typography margin={0} variant="h3" fontSize={65} textAlign={'center'} display="block" gutterBottom>
              Search Profile
            </Typography>

            <Card
              elevation={0}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                textAlign: 'center',

              }}>
              <TextField id="standard-basic" onChange={(e) => setNome(e.target.value)} label="Git Name" sx={{
                height: '50px',
                width: '90%',
                margin: '15px 0',
              }}
                variant="outlined" />
              <Button variant="outlined" onClick={handleClick} size='small' sx={{ border: '1px solid #c4c4c4', height: '40px', width: '40px', minWidth: '0', }}>
                <SearchIcon fontSize='large' /></Button>

            </Card>
            {data && (
              <MultiActionAreaCard data={data} />
            )}

          </Card>


        </BaseLayout >

      </Theme >
    </>
  )
}

export default App
