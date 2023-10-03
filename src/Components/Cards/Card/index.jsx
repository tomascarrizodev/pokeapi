import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import HelpIcon from '@mui/icons-material/Help'

export default function PokemonCard() {
    return (
        <Card sx={{width: "70%"}}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.gannett-cdn.com/-mm-/487e45eb3deb72e80a2e8854ede1c881d56bcfcb/c=0-105-2125-1306/local/-/media/2018/03/13/USATODAY/USATODAY/636565439512580964-GettyImages-500798391.jpg?width=2125&height=1201&fit=crop&format=pjpg&auto=webp"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={<FavoriteBorderIcon fontSize="small" />} >Like</Button>
                <Button size="small" startIcon={<HelpIcon fontSize="small" />} >See More</Button>
            </CardActions>
        </Card>
    )
}