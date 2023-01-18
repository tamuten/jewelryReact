import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { Shozoku } from '../Models/Shozoku';

export const ShozokuRegister: FC = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<Shozoku>();

    return (
        <>
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                }}
            >
                <Typography variant="h6">所属登録</Typography>
            </Toolbar>
            <Divider />
            <Paper elevation={0} sx={{ mt: 2, p: 2 }}>
                <Stack>
                    <Stack sx={{ width: 200 }}>
                        <Controller
                            name="id"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size="small"
                                    margin="dense"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    label="Id"
                                    variant="standard"
                                />
                            )}
                        />
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size="small"
                                    margin="dense"
                                    label="名前"
                                    variant="standard"
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction="row">
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {}}
                        >
                            登録
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
