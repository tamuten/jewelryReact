import { Button, CircularProgress, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "../Api";
import { Shozoku } from "./Shozoku";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 80 },
    { field: 'name', headerName: 'Name', width: 200 }
];

export const ShozokuList = () => {
    const navigate = useNavigate();
    const [shozokuList, setShozokuList] = useState<Shozoku[]>();

    const getListAsync = async (): Promise<void> => {
        const list = await getDataWithJsonAsync<Shozoku[]>("/api/shozoku/list");
        if (list) {
            setShozokuList(list);
        } else {

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
                <Typography variant="h5" >所属一覧</Typography>
                <Button variant="contained" color="primary" disableElevation
                    startIcon={<AddCircleOutlineIcon />}>
                    追加
                </Button>

            </Toolbar>
            <Divider />
            <Paper elevation={0} sx={{ mt: 2, height: 400 }} >
                <DataGrid
                    density="compact"
                    rows={shozokuList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
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