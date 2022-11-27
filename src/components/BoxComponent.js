import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function BoxComponent({data}) {
  const findMaleOrFemale = (gender)=>{
    const filterdArr = data.filter((item)=>item.gender === gender)
    return filterdArr.length
  }

  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' ,backgroundColor:'white' ,width:"100%"}}>
      <Typography  style={{color:"red"}}>Male:{findMaleOrFemale('male')}</Typography>
      <Typography style={{color:"red"}}>Female:{findMaleOrFemale('female')}</Typography>
    </Box>
  );
}