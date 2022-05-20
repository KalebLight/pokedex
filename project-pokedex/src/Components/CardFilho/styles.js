import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';
export default makeStyles((theme) => ({
  card: {
    // backgroundColor: COLORS.silver,
    width: '215px',
    height: '180px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px 10px',
  },
  imgDiv: {
    backgroundColor: COLORS.silver,
    width: '100%',
    height: '130px',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    height: '109px !important',
    width: '109px !important',
  },
  infoDiv: {
    backgroundColor: 'white',
    height: '40px',
  },
}));
