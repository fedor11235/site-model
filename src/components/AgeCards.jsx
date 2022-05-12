import { 
    Box, 
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    Stack,
} from "@mui/material"

const cards = [
    {
      title: 'Rect',
      text: 'In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines',
      imgPath:
        'https://p4.wallpaperbetter.com/wallpaper/30/770/536/full-hd-download-nature-images-1920x1200-wallpaper-preview.jpg',
    },
    {
      title: 'Rect',
      text: 'In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines',
      imgPath:
        'https://p4.wallpaperbetter.com/wallpaper/30/770/536/full-hd-download-nature-images-1920x1200-wallpaper-preview.jpg',
    },
    {
      title: 'Rect',
      text: 'In the following example, the nested title and body text will inherit the fontFamily from styles.baseText, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines',
      imgPath:
        'https://p4.wallpaperbetter.com/wallpaper/30/770/536/full-hd-download-nature-images-1920x1200-wallpaper-preview.jpg',
    },
  ];

export const AgeCards = () => {

    return(
        <Stack 
          alignItems="center"
          direction="row" 
          spacing={2} 
          justifyContent="center" 
          sx={{height: '70vh'}}
        >
          {cards.map((step) => (

                <Card sx={{width:"300px", height: '400px'}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://p4.wallpaperbetter.com/wallpaper/30/770/536/full-hd-download-nature-images-1920x1200-wallpaper-preview.jpg"
                        alt="unsplash image"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{step.title}</Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            {step.text}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn more</Button>
                    </CardActions>
                </Card>
          ))}
        </Stack>
    )
}