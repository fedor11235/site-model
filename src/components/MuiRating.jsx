import {
    // Box,
    // FormControlLabel,
    // Switch,
    Rating,
    Stack,
} from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

import { useState } from "react"

export const MuiRating = () => {
    const [value, setValue] = useState(3)
    console.log(value)

    const handleChecked = (_event, newValue) => {
        setValue(newValue)
    }

    return (
        <Stack spacing={2}>
            <Rating 
                value={value} 
                onChange={handleChecked} 
                precision="0.5"
                size="large"
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                readOnly
                highlightSelectedOnly
            />
        </Stack>
    )
}