import { TextField, Grid } from '@material-ui/core'

type EditorProps = {
  label: string
  type?: 'text' | 'date' | 'phone'
  onChange: (value: string) => void
}

const Editor = ({ label, onChange, type = 'text' }: EditorProps) => {
  const handleChange = (value: string) => onChange(value)

  const maxLength = {
    phone: 14,
    text: 100,
    date: 8
  }
  return (
    <Grid item xs={12} md>
      <TextField
        aria-label="name"
        fullWidth
        onChange={(e) => handleChange(e.target.value)}
        label={label}
        type={type || 'text'}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        inputProps={{ maxLength: maxLength[type] }}
      />
    </Grid>
  )
}

export default Editor
