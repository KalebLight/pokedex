import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';

export default makeStyles((theme) => ({
  divNavbar: {
    padding: '10px 10px !important',
  },
  navbar: {
    backgroundColor: COLORS.themePrimary,
    borderRadius: 5,
  },
}));
