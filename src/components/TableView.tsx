import { useEffect, useState } from "react";
import {
    CircularProgress, Pagination, Paper, Table, TableBody,
    TableCell, TableContainer, TableRow, TableHead, Box
} from "@mui/material";
import { swapiTablecolumns } from "../util/constants";
import { SwapiDataType } from "../util/types";
import WarningIcon from '@mui/icons-material/Warning';
import classes from './TableView.module.css';

const TableView = () => {

    const [tableData, setTableData] = useState<SwapiDataType | null>();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(false)
    const [page, setPage] = useState(1);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchSwapiData = async () => {
            setIsloading(true)

            try {
                // The requirement is to use 'https://swapi.dev/api/people', if we have to adhere to that use the following code:
                // const response = await fetch(page === 1 ? 'https://swapi.dev/api/people' : `https://swapi.dev/api/people/?page=${page}`, { signal })
                const response = await fetch(`https://swapi.dev/api/people/?page=${page}`, { signal })
                const data = await response.json();
                setIsloading(false)
                setTableData(data)

            } catch (error) {
                if (error instanceof DOMException) {
                    return;
                }
                setError(true)
            }
        }

        fetchSwapiData();

        return () => {
            controller.abort();
        };

    }, [page])

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    if (error) return (
        <div className={classes.centeredFeedback}>
            <div className={classes.flexErrorContainer}>
                <WarningIcon color="error" />
                <h4>You`ve encountered an error</h4>
            </div>
            <p>It seems like our servers are busy right now...</p>
            <p>Please excuse the inconvinance and come back later</p>
        </div>
    )

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
                            <TableCell align="center" colSpan={5} style={{ fontWeight: 'bolder', font: '1.5em' }}>
                                Swapi Characters
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {swapiTablecolumns.map((swapiTablecolumns) => (
                                <TableCell
                                    key={swapiTablecolumns.id}
                                    align={swapiTablecolumns.align}
                                    style={{ top: 57, fontWeight: 'bold' }}
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