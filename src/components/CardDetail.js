import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function CardDetail(){

const[data,setData] =useState([])
const{id} = useParams()

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setData(data.find(ele => ele.id === Number(id))));
  });

    return(
        <>
         <Card variant="outlined">
              <CardContent>
                     <Typography
                 sx={{ fontSize: 14 }}
                 color="text.secondary"
                 gutterBottom
               >
                 {data?.title}
               </Typography>
                
                  <Typography variant="h5" component="div">
                  {data?.body}
                </Typography>
                 
                 
               </CardContent>
              <CardActions>
               
              </CardActions>
            </Card>
        </>
    )
}

export default CardDetail;