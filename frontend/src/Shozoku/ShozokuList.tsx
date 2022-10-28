import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "../Api";
import { Shozoku } from "./Shozoku";

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
            <TableContainer>
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
                                    <Button variant="outlined"
                                        onClick={() => navigate(`/shozoku/${s.id}`)} >
                                        編集
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}