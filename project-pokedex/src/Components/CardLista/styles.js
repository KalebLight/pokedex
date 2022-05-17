import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';

export default makeStyles((theme) => ({
  card: {
    backgroundColor: COLORS.themePrimary,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));
