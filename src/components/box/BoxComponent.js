import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './boxcomponent.css'

export default function BoxComponent({data}) {
  const findMaleOrFemale = (gender)=>{
    const filterdArr = data.filter((item)=>item.gender === gender)
    return filterdArr.length
  }

  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' ,backgroundColor:'white' ,width:"100%"}}>
      <Typography  className='box'>Total Male : {findMaleOrFemale('male')}</Typography>
      <Typography className="box">Total Female : {findMaleOrFemale('female')}</Typography>
    </Box>
  );
}