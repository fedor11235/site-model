import {
    Tooltip,
    IconButton,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"

export const MuiTooltip = () => {
    const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"])
    const handleDelete = (chipToDelete) => {
        setChips(chips => chips.filter(chip => chip != chipToDelete))
    }
    return(
      <Tooltip 
        title="Delete" 
        placement="right" 
        arrow 
        enterDelay={500} 
        leaveDelay={200}
      >
        <IconButton>
            <DeleteIcon />
        </IconButton>
      </Tooltip>
    )
}