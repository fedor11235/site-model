import { Typography } from "@mui/material"
export const MuiTypography = () => {
    return(
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant="subtitle1">sub title 1</Typography>
            <Typography variant="subtitle2">sub title 2</Typography>

            <Typography variant="body1">
                ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, 
                allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, 
                and has a robust developer community that’s rapidly growing. 
                There’s never been a better time to learn React.
            </Typography>
            <Typography variant="body2">
                ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, 
                allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, 
                and has a robust developer community that’s rapidly growing. 
                There’s never been a better time to learn React.
            </Typography>
        </div>
    )
}