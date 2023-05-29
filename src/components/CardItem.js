import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom"


function CardItem() {
  const [data, setData] = useState([]);
  const[display,setDisplay] = useState(5);
  const[showCard,setShowCard] = useState(false)
  const [active, setActive] = useState(false);
  const[input,seInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const handleChange = (index) => {
    let newActive = active ? null : index;

      setActive(newActive);
  
  };

  const handleButton = (e) => {
    console.log(e.target.innerText)
    if(e.target.innerText === "SHOW MORE"){
      setDisplay(data.length)
      setShowCard(true)
    }else{
      setDisplay(5)
      setShowCard(false)
    }
  
  }

  return (
    <>
      <form>
      <input className="input-box" type="text" placeholder="Search" value={input} onChange={(e) => seInput(e.target.value)} />
    </form>

      { data &&
        data.slice(0,display).filter((ele) => ele.title.toLowerCase().includes(input.toLocaleLowerCase()) || ele.body.toLowerCase().includes(input.toLocaleLowerCase()) ).map((ele) => {
          const { title, body,id } = ele;
          return (
            <Card variant="outlined">
              <CardContent onClick={() => handleChange(id)
              }>
                     <Typography
                 sx={{ fontSize: 14 }}
                 color="text.secondary"
                 gutterBottom
               >
                 {title}
               </Typography>
                {
                  active === id ? 
                  <Typography variant="h5" component="div">
                  {body}
                </Typography>
                 :
                 ""
                 }
               </CardContent>
              <CardActions>
                <Link to={`/card/${id}`}>
                <Button size="small">Detail</Button>
                </Link>
               
              </CardActions>
            </Card>
          );
        })}

        {
          <Button onClick={handleButton}>{
            !showCard ? "Show More" :"Show Less"
          }</Button>
        }
     
    </>
  );
}

export default CardItem;



