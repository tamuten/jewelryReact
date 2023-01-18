import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "../Api";
import { Shozoku } from "../Models/Shozoku";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 80 },
    { field: 'name', headerName: '名前', width: 200 }
];

export const ShozokuList: FC = () => {
    const navigate = useNavigate();
    const [shozokuList, setShozokuList] = useState<Shozoku[]>();

    const getListAsync = async (): Promise<void> => {
        const list = await getDataWithJsonAsync<Shozoku[]>("/api/shozoku/list");
        if (list) {
            setShozokuList(list);
        }
    }

    useEffect((): void => {
        getListAsync();
    }, []);

    const onRowClick = ({ row }: GridRowParams<Shozoku>): void => navigate(`/shozoku/${row.id}`);

    if (!shozokuList) return <CircularProgress />;

    return (
        <>
            <Toolbar sx={{ justifyContent: "space-between", paddingLeft: '0 !important', paddingRight: '0 !important' }} >
                <Typography variant="h6" >所属一覧</Typography>
                <Button variant="contained" color="primary" disableElevation
                    startIcon={<AddCircleOutlineIcon />} onClick={() => navigate("/shozoku/add")}>
                    追加
                </Button>
            </Toolbar>
            <Divider />
            <Paper elevation={0} sx={{ mt: 2, height: 400 }} >
                <DataGrid
                    density="compact"
                    rows={shozokuList}
                    columns={columns}
                    rowsPerPageOptions={[5, 10, 25]}
                    disableSelectionOnClick
                    disableColumnMenu
                    disableColumnSelector
                    experimentalFeatures={{ newEditingApi: true }}
                    onRowClick={onRowClick}
                />
            </Paper>
        </>
    );
}