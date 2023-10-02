import Box from "@mui/material/Box";

const Header = () => {
    return (
        <>
            <Box 
                sx={{
                    width: "100%",
                    px: "2rem",
                    py: "1rem",
                    textAlign: "center",
                    backgroundColor: "#F00000"
                }}    
            >
                <h1>Poke-API</h1>
            </Box>
            <Box
                sx={{
                    height: "1.5rem",
                    backgroundColor: "#222224"
                }}
            />
        </>
    )
}

export default Header;