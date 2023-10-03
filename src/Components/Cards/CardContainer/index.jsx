import Box from "@mui/material/Box";
import PokemonCard from "../Card";

export default function CardContainer() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: "1rem",
                    justifyContent: "center",
                    my: "1rem"
                }}
            >
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />

            </Box>
        </>
    )
}