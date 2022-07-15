import axios from "axios";
import md5 from "md5";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const baseURL = "http://gateway.marvel.com/v1/public/characters?";
const publicKey = "1aa0ca677f0124d04d5cdd906772e59f";
const privateKey = "d19aeaa1df43a23298c2686c80946e10a93aac1a";

const time = Number(new Date());
const hash = md5(`${time}${privateKey}${publicKey}`);
const url = `${baseURL}ts=${time}&apikey=${publicKey}&hash=${hash}`;

export function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const res = await axios.get(`${url}&offset=${offset}`, {
        params: {
          offset: offset,
        },
      });

      setCharacters([...characters, ...res.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);


  return (
    <main>
      <section className="w-full flex items-center justify-center gap-3 flex-col">
        <h1 className="text-3xl bold text-slate-900 p-5">Marvel's Character</h1>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          className="flex justify-center"
        >
          {characters.length === 0 ? (
            <div className="h-[100vh]">
              <CircularProgress />{" "}
            </div>
          ) : (
            characters.map((character) => {
              return (
                <Card sx={{ maxWidth: 345, m: 2 }} key={character.id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                      className="hover:opacity-75 transition duration-500 hover:shadow-lg hover:brightness-105"
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
            })
          )}
        </Grid>
        <div className="p-5">
          <Button variant="contained" onClick={handleMore}>
            More
          </Button>
        </div>
      </section>
    </main>
  );
}
