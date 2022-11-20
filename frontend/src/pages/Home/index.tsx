import { useEffect } from 'react'
import { Container } from '@material-ui/core'
import { Header, Filter, Grid, ItalianMode } from '../../components'
import { bgAudioItalian, bgVideoDefault, bgItalian } from '../../assets'
import { useIFoodTheme, useOrders } from '../../hooks'
import useStyles from './styles'

const Home = () => {
  const { italianMode } = useIFoodTheme()
  const { search } = useOrders()
  const classes = useStyles()
  const mainClasses = [classes.whiteBox]
  if (italianMode) {
    mainClasses.push(classes.italian)
  }

  useEffect(() => {
    search()
  }, [])
  return (
    <>
      {!italianMode && (
        <video className={classes.video} autoPlay muted loop>
          <source src={bgVideoDefault} type="video/mp4" />
        </video>
      )}
      {italianMode && (
        <>
          <video className={classes.video} autoPlay muted loop>
            <source src={bgItalian} type="video/mp4" />
          </video>
          <audio autoPlay loop>
            <source src={bgAudioItalian} />
          </audio>
        </>
      )}
      <div className={classes.container}>
        <Container>
          <div className={classes.flexible}>
            <Header />
            <ItalianMode />
          </div>
          <div className={mainClasses.join(' ')}>
            <Filter />
            <Grid />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
