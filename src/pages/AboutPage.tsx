import React from "react";

import {useNavigate} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Information page</h1>
            <button className="btn green darken-1" onClick={() => navigate("/")}>Back to Todos Page</button>
        </>
    )
}
