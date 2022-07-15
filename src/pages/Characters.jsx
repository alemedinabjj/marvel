import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import md5 from "md5";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const baseURL = `https://gateway.marvel.com/v1/public/characters/`;
const publicKey = "1aa0ca677f0124d04d5cdd906772e59f";
const privateKey = "d19aeaa1df43a23298c2686c80946e10a93aac1a";
const time = Number(new Date());
const hash = md5(`${time}${privateKey}${publicKey}`);

export function Characters() {
  const { id } = useParams();

  console.log(id);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}${id}?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => {
        setCharacters(res.data.data.results);
        console.log(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const character = characters[0];

  return (
    <main>
      <section className="flex items-center justify-center flex-col min-h-screen">
        <h1 className="text-3xl p-5">Detalhes: {character?.name}</h1>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          className="flex items-start min-h-screen justify-evenly"
        >
          {
            characters.length === 0 ? (<div className="h-[100vh] w-full flex items-center justify-center"><CircularProgress /></div>) :
            <>
              <Card sx={{ maxWidth: 345, m: 2 }} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      character?.thumbnail.path +
                      "." +
                      character?.thumbnail.extension
                    }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <h3>{character?.description}</h3>
                </CardActions>
              </Card>
              <div className="flex flex-col justify-between gap-10 p-5">
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h3>Comics</h3>
                    </Typography>
                    {character?.series.items.map((serie) => (
                      
                      <div key={serie.name}>

                        <h3>{serie.name}</h3>
                        <small>{serie.title}</small>
                      </div>
                    ))}
                  </CardContent>
                </CardActionArea>
              </Card>
              <Link to="/" className="self-end">
                <Button
                  variant="contained"
                  color="primary"
                >
                  Back
                </Button>
              </Link>
              </div>
              
            </>
          }
        </Grid>
      </section>
    </main>
  );
}
