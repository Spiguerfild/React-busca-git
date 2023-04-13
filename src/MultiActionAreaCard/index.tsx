import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Avatar } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{
      width: '40%',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }} />

      <CardContent>
        <Typography variant="button" fontSize={19} display="block" gutterBottom>
          nome variavel
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Github/
        </Button>
      </CardActions>


    </Card>
  );
}
