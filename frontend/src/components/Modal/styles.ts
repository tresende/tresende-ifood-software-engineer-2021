import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  detailsFlex: {
    marginBottom: 32,
    display: 'flex',
    justifyContent: 'space-between',
    '& span': {
      fontWeight: 600
    }
  }
}))

export default useStyles
