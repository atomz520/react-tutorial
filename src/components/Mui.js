import React, { useState } from 'react'
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'


export const Mui = () => {
  const [formats, setFormats] = useState()
  console.log({
    formats
  })
  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats)
  }
  return (
    <>
      <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label='send' color='success'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange} size='small' color='success'>
          <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
          <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
          <ToggleButton value='underline'><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  )
}

export default Mui