import { Card, CssBaseline, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BaseLayout } from './layout/BaseLayout'
import MultiActionAreaCard from './MultiActionAreaCard'
import { Theme } from './ThemeProvider'
import img from '/iconmonstr-github-4.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
{/*token perfil git meu: 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*/ }
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle='Navsinha' >
          <Card elevation={0} sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>


            <Card elevation={0} sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center'
            }}>
              <GitHubIcon sx={{ fontSize: 60 }} />
              <Typography margin={0} variant="h3" display="block" gutterBottom>
                Search Profile
              </Typography>
            </Card>


            <Card
            elevation={0}
            sx={{
              width: '100%',
              height:'80%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <TextField id="standard-basic" label="Git Name" variant="standard" />

              <MultiActionAreaCard />
            </Card>

          </Card>

        </BaseLayout>

      </Theme>
    </>
  )
}

export default App
