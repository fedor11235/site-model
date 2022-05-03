import { 
    Box, 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    RadioGroup, 
    Radio,
    FormHelperText 
} from "@mui/material"
import { useState } from "react"

export const MuiRadioButton = () => {
    const [value, setValue] = useState("")

    const handleFormatChange = (event) => {
        setValue(event.target.value)
    }
    return(
        <Box>
            <FormControl error>
                <FormLabel id="job-exprerience-label">
                    Year of exprerience
                </FormLabel>
                <RadioGroup 
                    name="job-exprerience-group" 
                    aria-aria-labelledby="job-exprerience-label"
                    value={value}
                    onChange={handleFormatChange}
                    row
                >
                    <FormControlLabel control={<Radio size="medium" color="secondary"/>} label="0-2" value="0-2"/>
                    <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
                    <FormControlLabel control={<Radio/>} label="6-10" value="6-10"/>
                </RadioGroup>
                <FormHelperText>Invalis selection</FormHelperText>
            </FormControl>
        </Box>
    )
}