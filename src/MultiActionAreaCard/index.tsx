import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';


type DataProps = {

  name: string,
  avatar_url: string,
  html_url: string,
  public_repos: string,
  bio: string
}

type Request = {

  data: DataProps | undefined

}

export default function MultiActionAreaCard({ data }: Request) {




  return (
    <Card elevation={10} sx={{
      width: '45%',
      height: '100%',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      background: 'transparent',
      border: '15px double #a700fd',
      borderRadius: '35px',
      backgroundColor: '#000',
      color: 'white',
      textTransform: 'lowercase',
    }}>

      <Avatar alt="Remy Sharp" src={data?.avatar_url}
        sx={{ width: 150, height: 150 }} />

      <CardContent>
        <Typography variant="button" fontSize={30} fontWeight='300' display="block" gutterBottom>
          {data?.name}
        </Typography>
      </CardContent>

      <Typography variant="button" fontSize={20} fontWeight='300' display="block" gutterBottom>
        bio: {data?.bio}
      </Typography>

      <Typography variant="button" fontSize={20} fontWeight='300' display="block" gutterBottom>
        {data?.public_repos == undefined ? <h2>Perfil não Encontrado </h2> : `Repositórios: ${+ data?.public_repos} `}
      </Typography>

      <CardActions>
        <Button size="small" color="primary" sx={{
          fontSize: '18px',
          fontWeight: '500'


        }}>
          <a href={data?.html_url} style={{
            color: '#a700fd',
            textDecoration: 'none',
            fontWeight: '500'
          }}>{data?.html_url}</a>
        </Button>

      </CardActions>
    </Card>
  );
}
