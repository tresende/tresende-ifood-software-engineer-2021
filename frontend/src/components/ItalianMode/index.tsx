import { useIFoodTheme } from '../../hooks'
import useStyles from './styles'

const ItalianMode = () => {
  const { changeTheme } = useIFoodTheme()
  const classes = useStyles()
  return (
    <span className={classes.title} onClick={changeTheme}>
      Italian Mode
    </span>
  )
}

export default ItalianMode
