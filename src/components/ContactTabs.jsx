import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDarkTheme } from '../context/DarkTheme';
import { StyledTab } from './styled-components/BookingTabs.js';
import ContactTable from './ContactTable';

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

export default function ContactTabs(props) {

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
          <StyledTab label="All Contacts" {...a11yProps(0)} sx={tabStyle} />
          <StyledTab label="Archived" {...a11yProps(1)} sx={tabStyle} />
        </Tabs>
      </StyledBox>
      <CustomTabPanel value={value} index={0}>
        <ContactTable contactData={props.contactData.filter((item) => item.status !== "archived")}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContactTable contactData={props.contactData.filter((item) => item.status === "archived")}/>
      </CustomTabPanel>
    </Box>
  );
}
