import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, formatMs } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './components/Posts/PostList';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    
    <Container>
       <BrowserRouter>
     
     <Route path='/' component={HomeScreen} exact></Route>
           <Route path='/upload' component={UploadScreen} exact></Route>
           </BrowserRouter>


    </Container>
    






    
    // <Container maxWidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
    //     <img className={classes.image} src={memories} alt="icon" height="60" />
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    //         <Grid item xs={12} sm={8}>
    //           <Posts setCurrentId={setCurrentId} />
    //         </Grid>
    //         <Grid item xs={12} sm={4}>
    //           <Form currentId={currentId} setCurrentId={setCurrentId} />
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
};

export default App;
