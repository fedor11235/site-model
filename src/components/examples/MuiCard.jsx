import { 
    Box, 
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
} from "@mui/material"

export const MuiCard = () => {

    return(
        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://p4.wallpaperbetter.com/wallpaper/30/770/536/full-hd-download-nature-images-1920x1200-wallpaper-preview.jpg"
                    alt="unsplash image"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">React</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">
                    In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, 
                    but the title provides its own additional styles. 
                    The title and body will stack on top of each other on account of the literal newlines
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}