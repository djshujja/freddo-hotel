import { Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import get from "../../message-control/getData";

export default function FinanceComponent() {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);

    const getData = () => {
        get()
            .then((res) => {
                console.log("got data", res);
                setData([...res.data]);
            })
            .catch((e) =>
                console.log("error occured while getting data from server: ", e)
            );
    };

    const getTotal = () => {
        let _total = 0;
        data?.forEach((_d) => (_total += Number(_d?.SubTotal)));
        setTotal(_total);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getTotal();
    }, [data]);

    return (
        <Box pt={5}>
            <Box
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    columnGap: 10,
                })}
            >
                <Paper>
                    <Box
                        sx={(theme) => ({
                            textAlign: "center",
                            p: 4,
                        })}
                    >
                        <Typography
                            component={"h5"}
                            sx={(theme) => ({
                                fontWeight: "bold",
                                fontSize: "20px",
                            })}
                        >
                            Customers
                        </Typography>
                        <Typography
                            component={"h5"}
                            sx={(theme) => ({
                                fontWeight: "bold",
                                fontSize: "32px",
                            })}
                        >
                            {data?.length}
                        </Typography>
                    </Box>
                </Paper>
                <Paper>
                    <Box
                        sx={(theme) => ({
                            textAlign: "center",
                            p: 4,
                        })}
                    >
                        <Typography
                            component={"h5"}
                            sx={(theme) => ({
                                fontWeight: "bold",
                                fontSize: "20px",
                            })}
                        >
                            Total
                        </Typography>
                        <Typography
                            component={"h5"}
                            sx={(theme) => ({
                                fontWeight: "bold",
                                fontSize: "32px",
                            })}
                        >
                            XOF {total}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
