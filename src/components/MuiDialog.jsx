import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material"

import { useState, forwardRef } from "react"
import CheckIcon from "@mui/icons-material/Check"

export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return
        setOpen(false)
    }
    return(
      <>
        <Button onClick={()=>setOpen(true)}>Open dialog</Button>
        <Dialog 
            open={open}
            aria-labelledby="dialog-title" 
            aria-describedby="dialog-description"
            onClose={()=>setOpen(false)}
        >
            <DialogTitle id="dialog-title">Supmit the test?</DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">are you want submit test?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button onClick={()=>setOpen(false)} autoFocus>Submit</Button>
            </DialogActions>
        </Dialog>
      </>
    )
}