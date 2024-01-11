import PropTypes from "prop-types";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
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

export const OverviewWhatsAppData = (props) => {
  const { sx, data } = props;
  const [text,setText]=useState("Used");
  let callingData = filterDataByStatus(data, "WHATS APP", text.toUpperCase());
 
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
            {`whatsapp ${text} Data`}
            </Typography>
            <Typography variant="h4">{callingData.length}</Typography>
          
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <UsersIcon />
            </SvgIcon>
          </Avatar>
        </Stack>

        <CardActions sx={{ justifyContent: "flex-end" }} style={{ "marginBottom": "-20px" }}>
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

OverviewWhatsAppData.propTypes = {
  data: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
