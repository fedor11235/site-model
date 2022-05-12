import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelected = () => {
    
    const [countries, setCountries] = useState([])

    const handleChange = (event) => {
        const value = event.target.value
        setCountries(typeof value === "string" ? value.split(",") : value)
    }
    return(
        <div>
            <Box width="250px">
                <TextField 
                    label="Select country" 
                    select value={countries} 
                    onChange={handleChange}
                    fullWidth
                    SelectProps={{
                        multiple: true
                    }}
                    size="small"
                    color="secondary"
                    helperText="pleas select your country"
                    error
                >
                    <MenuItem value="IN">India</MenuItem>
                    <MenuItem value="US">US</MenuItem>
                    <MenuItem value="AU">Austraia</MenuItem>
                </TextField>
            </Box>
        </div>
    )
}