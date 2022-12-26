import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import { Typography, TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import moment from "moment";
import { styled } from "@mui/material";
import getData from "../../message-control/getData";

import { CSVLink, CSVDownload } from "react-csv";
import DownloadSheet from "./DownloadSheet";
import DetailsModal from "./DetailsModal";
import { Title } from "../Styled/Globals";

function createData(
    id,
    customerRef,
    firstname,
    surname,
    address,
    postCode,
    email,
    customerMobile,
    nationality,
    lastRentDate,
    totalDays,
    roomType,
    roomNo,
    roomExtNo,
    gender,
    dob,
    identityType,
    subtotal,
    tax,
    total,
    createdAt
) {
    return {
        id,
        customerRef,
        firstname,
        surname,
        address,
        postCode,
        email,
        customerMobile,
        nationality,
        lastRentDate,
        totalDays,
        roomType,
        roomNo,
        roomExtNo,
        gender,
        dob,
        identityType,
        subtotal,
        tax,
        total,
        createdAt,
    };
}

// const rows = [
//     createData(
//         Math.floor(Math.random() * 999),
//         Math.floor(Math.random() * 999),
//         "Shujja",
//         "Sheeran",
//         "111 Abc Street",
//         "AB1 2CD",
//         "abc@def.com",
//         "012-345-678",
//         "England",
//         moment().format("DD/MM/YYYY"),
//         10,
//         "Single",
//         22,
//         4435,
//         "Male",
//         moment().format("DD/MM/YYYY"),
//         "NI Number",
//         330,
//         10,
//         340,
//         moment().format("DD/MM/YYYY")
//     ),
// ];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "CustomerRef",
        numeric: true,
        disablePadding: true,
        label: "Customer Ref",
    },
    {
        id: "FirstName",
        numeric: false,
        label: "Full Name",
    },
    {
        id: "Mobile",
        numeric: false,
        label: "Customer Mobile",
    },
    {
        id: "Nationality",
        numeric: false,
        label: "Nationality",
    },
    {
        id: "TotalDays",
        numeric: false,
        label: "Total Days",
    },
    {
        id: "RoomNo",
        numeric: false,
        label: "RoomNo",
    },
    {
        id: "SubTotal",
        numeric: true,
        label: "Sub Total",
    },
    {
        id: "Date",
        numeric: true,
        label: "Booking Date",
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={"left"}
                        padding={"none"}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={(theme) => ({
                            paddingLeft: 2,
                            paddingTop: 2,
                            paddingBottom: 2,
                        })}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                            sx={(theme) => ({
                                fontWeight: "bold",
                                fontSize: 16,
                            })}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component='span' sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function RecordsTable() {
    const [data, setData] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("CustomerRef");
    const [selected, setSelected] = React.useState({});
    const [openModal, setOpenModal] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [dataDates, setDataDates] = React.useState({
        to: null,
        from: null,
    });
    React.useEffect(() => {
        setRows(data);
    }, [data]);

    React.useEffect(() => {
        const _data = [];
        // const _to = moment(dataDates?.to).format("DD/MM/YYYY");
        // const _from = moment(dataDates?.from).format("DD/MM/YYYY");

        data?.forEach((_d) => {
            console.log(_d?.Date);
            const _date = moment(_d.Date, "MM/DD/YYYY");
            const _from = moment(dataDates?.from, "DD/MM/YYYY");
            const _to = moment(dataDates?.to, "DD/MM/YYYY");
            if (_date.isBetween(_from, _to, "days", "(]")) {
                console.log("is between", _d);
                _data.push(_d);
            }
        });
        console.log("final data", _data);
    }, [dataDates?.to, dataDates.from]);

    React.useEffect(() => {
        try {
            console.log("Getting data from Backend: ");
            getData()
                .then((res) => {
                    console.log("Got Data", res);
                    setData(res.data);
                })
                .catch((e) => console.log("Error with getData()", e));
        } catch (e) {
            console.log("Error while getting data ", e);
        }
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleClick = (_data) => {
        setSelected(_data);
        setOpenModal(true);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows?.length) : 0;

    const onDelete = (ID) => {
        const filtered = rows?.filter((_row) => _row?.ID !== ID);
        setRows([...filtered]);
    };
    const RecordCell = styled(TableCell)(({ theme }) => ({
        paddingLeft: "15px",
        paddingTop: 8,
        paddingBottom: 8,
    }));

    return (
        <Box sx={{ width: "100%" }}>
            <DetailsModal
                data={selected}
                open={openModal}
                onDelete={onDelete}
                handleClose={(_) => {
                    setOpenModal(false);
                    setSelected(false);
                }}
            />

            {/* <Paper
                sx={(theme) => ({
                    width: "max-content",
                    m: "auto",
                    p: 5,
                    mb: 5,
                })}
            >
                <Box
                    sx={(theme) => ({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        columnGap: "25px",
                        textAlign: "center",
                    })}
                >
                    <Box>
                        <Title>From</Title>
                        <TextField
                            type={"date"}
                            onChange={(e) =>
                                setDataDates({
                                    ...dataDates,
                                    from: e.target.value,
                                })
                            }
                            size={"small"}
                            value={dataDates?.from}
                        />
                    </Box>
                    <Box>
                        <Title>To</Title>
                        <TextField
                            type={"date"}
                            onChange={(e) =>
                                setDataDates({
                                    ...dataDates,
                                    to: e.target.value,
                                })
                            }
                            size={"small"}
                            value={dataDates?.to}
                        />
                    </Box>
                </Box>
            </Paper> */}

            <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows?.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            sx={(theme) => ({
                                                cursor: "pointer",
                                            })}
                                            onClick={(event) =>
                                                handleClick(row)
                                            }
                                            tabIndex={-1}
                                            key={row?.id}
                                        >
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.CustomerRef}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.FirstName} {row?.SurName}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.Mobile}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.Nationality}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.TotalDays}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.RoomNo}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                XOF {row?.SubTotal}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.Date}
                                            </RecordCell>
                                        </TableRow>
                                    );
                                })}
                            {rows?.length < 1 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell
                                        colSpan={6}
                                        sx={(theme) => ({
                                            display: "flex",
                                            alignItems: "cneter",
                                            justifyContent: "center",
                                            textAlign: "center",
                                        })}
                                    >
                                        No Data Found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <DownloadSheet data={rows} />
        </Box>
    );
}
