import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';
export default makeStyles((theme) => ({
  card: {
    // backgroundColor: COLORS.silver,
    width: '220px',
    height: '180px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px 10px',
  },
  infoDiv: {
    backgroundColor: 'white',
    height: '50px',
  },
  imgCard: {
    height: '109px !important',
    width: '109px !important',
    backgroundColor: 'white',
  },
}));
