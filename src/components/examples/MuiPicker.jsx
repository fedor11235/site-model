import {
    Stack,
    TextField,
} from "@mui/material"
import {
    DatePicker, 
    TimePicker,
    DateTimePicker
} 
from "@mui/lab"
import {LocalizationProvider} from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useState } from "react"

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState(false)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)
    return(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4} sx={{width:"250px"}}>
            <DatePicker
                lavel="Date picker"
                renderInput={(params)=><TextField {...params}/>}
                value={selectedDate}
                onChange={(newValue)=>setSelectedDate(newValue)}
            >
            </DatePicker>
            <TimePicker
                lavel="Time picker"
                renderInput={(params)=><TextField {...params}/>}
                value={selectedTime}
                onChange={(newValue)=>setSelectedTime(newValue)}
            >
            </TimePicker>
            <DateTimePicker
                lavel="Date Time picker"
                renderInput={(params)=><TextField {...params}/>}
                value={selectedDateTime}
                onChange={(newValue)=>setSelectedDateTime(newValue)}
            >
            </DateTimePicker>
        </Stack>
      </LocalizationProvider>
    )
}