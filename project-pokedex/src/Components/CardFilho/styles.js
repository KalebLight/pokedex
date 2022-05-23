import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';
export default makeStyles((theme) => ({
  card: {
    // backgroundColor: COLORS.silver,
    width: '210px',
    height: '245px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '10px 10px',
  },
  divImgId: {
    display: 'grid',
    position: 'absolute',
  },
  imgDiv: {
    height: '210px !important',
    width: '210px !important',
    backgroundColor: COLORS.silver,
  },
  idInfo: {
    position: 'absolute',
    bottom: '0',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '2px',
  },
  infoDiv: {
    backgroundColor: '#f1f1f1',
    height: '100%',
    padding: '5px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '210px',
  },
  info: {
    margin: '0 10px 0 10px',
    fontWeight: 'bold',
  },
}));
