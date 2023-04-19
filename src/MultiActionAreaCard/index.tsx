import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';


type DataProps = {

  name: string,
  avatar_url: string,
  html_url: string,

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
      justifyContent: 'space-evenly',
      background: 'transparent',
      border: '15px double #a700fd',
      borderRadius: '35px',
      backgroundColor: '#000',
      color: 'white',
    }}>

      <Avatar alt="Remy Sharp" src={data?.avatar_url}
        sx={{ width: 150, height: 150 }} />

      <CardContent>
        <Typography variant="button" fontSize={30} fontWeight='300' display="block" gutterBottom>
          {data?.name}
        </Typography>
      </CardContent>

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
