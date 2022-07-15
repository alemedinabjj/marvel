import { useSearchParams } from "react-router-dom";
import md5 from "md5";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";

const publicKey = "1aa0ca677f0124d04d5cdd906772e59f";
const privateKey = "d19aeaa1df43a23298c2686c80946e10a93aac1a";
const time = Number(new Date());
const hash = md5(`${time}${privateKey}${publicKey}`);

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [characters, setCharacters] = useState([]);

  const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${time}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.data.results);
        console.log(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <main>
      <section>
        <h1 className="text-3xl text-center p-5">Resultados para: <span className="text-blue-500">{query}</span> </h1>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          className="flex justify-center"
        >
          {
          
            characters.length === 0 ? (<h1>Character not found</h1>) :
          characters.map((character) => {
            return (
              <Card sx={{ maxWidth: 345, m: 2 }} key={character?.id} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension
                    }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/characters/${character.id}`}>
                    <Button size="small" color="primary">
                      Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </section>
    </main>
  );
}
