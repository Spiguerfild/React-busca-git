import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';


type MultiActionAreaCardProps = {
  nome: string,
  foto: string,
  link: string
}


export default function MultiActionAreaCard({ nome, foto, link }: MultiActionAreaCardProps) {

  const [fotoGit, setFotoGit] = useState('')
  const [linkGit, setLinkGit] = useState('')
  const [nomeGit, setNomeGit] = useState('')

  useEffect(() => {
    // Update the document title using the browser API
    setFotoGit(foto);
    setLinkGit(link)
    setNomeGit(nome)
  });



  return (
    <Card elevation={10} sx={{
      width: '45%',
      height: '90%',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      background: 'transparent',
    }}>

      <Avatar alt="Remy Sharp" src={fotoGit}
        sx={{ width: 150, height: 150 }} />

      <CardContent>
        <Typography variant="button" fontSize={30} fontWeight='300' display="block" gutterBottom>
          {nomeGit}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" sx={{
          fontSize: '19px',
          fontWeight: '500'


        }}>
          <a href={linkGit} style={{
            color: 'red',
            textDecoration: 'none'
          }}>{linkGit}</a>
        </Button>
      </CardActions>


    </Card>
  );
}
