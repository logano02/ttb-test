import { Box, Card, Grid, TextField } from "@mui/material";
import { useCallback } from "react"; 
import { useForm,SubmitHandler  } from "react-hook-form"; 

type TConfirmFormType = {
    name: string
    lastname: string
    idCard:string
    accountNo:string
  }

const ConfirmView = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<TConfirmFormType>()

      const onSubmit = useCallback(() => { 
        console.log(getValues()); 
      }, [getValues]); 
  return (
    <Card sx={{ width: "100%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="ชื่อ" variant="outlined" fullWidth />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="นามสกุล" variant="outlined" fullWidth />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="บัตรประชาชน" variant="outlined" fullWidth />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="เลขบัญชี" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"fullWidth />
        </Grid>
        <Grid size={{ xs: 4, sm: 4, md: 3 }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"fullWidth/>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ConfirmView;
function getValues(): any {
    throw new Error("Function not implemented.");
}

