import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';

export default makeStyles((theme) => ({
  icon: {
    height: 30,
    marginLeft: -5,
    marginRight: 15,
  },
  navbar: {
    backgroundColor: COLORS.themePrimary,
    borderRadius: 5,
    marginBottom: 30,
    width: '98vw !important',
  },
}));
