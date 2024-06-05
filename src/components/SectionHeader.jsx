import { Stack, Typography } from "@mui/material";

import ViewAllButton from "./ViewAllButton";

const SectionHeader = ({
  title,
  subtitle,
  isExpandable = false,
  isLargeTitle = false,
}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"start"}
      justifyContent={"space-between"}>
      <Stack direction={"column"}>
        <Typography
          fontWeight={"bold"}
          fontSize={isLargeTitle ? "16px" : "14px"}
          noWrap>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant={"subtitle2"}
            fontWeight={"light"}
            fontSize={"12px"}
            color={"#676666"}
            noWrap>
            {subtitle}
          </Typography>
        )}
      </Stack>
      {isExpandable && <ViewAllButton />}
    </Stack>
  );
};

export default SectionHeader;
