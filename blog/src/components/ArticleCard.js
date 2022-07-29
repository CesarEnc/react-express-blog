import  React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';

export default function ArticleCard({article}) {
    return (
      <Card className='ArticleCard' key={article.name} variant="outlined" sx={{ minWidth: 275, borderBottom: 3, borderRadius: '16px'}}>
        <CardContent>
          <Link style={{ textDecoration: 'none',color: 'inherit'}}to={`/article/`+article.name}><h4>{article.title}</h4></Link>
          <Typography sx={{ fontSize: 14 }} color="text.white" gutterBottom>
          {article.content[0].substring(0,150)}
        </Typography>
          </CardContent>
      </Card>
    );
  }