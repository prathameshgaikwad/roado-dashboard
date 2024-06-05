import {
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  Stack,
  Typography,
} from "@mui/material";

const CustomAlert = ({ content, title, imgSrc, loadNo, billTo, date }) => {
  return (
    <Card sx={{ borderRadius: "16px", boxShadow: "0px 2px 8px 0px #1A38750D" }}>
      <CardContent>
        <Stack direction={"row"} alignItems={"start"}>
          <Icon
            sx={{
              width: "36px",
              height: "36px",
              background: "#E0EAFF",
              boxShadow: "0px 0px 2px 0px #D0414126",
              borderRadius: "4px",
            }}>
            <img
              src={`public/${imgSrc}.svg`}
              style={{ width: "20px", height: "20px" }}
            />
          </Icon>
          <Stack direction={"column"} ml={"8px"}>
            <Typography
              fontSize={"14px"}
              fontWeight={"500"}
              sx={{ color: "#111" }}>
              {title}
            </Typography>
            <Typography
              fontSize={"10px"}
              fontWeight={"400"}
              sx={{ color: "#111" }}>
              Load No. {loadNo}, Bill To. {billTo}
            </Typography>
          </Stack>
          <Typography
            fontSize={"12px"}
            fontWeight={"400"}
            sx={{ color: "#111", ml: "auto" }}>
            {date}
          </Typography>
        </Stack>
        <Typography
          fontSize={"12px"}
          fontWeight={"400"}
          lineHeight={"16px"}
          textAlign={"left"}
          mt={"16px"}>
          {content}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end", gap: 6, mr: 1, mb: 1 }}>
        <Button
          size="small"
          variant="text"
          sx={{
            color: "#1A3875",
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "400",
            textDecoration: "underline",
            height: "30px",
            borderRadius: "4px",
          }}>
          Ignore
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: "#1A3875",
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "400",
          }}>
          Resolve
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomAlert;
