import { Grid, Container, Button } from '@material-ui/core'
import Editor from '../Editor'
import { useOrders } from '../../hooks'
import { Filter } from '../../types'
import useStyles from './styles'

const FilterComponent = () => {
  const classes = useStyles()
  const { search } = useOrders()
  const filter: Filter = {}

  return (
    <>
      <Container maxWidth={false}>
        <Grid container className={classes.root}>
          <Grid container justifyContent="center" spacing={4}>
            <Editor
              onChange={(value) => {
                filter.startDate = value
              }}
              type="date"
              label="Start Date"
            />
            <Editor
              onChange={(value) => {
                filter.endDate = value
              }}
              type="date"
              label="End Date"
            />
            <Editor
              onChange={(value) => {
                filter.clientName = value
              }}
              label="Client Name"
            />
            <Editor
              onChange={(value) => {
                filter.phone = value
              }}
              type="phone"
              label="Phone"
            />
            <Editor
              onChange={(value) => {
                filter.mail = value
              }}
              label="E-Mail"
            />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.buttonContainer}>
        <Button className={classes.searchButton} onClick={search} variant="contained">
          Search
        </Button>
      </div>
    </>
  )
}

export default FilterComponent
