import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
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

import { CSVLink, CSVDownload } from "react-csv";
import DownloadSheet from "./DownloadSheet";

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

const rows = [
    createData(
        Math.floor(Math.random() * 999),
        Math.floor(Math.random() * 999),
        "Shujja",
        "Sheeran",
        "111 Abc Street",
        "AB1 2CD",
        "abc@def.com",
        "012-345-678",
        "England",
        moment().format("DD/MM/YYYY"),
        10,
        "Single",
        22,
        4435,
        "Male",
        moment().format("DD/MM/YYYY"),
        "NI Number",
        330,
        10,
        340,
        moment().format("DD/MM/YYYY")
    ),
];

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
        id: "customerRef",
        numeric: true,
        disablePadding: true,
        label: "Customer Ref",
    },
    {
        id: "firstname",
        numeric: false,
        label: "Firstname",
    },
    {
        id: "surname",
        numeric: false,
        label: "Surname",
    },
    {
        id: "address",
        numeric: false,
        label: "Address",
    },
    {
        id: "postCode",
        numeric: false,
        label: "Post Code",
    },
    {
        id: "email",
        numeric: false,
        label: "Email",
    },
    {
        id: "customerMobile",
        numeric: false,
        label: "Customer Mobile",
    },
    {
        id: "nationality",
        numeric: false,
        label: "Nationality",
    },
    {
        id: "lastRentDate",
        numeric: true,
        label: "Last Rent Date",
    },
    {
        id: "totalDays",
        numeric: false,
        label: "Total Days",
    },
    {
        id: "roomType",
        numeric: false,
        label: "Room Type",
    },
    {
        id: "roomNo",
        numeric: false,
        label: "RoomNo",
    },
    {
        id: "roomExtNo",
        numeric: false,
        label: "Room Ext. No.",
    },
    {
        id: "gender",
        numeric: false,
        label: "Gender",
    },
    {
        id: "Date of Birth",
        numeric: false,
        label: "dob",
    },
    {
        id: "identityType",
        numeric: false,
        label: "Identity Type",
    },
    {
        id: "subtotal",
        numeric: true,
        label: "SubTotal",
    },
    {
        id: "tax",
        numeric: true,
        label: "Tax",
    },
    {
        id: "total",
        numeric: true,
        label: "Total ",
    },
    {
        id: "createdAt",
        numeric: true,
        label: "Date Added",
    },
];

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
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
                            padding: 2,
                        })}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
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
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // const TableCell = styled(TableCellMUI)(({ theme }) => ({
    //     padding: 4,
    // }));

    const RecordCell = styled(TableCell)(({ theme }) => ({
        paddingLeft: 4,
        paddingTop: 8,
        paddingBottom: 8,
    }));

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby='tableTitle'
                        size={dense ? "small" : "medium"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) =>
                                                handleClick(event, row.name)
                                            }
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row?.id}
                                            selected={isItemSelected}
                                        >
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.customerRef}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.firstname}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.surname}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.address}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.postCode}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.email}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.customerMobile}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.nationality}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.lastRentDate}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.totalDays}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.roomType}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.roomNo}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.roomExtNo}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.gender}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.dob}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.identityType}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.subtotal}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.tax}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.total}
                                            </RecordCell>
                                            <RecordCell
                                                component='td'
                                                id={labelId}
                                                scope='row'
                                                padding='none'
                                            >
                                                {row?.createdAt}
                                            </RecordCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
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
