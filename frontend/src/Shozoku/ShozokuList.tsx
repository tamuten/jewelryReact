import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "../Api";
import { Shozoku } from "./Shozoku";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ShozokuList = () => {
    const navigate = useNavigate();
    const [shozokuList, setShozokuList] = useState<Shozoku[]>();

    const getListAsync = async () => {
        const list = await getDataWithJsonAsync<Shozoku[]>("/api/shozoku/list");
        if (list) {
            setShozokuList(list);
        } else {

        }
    }

    useEffect(() => {
        getListAsync();
    }, []);

    if (!shozokuList) return <CircularProgress />;

    return (
        <>
            <Paper elevation={0} sx={{ pl: 2, pr: 2, pb: 2 }} >
                <Toolbar sx={{ justifyContent: "space-between", paddingLeft: '0 !important', paddingRight: '0 !important' }} >
                    <Typography variant="h6" >所属一覧</Typography>
                    <Button variant="contained" color="success" disableElevation
                        startIcon={<AddCircleOutlineIcon />}>
                        追加
                    </Button>

                </Toolbar>


                <TableContainer >
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>名前</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shozokuList.map((s, index) => (
                                <TableRow key={index} hover>
                                    <TableCell>{s.id}</TableCell>
                                    <TableCell>{s.name}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" size="small"
                                            onClick={() => navigate(`/shozoku/${s.id}`)} >
                                            編集
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
}