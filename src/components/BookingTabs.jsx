import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BookingTable from './BookingTable';
import { useDarkTheme } from '../context/DarkTheme';
import { StyledBox, StyledTab } from './BookingTabs';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BookingTabs(props) {
  const [value, setValue] = React.useState(0);
  const { darkTheme } = useDarkTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: darkTheme ? 'white' : 'black', 
    '&.Mui-selected': {
      backgroundColor: darkTheme ? '#333' : '#f5f5f5', 
      color: darkTheme ? 'white' : 'black',
    },
  };

  return (
    <Box>
      <StyledBox sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <StyledTab label="All Bookings" {...a11yProps(0)} sx={tabStyle} />
          <StyledTab label="Checking In" {...a11yProps(1)} sx={tabStyle} />
          <StyledTab label="Checking Out" {...a11yProps(2)} sx={tabStyle} />
          <StyledTab label="In Progress" {...a11yProps(3)} sx={tabStyle} />
        </Tabs>
      </StyledBox>
      <CustomTabPanel value={value} index={0}>
        <BookingTable bookingsData={props.bookingsData}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BookingTable bookingsData={props.bookingsData.filter((item) => item.bookStatus === "in")}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BookingTable bookingsData={props.bookingsData.filter((item) => item.bookStatus === "out")}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BookingTable bookingsData={props.bookingsData.filter((item) => item.bookStatus === "progress")}/>
      </CustomTabPanel>
    </Box>
  );
}
