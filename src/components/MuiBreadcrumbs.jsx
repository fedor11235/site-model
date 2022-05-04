import {
    Typography,
    Link,
    Box,
    Breadcrumbs,
} from "@mui/material"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

export const MuiBreadcrumbs = () => {

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