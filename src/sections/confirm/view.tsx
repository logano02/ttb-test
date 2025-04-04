import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InfoTooltip from "../../components/info-tooltip/view";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Toaster, toast } from "sonner";
import { useRouter } from "../../routes/hooks";
import { Logout } from "@mui/icons-material";
import { STORAGE_KEY } from "../../auth/context/jwt/constant";
import dayjs from "dayjs";

const schema = Yup.object({
  name: Yup.string().required(),
  lastname: Yup.string().required(),
  idCard: Yup.string()
    .matches(/^\d+$/, "หมายเลขบัตรประชาชน ต้องเป็นตัวเลขเท่านั้น")
    .length(13)
    .required(),
  accountNo: Yup.string()
    .matches(/^\d+$/, "หมายเลขบัญชี ต้องเป็นตัวเลขเท่านั้น")
    .required(),
  file: Yup.mixed<File>()
    .nullable()
    .required()
    .test("is required", "กรูณาอัปโหลดไฟล์", (value) => {
      if (value instanceof FileList) return false;
      else return true;
    }),
});

const defaultValues = {
  name: "",
  lastname: "",
  idCard: "",
  accountNo: "",
  file: undefined,
};

type FormData = Yup.InferType<typeof schema>;

const ConfirmView = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const router = useRouter();
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = methods;

  // function --------------------------------------------------------------

  const onError = () => toast.error("กรุณากรอกข้อมูลให้ครบ");

  const onSubmit: SubmitHandler<FormData> = useCallback(() => {
    toast.success("บักทึกข้อมูลเรียบร้อย");
    setTimeout(() => {
      // router.refresh();
      setIsSubmit(true);
    }, 3000);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    router.refresh();
  };

  return (
    <>
      {isSubmit ? (
        <Box>
          {/* header */}
          <Card sx={{ margin: "0rem 1rem" }}>
            <Box textAlign={"right"}>
              <Box m={"2rem 10rem"}>
                <Typography>
                  {`ชื่อ : ${getValues("name")} ${getValues("lastname")}`}
                </Typography>
                <Typography>
                  {`Login Date : ${getValues("name")} ${getValues("lastname")}`}
                </Typography>
              </Box>
            </Box>
          </Card>

          {/* Body */}
          <Stack spacing={1.5} sx={{ margin: "2rem 1rem" }}>
            <Box sx={{ margin: "10rem 1rem" }}>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12, md: 3, lg: 2 }}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Card
                      sx={{ mb: "1rem", textAlign: "center", padding: " 1rem" }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        textAlign={"left"}
                      >
                        <Typography>{`สวัสดี คุณ User : ${getValues(
                          "name"
                        )}`}</Typography>
                        <Typography>{`เลขบัญชี : ${getValues(
                          "accountNo"
                        )}`}</Typography>
                      </Box>
                    </Card>
                    <Card
                      sx={{ mb: "1rem", textAlign: "center", padding: " 1rem" }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        textAlign={"left"}
                      >
                        <Typography>
                          {`Link : {"https://www.google.com/"} `}
                          {/* <a src={"https://www.google.com/"} alt={{"https://www.google.com/"} } /> */}
                        </Typography>
                      </Box>
                    </Card>
                    <Card></Card>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 8 }}>YYYYYY</Grid>
                <Grid size={{ xs: 12, md: 3, lg: 2 }}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Card
                      sx={{ mb: "1rem", textAlign: "center", padding: " 1rem" }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        textAlign={"left"}
                      >
                        IMG
                      </Box>
                    </Card>
                    <Card
                      sx={{ mb: "1rem", textAlign: "center", padding: " 1rem" }}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        textAlign={"left"}
                      >
                        <Typography>ข่าวสาร</Typography>
                      </Box>
                    </Card>
                    <Card></Card>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
          {/* footer */}
          <Card sx={{ margin: "0rem 1rem" }}>
            <Box textAlign={"right"}>
              <Box m={"2rem 10rem"}>
                <Typography>{`วันปัจจุบัน : ${dayjs(new Date()).format(
                  "DD/MM/YYYY"
                )}`}</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      ) : (
        <Card sx={{ padding: "4rem 2rem 2rem 2rem", margin: "2rem" }}>
          <>
            <Toaster
              richColors
              position="top-right"
              toastOptions={{ duration: 3000 }}
            />
            <Box position={"absolute"} top={70} right={100}>
              <Button
                variant="contained"
                startIcon={<Logout />}
                onClick={() => handleLogout()}
              >
                ออกจากระบบ
              </Button>
            </Box>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              {renderCategory("ข้อมูลส่วนบุคคล", "กรุณาระบุข้อมูลส่วนบุคคล")}
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                m={"2rem 1rem"}
              >
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                  <TextField
                    {...register("name")}
                    id="outlined-name"
                    data-testid="outlined-name"
                    label="ชื่อ*"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                  <TextField
                    {...register("lastname")}
                    id="outlined-lastname"
                    data-testid="outlined-lastname"
                    label="นามสกุล*"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.lastname}
                    helperText={errors.lastname?.message}
                  />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                  <TextField
                    {...register("idCard")}
                    data-testid="outlined-id-card"
                    label="หมายเลขบัตรประชาชน*"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.idCard}
                    helperText={errors.idCard?.message}
                  />
                </Grid>
                <Grid size={{ xs: 4, sm: 4, md: 3 }}>
                  <TextField
                    {...register("accountNo")}
                    data-testid="outlined-account-no"
                    id="outlined-account-no"
                    label="เลขบัญชี*"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={!!errors.accountNo}
                    helperText={errors.accountNo?.message}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ my: 5, mx: 2 }} />

              {renderCategory("เอกสาร", "กรุณาอัปโหลดเอกสาร")}
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                m={"2rem 1rem"}
              >
                <Grid size={{ xs: 12, sm: 12, md: 12 }}>
                  <Box textAlign={"left"} mb={2}>
                    <input
                      type="file"
                      data-testid="input-file"
                      {...register("file")}
                      id="outlined-file"
                      style={{ display: "none" }}
                      accept=".pdf,.png,.jpg"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setValue("file", file);
                        }
                      }}
                    />
                    <Typography mr={2}>บัตรประชาชน หรือ พาสปอร์ต </Typography>
                    <Button
                      variant="contained"
                      component="span"
                      color="info"
                      onClick={() =>
                        (
                          document.getElementById(
                            "outlined-file"
                          ) as HTMLElement
                        ).click()
                      }
                    >
                      อัปโหลดเอกสาร
                    </Button>
                    <InfoTooltip title="ไฟล์ที่อัปโหลด ต้องเป็นไฟล์ .pdf, .png, .jpeg" />
                    {!!errors.file && (
                      <Typography color="error">
                        {errors.file?.message}
                      </Typography>
                    )}
                  </Box>
                  {watch("file")?.name && (
                    <Box textAlign={"left"}>{`ชื่อไฟล์ : ${
                      watch("file")?.name
                    }`}</Box>
                  )}
                </Grid>
              </Grid>

              <Box textAlign={"right"} m={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  data-testid="submit-button"
                  loading={isSubmitting}
                >
                  บันทึกข้อมูล
                </Button>
              </Box>
            </form>
          </>
        </Card>
      )}
    </>
  );
};

const renderCategory = (title: string, description: string) => (
  <Box sx={{ textAlign: "left" }} m={"1rem"}>
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
      {description}
    </Typography>
  </Box>
);

export default ConfirmView;
