import {
    Stack,
    TextField,
    Box,
} from "@mui/material"
import {DateRangePicker, LocalizationProvider } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useState } from "react"

//TODO Not Worcked!!!!!
export const MuiDateRangePicker = () => {
    const [value, setValue] = useState([null, null])
    return(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
    )
}