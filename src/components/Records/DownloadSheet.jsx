import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment";

export default function DownloadSheet({ data }) {
    const [selectedData, setSelectedData] = useState([]);

    const CSVRef = useRef(null);

    const handleCSVDownload = (_) =>
        console.log("CSVRef.current", CSVRef.current.click());
    useEffect(() => {
        setSelectedData([...data]);
    }, [data]);

    return (
        <Box>
            <CSVLink
                filename={moment().format("DD-MM-YYYY hh:mm A") + " Reports"}
                ref={CSVRef}
                data={selectedData}
            >
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={handleCSVDownload}
                >
                    Download in Excel
                </Button>
            </CSVLink>
        </Box>
    );
}
