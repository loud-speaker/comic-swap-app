
// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import styles from './ComicResult.css';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     objectFit: 'cover',
//   },
// };


// export default class ComicResult extends PureComponent {
//   static propTypes = {
//     comic: PropTypes.object.isRequired
//   };

//   render() {
//     const { comic, classes } = this.props;
//     return (
//       <Fragment>


//       <Card className={classes.card}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             className={classes.media}
//             height="140"
//             image={comic.image}
//             title={comic.name}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="headline" component="h2">
//               {comic.name}
//             </Typography>
//             <Typography component="p">
//               {comic.coverDate}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//         <Button size="small" color="primary">
//           Add
//         </Button>
//         <Button size="small" color="primary">
//           Wish
//         </Button>
//       </CardActions>
      
      
//       </Card>
//       <div className={styles.comic}>
//         <img src={comic.image}/>
//         <p>Title: {comic.name}</p>
//         <p>Cover Date: {comic.coverDate}</p>
//         <p></p>
//       </div>
//       </Fragment>
//     );
//   }
// }
