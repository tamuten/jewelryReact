import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, CircularProgress, Divider, Paper, Toolbar, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowParams, GridValueFormatterParams } from "@mui/x-data-grid";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "../Api";
import { Shozoku } from '../Models/Shozoku';
import { Tantosha } from "../Models/Tantosha";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 80 },
    { field: 'name', headerName: '名前', width: 200 },
    {
        field: 'shozoku',
        headerName: '所属',
        width: 200,
        valueFormatter: ({ value }: GridValueFormatterParams<Shozoku>) => value.name
    }
];

export const TantoshaList: FC = () => {
    const navigate = useNavigate();
    const [tantoshaList, setTantoshaList] = useState<Tantosha[]>();

    const getListAsync = async (): Promise<void> => {
        const list = await getDataWithJsonAsync<Tantosha[]>("/api/tantosha/list");
        if (list) {
            setTantoshaList(list);
        }
    }

    useEffect((): void => {
        getListAsync();
    }, []);

    const onRowClick = ({ row }: GridRowParams<Tantosha>): void => {
        navigate(`/tantosha/${row.id}`);
    }

    if (!tantoshaList) return <CircularProgress />;

    return (
        <>
            <Toolbar sx={{ justifyContent: "space-between", paddingLeft: '0 !important', paddingRight: '0 !important' }} >
                <Typography variant="h6" >担当者一覧</Typography>
                <Button variant="contained" color="primary" disableElevation
                    startIcon={<AddCircleOutlineIcon />}>
                    追加
                </Button>
            </Toolbar>
            <Divider />
            <Paper elevation={0} sx={{ mt: 2, height: 400 }} >
                <DataGrid
                    density="compact"
                    rows={tantoshaList}
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