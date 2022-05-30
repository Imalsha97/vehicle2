import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Typography } from "@material-ui/core";
import Chart from "./Chart";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={classes.root}>
      <section id="features">
        <div className="container features">
          <div className="u-title" data-aos="fade-up">
            <BsFillBookmarkStarFill color="" size={30} />
            <h2>Fishing Industry in Sri Lanka</h2>
            <p className="u-text-small u-text-dark" style={{fontSize:"15px"}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              molestias distinctio officia libero, id in dolor nobis tenetur
              ipsa aspernatur omnis voluptate, minus ex dicta quidem temporibus
              necessitatibus dolorum aut!
            </p>
          </div>
        </div>
      </section>
      <Container>
        <Row>
          <Col><p style={{fontSize:"15px"}} data-aos="fade-right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, 
                  incidunt asperiores minus repellat odit atque quas eum, itaque excepturi 
                  deleniti necessitatibus unde adipisci 
                  repudiandae error aspernatur corporis, fugit mollitia sapiente.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam iste
                   nesciunt non facilis sit cumque velit voluptate vel excepturi doloribus illum repudiandae
                   corrupti, dolorem tenetur molestias vitae nulla architecto!
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, 
                  incidunt asperiores minus repellat odit atque quas eum, itaque excepturi 
                  deleniti necessitatibus unde adipisci 
                  repudiandae error aspernatur corporis, fugit mollitia sapiente.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam iste
                   nesciunt non facilis sit cumque velit voluptate vel excepturi doloribus illum repudiandae
                   corrupti, dolorem tenetur molestias vitae nulla architecto!
            </p></Col>
          <Col  data-aos="fade-left">
          <Chart/>
          </Col>
        </Row>
        
      </Container>
      {/* <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, 
                  incidunt asperiores minus repellat odit atque quas eum, itaque excepturi 
                  deleniti necessitatibus unde adipisci 
                  repudiandae error aspernatur corporis, fugit mollitia sapiente.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ullam iste
                   nesciunt non facilis sit cumque velit voluptate vel excepturi doloribus illum repudiandae
                   corrupti, dolorem tenetur molestias vitae nulla architecto!
              </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Chart/></Paper>
        </Grid>
        
      </Grid> */}
    </div>
  );
}
