import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(1)
  },
  title: {
    fontFamily: "'Oleo Script', cursive",
    color: 'rgb(237, 23, 34)',
    userSelect: 'none'
  },
  italian: {
    textShadow: '5px -5px 0 rgb(0, 146, 70), 10px -10px 0 white, 15px -15px 0 rgb(206, 43, 55);'
  }
}))

export default useStyles
