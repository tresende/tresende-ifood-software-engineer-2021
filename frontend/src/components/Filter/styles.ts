import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4em'
  },
  searchButton: {
    [theme.breakpoints.down('sm')]: {
      width: '88%'
    },
    [theme.breakpoints.up('md')]: {
      width: '128px'
    },
    [theme.breakpoints.down('lg')]: {
      width: '200px'
    }
  }
}))

export default useStyles
