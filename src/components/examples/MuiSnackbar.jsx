import {
    Button,
    Alert,
    Snackbar
} from "@mui/material"

import { useState, forwardRef } from "react"

const SnakebarAlert = forwardRef(
    function SnakebarAlert (props, ref) {
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

export const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return
        setOpen(false)
    }
    return(
      <>
        <Button onClick={()=>setOpen(true)}>Submit</Button>
        <Snackbar 
            message="Form submitted successfully!!" 
            autoHideDuration={4000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical:"bottom",
                horizontal:"center",
            }}
        ></Snackbar>
        <Snackbar 
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <SnakebarAlert onClose={handleClose} severity="success">
                Form submited successfully
            </SnakebarAlert>

        </Snackbar>
      </>
    )
}