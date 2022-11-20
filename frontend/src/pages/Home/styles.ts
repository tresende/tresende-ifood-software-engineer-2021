import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  flexible: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  video: {
    position: 'fixed',
    minWidth: '100%',
    minHeight: '100%'
  },
  container: {
    overflow: 'auto',
    position: 'fixed',
    top: 0,
    backgroundImage:
      'repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%)',
    backgroundSize: '3px 3px',
    width: '100%',
    height: '100vh'
  },
  whiteBox: {
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: '2em 1em'
  },
  italian: {
    boxShadow: '5px -5px 0 rgb(0, 146, 70), 10px -10px 0 white, 15px -15px 0 rgb(206, 43, 55);'
  }
}))

export default useStyles
