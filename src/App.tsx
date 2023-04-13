import { CssBaseline, Paper, TextField } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BaseLayout } from './layout/BaseLayout'
import MultiActionAreaCard from './MultiActionAreaCard'
import { Theme } from './ThemeProvider'

import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle='Navsinha' >

          <TextField id="standard-basic" label="Standard" variant="standard" />

          <MultiActionAreaCard />

        </BaseLayout>

      </Theme>
    </>
  )
}

export default App
