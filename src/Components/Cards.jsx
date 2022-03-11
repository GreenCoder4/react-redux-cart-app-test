import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://images.olx.com.pk/thumbnails/232075415-400x300.webp"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Samsung A72
      </Typography>
      <Typography variant="body2" color="text.secondary">
      5 month warranty all ok complete box, black color. warranty start from, 24/07/21.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant='contained' >Add To cart</Button>
      
    </CardActions>
  </Card>
  )
}

export default Cards