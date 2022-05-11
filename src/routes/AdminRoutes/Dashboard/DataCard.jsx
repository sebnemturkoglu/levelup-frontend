import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DataCard(props) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 340, minHeight:'140px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary">
          {props.name}
        </Typography>
        <Typography variant="h4" component="div" color={'primary'}>
        {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}
