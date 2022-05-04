import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
    Link,
    Box,
    Breadcrumbs,
} from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
// import { useState } from "react"

export const MuiBreadcrumbs = () => {
    // const [anchorEl, setAnchorEl] = useState(null)
    // const open = Boolean(anchorEl)
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget)
    // }
    // const handleClose = (event) => {
    //     setAnchorEl(null)
    // }

    return(
      <Box m={2}>
          <Breadcrumbs 
            aria-label="breadcrumbs" 
            separator={<NavigateNextIcon fontSize="small"/>}
            maxItems={3}
            itemsBeforeCollapse={2}
          >
            <Link 
                href="#" 
                color="secondary"
                underline="hover"
            >
                Home
            </Link>
            <Link 
                href="#" 
                color="secondary"
                underline="hover"
            >
                Catalog
            </Link>
            <Link 
                href="#" 
                color="secondary"
                underline="hover"
            >
                Accessories
            </Link>
            <Typography>Shoes</Typography>
        </Breadcrumbs>
      </Box>
    )
}