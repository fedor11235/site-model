import { Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import { useState } from "react"

export const MuiButton = () => {
    const [formats, setFormats] = useState([])
    console.log(
        formats
    )
    const handleFormatChange = (_event, updateFormats) => {
        setFormats(updateFormats)
    }
    return(
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outline</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">primary</Button>
                    <Button variant="contained" color="secondary">secondary</Button>
                    <Button variant="contained" color="error">error</Button>
                    <Button variant="contained" color="warning">warning</Button>
                    <Button variant="contained" color="info">info</Button>
                    <Button variant="contained" color="success">success</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    {/* does not work */}
                    <Button variant="contained" size="small">small</Button>
                    <Button variant="contained" size="medium">medium</Button>
                    <Button variant="contained" size="large">large</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" startIcon={<SendIcon/>} disableElevation>send</Button>
                    <Button variant="contained" endIcon={<SendIcon/>} disableRipple>send</Button>

                    <IconButton aria-label="send" size="small" color="success">
                        <SendIcon/>
                    </IconButton>
                </Stack>

                <Stack spacing={2} direction="row">
                    <ButtonGroup 
                        variant="text" 
                        orientation="vertical" 
                        size="small" 
                        color="secondary"
                        aria-label="aligment button group"
                    >
                        <Button>left</Button>
                        <Button>center</Button>
                        <Button>right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack spacing={2} direction="row">
                    <ToggleButtonGroup 
                        variant={formats}
                        onChange={handleFormatChange}
                        orientation="vertical" 
                        size="small" 
                        color="success"
                        aria-label="text formating"
                        exclusive
                    >
                        <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
                        <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon/></ToggleButton>
                        <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon/></ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    )
}