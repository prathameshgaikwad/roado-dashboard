import { Card, CardContent, Typography } from "@mui/material";

const DataCard = ({ title, subtitle, moreInfo, color }) => {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "4px", borderColor: "#CBCBCB" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}>
        <Typography
          variant={"subtitle1"}
          fontWeight={"bold"}
          fontSize={"12px"}
          sx={{ color: "#676666" }}
          noWrap>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant={"h6"}
            fontWeight={"bold"}
            fontSize={"16px"}
            color={color}
            noWrap>
            {subtitle}
          </Typography>
        )}
        {moreInfo && (
          <Typography
            variant={"h6"}
            fontWeight={"light"}
            fontSize={"12px"}
            sx={{ color: "#676666" }}
            noWrap>
            {moreInfo}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DataCard;
