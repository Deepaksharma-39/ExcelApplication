import Head from "next/head";
import { Box, Container, Divider, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewData } from "src/sections/overview/overview-data";
import { OverviewCityCount } from "src/sections/overview/overview-city-data";
import { OverviewTelecallingData } from "src/sections/overview/overview-telecalling-data";
import { OverviewWhatsAppData } from "src/sections/overview/overview-whatsapp-data";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { useData } from "src/hooks/use-data";
import {
  filterDataByStatus,
  overallData,
} from "src/utils/filter-data";
import { OverviewSmsData } from "src/sections/overview/overview-sms-data";
import { OverviewEmailData } from "src/sections/overview/overview-email-data";
import { OverviewIVRData } from "src/sections/overview/overview-ivr-data";

const Page = () => {
  const { data } = useData();

  console.log("index.js data", data);
  const totalData = data.length;
  
  const cityCounts = overallData(data);
  const usedWhatsappData = filterDataByStatus(data, "WHATS APP", "USED");
  const usedCallingData = filterDataByStatus(data, "CALLING", "USED");
  const usedEmailData = filterDataByStatus(data, "EMAIL", "USED");
  const usedSmsData = filterDataByStatus(data, "SMS", "USED");
  const usedIVRData = filterDataByStatus(data, "IVR", "USED");
  return (
    <>
      <Head>
        <title>Overview | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={1} >
            <Grid xs={12} sm={6} lg={3}>
              <OverviewData sx={{ height: "100%" }} value={totalData} />
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <OverviewTelecallingData sx={{ height: "100%" }} data={usedCallingData} />
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <OverviewWhatsAppData sx={{ height: "100%" }} data={usedWhatsappData} />
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <OverviewSmsData sx={{ height: "100%" }} data={usedSmsData} />
            </Grid>

            <Divider/>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewEmailData sx={{ height: "100%" }} data={usedEmailData} />
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <OverviewIVRData sx={{ height: "100%" }} data={usedIVRData} />
            </Grid>

            <Grid xs={12} md={12} lg={8}>
              <OverviewCityCount cities={cityCounts} sx={{ height: "100%",}} />
            </Grid>
            <Grid xs={12} md={12} lg={8} sx={{width: "100px"}}>
              <OverviewCityCount cities={cityCounts} sx={{ height: "100%"}} />
            </Grid>

           
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
