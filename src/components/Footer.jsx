import { 
    Box, 
    Container,
    Grid,
    Link,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    Stack,
} from "@mui/material"

export const Footer = () => {

    return(
        <Box>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography>
                            Лого
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography>
                            Способы оплаты
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help!</Box>
                        <Box>
                            <Link href="/" color="inherit">Выходные данных</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Защита данных</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Общие условия заключения сделок для детей / несовершеннолетних (0–18 лет)</Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Общие условия заключения сделок: типовой договор для</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}