import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack
} from "@mui/material"

export const MuiImageList = () => {

    return(
        <Stack spacing={4}>
            <ImageList
                sx={{width:500, height: 450}}
                cols={3}
                rowHeight={164}
            >
                {
                    itemData.map(item=>(
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                            <ImageListItemBar title={item.title}/>
                        </ImageListItem>
                    ))
                }

            </ImageList>
            <ImageList
                variant="woven"
                sx={{width:500, height: 450}}
                cols={3}
                rowHeight={164}
                gap={8}
            >
                {
                    itemData.map(item=>(
                        <ImageListItem key={item.img}>
                            <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                            <ImageListItemBar title={item.title}/>
                        </ImageListItem>
                    ))
                }

            </ImageList>
            <Box sx={{width:500, height: 450, overflowY:"scroll"}}>
                <ImageList
                    variant="masonry"
                    rowHeight={164}
                    cols={3}
                    gap={8}
                >
                    {
                        itemData.map(item=>(
                            <ImageListItem key={item.img}>
                                <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                                <ImageListItemBar title={item.title}/>
                            </ImageListItem>
                        ))
                    }

                </ImageList>
            </Box>
        </Stack>
    )
}

const itemData = [
    {
        img:"https://www.eiffel-tower.net/wp-content/uploads/2020/08/beautiful-places-for-instagram-1-1024x640.jpg",
        title:"Ohoho",
    },
    {
        img:"https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/08/shutterstock_605105897-e1534228891646.jpg",
        title:"Lila",
    },
    {
        img:"https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-01/Kirkjufell-volcano.jpg",
        title:"Nento",
    },
    {
        img:"https://gls-space.ams3.digitaloceanspaces.com/lbcms-container-miraxtravel_com/0e3cbe88-275e-11ec-9af2-e5c1957dafe5.JPG",
        title:"Gailo",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8A9VACs-NImWfGHolXxj070Gt4gvz1grfHQ&usqp=CAU",
        title:"Leila",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCWIeFtJdZT9ebPRY9wxLF3r-4Dqt-2ACOA&usqp=CAU",
        title:"Dan",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rQ9S75NHebJP9SdXUSpd2kRIRO12-srwDA&usqp=CAU",
        title:"Kolopomo",
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7hKMe5iJKuwIthBij29xHeByaraNNuvYJA&usqp=CAU",
        title:"Nensa",
    },
    {
        img:"https://3.bp.blogspot.com/-a3v6IjFf2C0/VkXdP9LzVcI/AAAAAAAADaI/xQLkiCsrgBc/s1600/%25D0%25A7%25D0%25B5%25D0%25BB%25D0%25BE%25D0%25B2%25D0%25B5%25D0%25BA%2B%25D0%25B8%2B%25D0%25BF%25D1%2580%25D0%25B8%25D1%2580%25D0%25BE%25D0%25B4%25D0%25B0.jpg",
        title:"Pomo",
    }
]