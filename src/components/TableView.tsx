import { useEffect, useState } from "react";
import {
    CircularProgress, Pagination, Paper, Table, TableBody,
    TableCell, TableContainer, TableRow, TableHead
} from "@mui/material";
import { SwapiDataType } from "../util/types";
import classes from './TableView.module.css';

interface Column {
    id: 'name' | 'mass' | 'height' | 'hair_color' | 'skin_color';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'mass', label: 'Mass', minWidth: 100 },
    {
        id: 'height',
        label: 'Height',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'hair_color',
        label: 'Hair color',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'skin_color',
        label: 'Skin Color',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

const TableView = () => {

    const [tableData, setTableData] = useState<SwapiDataType | null>();
    const [isLoading, setIsloading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {

        setIsloading(true);
        const fetchSwapiData = async () => {
            const response = await fetch(page === 0 ? 'https://swapi.dev/api/people' : `https://swapi.dev/api/people/?page=${page}`)
            const data = await response.json();
            if (data) {
                setIsloading(false);
                setTableData(data);
            }
        }

        fetchSwapiData();

    }, [page])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    if (isLoading) {
        return (
            <div className={classes.centeredFeedback}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <Paper sx={{ width: 'auto', margin: 'auto' }}>
            <TableContainer sx={{ maxHeight: 640 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={5}>
                                Swapi Characters
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData?.results.map((data) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={`${data.height}${data.mass}`}>
                                    {columns.map((column) => {
                                        const value = data[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={tableData?.count ? Math.ceil(tableData.count / 10) : 0}
                onChange={handlePageChange}
            />
        </Paper>
    )
}

export default TableView;