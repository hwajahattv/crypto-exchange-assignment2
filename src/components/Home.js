import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";

function Home(props) {
    let navigate = useNavigate();
    useEffect(() => {
        // console.log(props.loggedIn)/;
        if (!props.loggedIn) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Home Page
            </Typography>
        </div>
    );
}

export default Home;
