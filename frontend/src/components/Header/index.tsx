import { Typography } from '@material-ui/core'
import { useIFoodTheme } from '../../hooks'
import useStyles from './styles'

const Header = () => {
  const { italianMode } = useIFoodTheme()
  const classes = useStyles()
  const titleClasses = [classes.title]
  if (italianMode) {
    titleClasses.push(classes.italian)
  }
  return (
    <header className={classes.header}>
      <Typography className={titleClasses.join(' ')} variant="h2" component="h2">
        Order List
      </Typography>
    </header>
  )
}

export default Header
