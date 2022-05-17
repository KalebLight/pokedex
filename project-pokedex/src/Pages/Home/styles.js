import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';

export default makeStyles((theme) => ({
  divPai: {
    padding: '10px !important',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  app: {
    backgroundColor: COLORS.black,
    height: '100% !important',
  },
  btn: {
    fontSize: 20,
    backgroundColor: COLORS.themeSecondary,
    height: '40px',
  },
}));
