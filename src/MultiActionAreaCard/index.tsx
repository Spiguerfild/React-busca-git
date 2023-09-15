import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import textReduce from '../helpers/textReduce'

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
      width: '80%',
      padding: '15px',
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      background: 'transparent',
      borderRadius: '5px',

      color: 'white',
      textTransform: 'lowercase',
    }}>

      {data && data.avatar_url && (
        < Avatar alt="Remy Sharp" src={data?.avatar_url}
          sx={{ width: 100, height: 100 }} />
      )}
      <CardContent>
        <Typography variant="button" fontSize={20} fontWeight='300' display="block" gutterBottom sx={{ padding: '0', color: 'black' }}>
          {data?.name}
        </Typography>
      </CardContent>

      <Typography variant="button" fontSize={15} fontWeight='300' display="block" gutterBottom sx={{ color: 'black' }}>
        {textReduce(data?.bio)}
      </Typography>

      <Typography variant="button" fontSize={15} fontWeight='300' display="block" gutterBottom sx={{ color: 'black' }}>
        {data?.public_repos == undefined ? '' : `Repositórios: ${+ data?.public_repos} `}
      </Typography>

      <CardActions>
        <Button size="small" variant='outlined' sx={{
          fontSize: '18px',
          fontWeight: '500'
        }}>
          <a href={data?.html_url} style={{
            color: '#000',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '15px'
          }}>{data?.html_url}</a>
        </Button>

      </CardActions>
    </Card>
  );
}
