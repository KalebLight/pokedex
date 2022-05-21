import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';
export default makeStyles((theme) => ({
  card: {
    // backgroundColor: COLORS.silver,
    width: '210px',
    height: '270px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '10px 10px',
  },
  imgDiv: {
    backgroundColor: COLORS.silver,
    height: '210px !important',
    width: '210px !important',
  },
  img: {},
  infoDiv: {
    backgroundColor: '#f1f1f1',
    height: '60px',
    padding: '0 0 0 10px',
    display: 'flex',
    justifyContent: 'center',
  },
  info: {
    margin: '0 10px 0 10px',
  },
}));
