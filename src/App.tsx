import { Button, Card, CssBaseline, Paper, TextField, Typography } from '@mui/material'
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

        <BaseLayout appBarTitle='Navsinha' >
          <Card elevation={10} sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: '50px'
          }}>



            <Card
              elevation={0}
              sx={{
                width: '100%',
                height: '80%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                textAlign: 'center',

              }}>

              <Card
                elevation={0}
                sx={{

                  display: 'flex',
                  padding: '20px',
                  height: '90%',
                  justifyContent: 'space-between',
                  alignItems: 'stretch',
                  flexDirection: 'column',

                }}>


                <Card elevation={0} sx={{
                  display: 'flex',
                  gap: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',

                }}>
                  <GitHubIcon sx={{ fontSize: 80 }} />
                  <Typography margin={0} variant="h3" fontSize={40} textAlign={'center'} display="block" gutterBottom>
                    Search Profile
                  </Typography>
                </Card>



                <Card elevation={0}
                  sx={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',

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

              </Card>{/*Button e text field*/}

              <MultiActionAreaCard data={data} />

            </Card>

          </Card>

        </BaseLayout>

      </Theme>
    </>
  )
}

export default App
