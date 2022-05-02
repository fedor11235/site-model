import { Stack, Button, IconButton, ButtonGroup } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
export const MuiButton = () => {
    return(
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outline">Outline</Button>
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
            </Stack>
        </div>
    )
}