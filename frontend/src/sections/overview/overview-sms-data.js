import PropTypes from "prop-types";
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';

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
import { filterDataByStatus } from "src/utils/filter-data";
import { useState } from "react";

export const OverviewSmsData = (props) => {
  const { sx, data } = props;
  const [text,setText]=useState("Used");
  let callingData = filterDataByStatus(data, "SMS", text.toUpperCase());
 
  const toggle=(text)=>{
    let newText=text==="Used"? "Unused" :"Used";
    setText(newText);
  }

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
            {`SMS ${text} Data`}
            </Typography>
            <Typography variant="h4">{callingData.length}</Typography>
           
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
            <ListBulletIcon />
            </SvgIcon>
          </Avatar>
        </Stack>

        <CardActions sx={{ justifyContent: "flex-end" }} style={{ "marginBottom": "-25px" }}>
         
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
             {`View ${text==="Used"?"Unused":"Used"}`}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

OverviewSmsData.propTypes = {
  data: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
