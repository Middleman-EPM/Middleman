import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: grey,
  },
  typography: {
    fontFamily: ['"Segoe UI"', 'sans-serif'].join(','),
  },
})

export default theme;