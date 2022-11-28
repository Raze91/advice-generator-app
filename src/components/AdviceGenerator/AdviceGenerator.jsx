import axios from "axios";
import React, { useState, useEffect } from "react";

import "./AdviceGenerator.css";

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState(null);

    useEffect(() => {
        getAdvice();
    }, []);

    const getAdvice = () => {
        axios.get("https://api.adviceslip.com/advice").then((response) => {
            setAdvice(response.data.slip);
        });
    };


    return (
        <div className="generator-ctnr">
            <p className="advice-id">advice #{advice?.id}</p>
            <p className="advice-quote">“{advice?.advice}”</p>

            <div className="svg" />

            <button onClick={getAdvice}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="#202733"
                    />
                </svg>
            </button>
        </div>
    );
};

export default AdviceGenerator;
