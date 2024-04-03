import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import style from "./CardBook.module.css";

export default function CardBook(props) {
  return (
    <Card sx={{ maxWidth: 330 }} className={style.card}>
      <CardMedia
        sx={{ height: 480 }}
        image={props.imagem}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.sinopse}
        </Typography>
        <Typography variant="h5">Autor: {props.autor}</Typography>
      </CardContent>
    </Card>
  );
}
