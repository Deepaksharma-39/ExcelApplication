import PropTypes from "prop-types";
import SpeakerWaveIcon from '@heroicons/react/24/solid/SpeakerWaveIcon';

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import { useState } from "react";
import { filterDataByStatus } from "src/utils/filter-data";
import { handleDownload } from "src/utils/download-data";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";

export const OverviewIVRData = (props) => {
  const { sx, data } = props;
  const [text,setText]=useState("Used");
  let callingData = filterDataByStatus(data, "IVR", text.toUpperCase());
 
  const toggle=(text)=>{
    let newText=text==="Used"? "Fresh" :"Used";
    setText(newText);
  }

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
            {`ivr ${text} Data`}
            </Typography>
            <Typography variant="h4">{callingData.length}</Typography>
           
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
            <SpeakerWaveIcon />
            </SvgIcon>
          </Avatar>
        </Stack>

        <CardActions sx={{ justifyContent: "space-between" }} style={{ "marginBottom": "-25px" }}>
        <Button
            color="text.secondary"
            endIcon={
              <SvgIcon fontSize="small">
              <ArrowDownOnSquareIcon />
            </SvgIcon>
            }
            size="small"
            variant="caption"
            onClick={()=>{
              handleDownload(callingData,text)
            }}
            >
            Download
          </Button>
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
            variant="text"
            onClick={()=>{
              toggle(text);
            }}
          >
             {`View ${text==="Used"?"Fresh":"Used"}`}
          </Button>
         
        </CardActions>
      </CardContent>
    </Card>
  );
};

OverviewIVRData.propTypes = {
  data: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
