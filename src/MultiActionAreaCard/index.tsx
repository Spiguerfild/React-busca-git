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
    console.log("mudou foto")
    setLinkGit(link)
    setNomeGit(nome)
  });



  return (
    <Card elevation={0} sx={{
      width: '50%',
      height: '90%',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>

      <Avatar alt="Remy Sharp" src={fotoGit}
        sx={{ width: 120, height: 120 }} />

      <CardContent>
        <Typography variant="button" fontSize={30} fontWeight='300' display="block" gutterBottom>
          {nomeGit}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          <a href={linkGit}>{linkGit}</a>
        </Button>
      </CardActions>


    </Card>
  );
}
