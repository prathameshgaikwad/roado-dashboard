import { Stack, Typography } from "@mui/material";

import ViewAllButton from "./ViewAllButton";

const SectionHeader = ({
  title,
  subtitle,
  isExpandable = false,
  isLargeTitle = false,
  url,
  hasArrow,
}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"start"}
      justifyContent={"space-between"}>
      <Stack direction={"column"}>
        <Typography
          fontWeight={"500"}
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
      {isExpandable && (
        <ViewAllButton url={url} isLarge={isLargeTitle} hasArrow={hasArrow} />
      )}
    </Stack>
  );
};

export default SectionHeader;
