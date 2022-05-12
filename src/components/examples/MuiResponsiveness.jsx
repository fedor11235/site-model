import { Box, styled } from "@mui/material"


//Understand color themes
const styledBox = styled(Box)(({theme})=>({
    height: "250px",
    width: "250px",
    backgroundColor: theme.palete.neutral?.darker,
}))

export const MuiResponsiveness = () => {

    return(
        <>
            <Box 
                sx={{
                    width: {
                        xs: 100, //0
                        sm: 200, //600
                        md: 300, //900
                        lg: 400, //1200
                        xl: 500, //1536
                    }, 
                    height: 300,
                    bgcolor:"secondary.light"
                }}>
            </Box>
            <styledBox />
        </>
    )
}