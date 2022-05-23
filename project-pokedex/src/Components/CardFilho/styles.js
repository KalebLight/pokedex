import { makeStyles } from '@material-ui/styles';
import { COLORS } from '../../Styles/colors';
export default makeStyles((theme) => ({
  card: {
    // backgroundColor: COLORS.silver,
    width: '210px',
    height: '245px',
    backgroundColor: COLORS.silver,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: '10px 10px',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      backgroundColor: '#A1a1a1 !important',
      cursor: 'pointer',

      // opacity: '0.9',
    },
  },
  divImgId: {
    display: 'grid',
    position: 'absolute',
  },
  imgDiv: {
    height: '200px !important',
    width: '200px !important',
  },
  idInfo: {
    position: 'absolute',
    bottom: '0',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '5px',
    marginBottom: '-7px',
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
