import { Stack, TextField, InputAdornment } from "@mui/material"
// import SendIcon from "@mui/icons-material/Send"
// import FormatBoldIcon from "@mui/icons-material/FormatBold"
// import FormatItalicIcon from "@mui/icons-material/FormatItalic"
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import { useState } from "react"

export const MuiTextField = () => {
    const [value, setValue] = useState("")
    return(
        <div>
            <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                    <TextField label="Name" variant="outlined" />
                    <TextField label="Name" variant="filled" />
                    <TextField label="Name" variant="standard" />
                </Stack>

                <Stack direction="row" spacing={2}>
                    <TextField label="Small secondary" size="small" color="secondary" variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={2}>
                    <TextField 
                        label="Form Input" 
                        required value={value} 
                        onChange={e => setValue(e.target.value)} 
                        error={!value} 
                        helperText={
                            !value ? 'Required': "Do not share your password with anyone"
                        }
                    />
                    <TextField 
                        label="Password"
                        type="Password"
                        helperText="Do not share your password with anyone"
                        disabled
                    />
                    <TextField label="Read only" InputProps={{readOnly: true}} />                  
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField 
                        label="Amount"
                        InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    />
                    <TextField 
                        label="Weight"
                        InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}
                    />
                </Stack>
            </Stack>
        </div>
    )
}