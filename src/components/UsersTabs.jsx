import * as React from 'react';
import PropTypes from 'prop-types';
import { useDarkTheme } from '../context/DarkTheme';
import { StyledContainer, StyledDiv, StyledTab } from './styled-components/BookingTabs.js';
import UsersTable from './UsersTable';

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
      {value === index && <div>{children}</div>}
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

export default function UsersTabs(props) {
  const [value, setValue] = React.useState(0);
  const { darkTheme } = useDarkTheme();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <StyledContainer>
        <StyledDiv role="tablist">
          <StyledTab className={`tabs-table selection ${value === 0 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 0}
            $active={value === 0}
            $darkTheme={darkTheme}
            onClick={() => handleChange(0)}
            {...a11yProps(0)}
          >
            All Employee
          </StyledTab>
          <StyledTab className={`tabs-table selection ${value === 1 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 1}
            $active={value === 1}
            $darkTheme={darkTheme}
            onClick={() => handleChange(1)}
            {...a11yProps(1)}
          >
            Active Employee
          </StyledTab>
          <StyledTab className={`tabs-table selection ${value === 2 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 2}
            $active={value === 2}
            $darkTheme={darkTheme}
            onClick={() => handleChange(2)}
            {...a11yProps(2)}
          >
            Inactive Employee
          </StyledTab>
        </StyledDiv>
      
      <CustomTabPanel value={value} index={0}>
        <UsersTable usersData={props.usersData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UsersTable usersData={props.usersData.filter(item => item.status === "active")} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UsersTable usersData={props.usersData.filter(item => item.status === "inactive")} />
      </CustomTabPanel>
    </StyledContainer>
  );
}