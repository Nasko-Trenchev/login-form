import { useEffect, useState } from "react";
import {
    CircularProgress, Pagination, Paper, Table, TableBody,
    TableCell, TableContainer, TableRow, TableHead, Box
} from "@mui/material";
import { swapiTablecolumns } from "../util/constants";
import { SwapiDataType } from "../util/types";
import classes from './TableView.module.css';


const TableView = () => {

    const [tableData, setTableData] = useState<SwapiDataType | null>();
    const [isLoading, setIsloading] = useState(true);
    const [page, setPage] = useState(1);

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
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={5} style={{ fontWeight: 'bolder' }}>
                                Swapi Characters
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {swapiTablecolumns.map((swapiTablecolumns) => (
                                <TableCell
                                    key={swapiTablecolumns.id}
                                    align={swapiTablecolumns.align}
                                    style={{ top: 57, minWidth: swapiTablecolumns.minWidth, fontWeight: 'bold' }}
                                >
                                    {swapiTablecolumns.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData?.results.map((data) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={`${data.height}${data.mass}`}>
                                    {swapiTablecolumns.map((column) => {
                                        const value = data[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1em', marginBottom: '1em' }}>
                    <Pagination
                        count={tableData?.count ? Math.ceil(tableData.count / 10) : 0}
                        page={page}
                        onChange={handlePageChange}
                    />
                </Box >
            </TableContainer>
        </Paper>
    )
}

export default TableView;