import  React from 'react';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";

export default function ArticleCard({key,name,title}) {
    return (
      <Card className='ArticleCard' key={key} variant="outlined" sx={{ minWidth: 275 }}>
          <Link style={{ textDecoration: 'none',color: 'inherit'}}to={`/article/`+name}><h4>{title}</h4></Link>
      </Card>
    );
  }