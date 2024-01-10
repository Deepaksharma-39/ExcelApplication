import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Card,
  CardHeader,
  
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";

export const OverviewCityCount = (props) => {
  const { cities = {}, sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="City Data" />
      <Scrollbar sx={{}}>
        <Box sx={{}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr. No</TableCell>
                <TableCell>CITY</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Object.entries(cities).map(([city, count], index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{city}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

OverviewCityCount.prototype = {
  orders: PropTypes.object,
  sx: PropTypes.object,
};
