import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';

type MultiActionAreaCardProps = {
  linkGit: string,
  fotoGit: string,
  nomeGit: string,
}

export default function MultiActionAreaCard({ linkGit, fotoGit, nomeGit }: MultiActionAreaCardProps) {
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
          {linkGit}
        </Button>
      </CardActions>


    </Card>
  );
}
