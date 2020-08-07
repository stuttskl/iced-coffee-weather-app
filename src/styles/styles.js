// This file contains the basic info for overriding styles from MaterialUI
// Follows the procedure from here: https://material-ui.com/styles/basics/
import { makeStyles } from '@material-ui/core/styles';

export const mainStyles = makeStyles({
  mainHeader: {
    margin: "5px",
    borderRadius: "5px",
    textAlign: "center"
  }
});

// export const searchBarStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));