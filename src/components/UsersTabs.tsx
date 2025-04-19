import * as React from 'react';
import PropTypes from 'prop-types';
import { useDarkTheme } from '../context/DarkTheme';
import { StyledContainer, StyledDiv, StyledTab } from './styled-components/BookingTabs';
import UsersTable from './UsersTable';

interface User {
  id: number;
  photo: string;
  name: string;
  mail: string;
  job: string;
  startDate: string;
  phone: string;
  status: string;
}

interface UsersTabsProps {
  usersData: User[]; 
}

interface CustomTabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UsersTabs: React.FC<UsersTabsProps> = ({ usersData }) => {
  const [value, setValue] = React.useState<number>(0); 
const { darkTheme } = useDarkTheme();

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainer>
      <StyledDiv role="tablist">
        <StyledTab
          className={`tabs-table selection ${value === 0 ? 'active' : ''}`}
          role="tab"
          aria-selected={value === 0}
          onClick={() => handleChange(0)}
          {...a11yProps(0)}
        >
          All Employee
        </StyledTab>
        <StyledTab
          className={`tabs-table selection ${value === 1 ? 'active' : ''}`}
          role="tab"
          aria-selected={value === 1}
     /*     $active={value === 1}
          $darkTheme={darkTheme}*/
          onClick={() => handleChange(1)}
          {...a11yProps(1)}
        >
          Active Employee
        </StyledTab>
        <StyledTab
          className={`tabs-table selection ${value === 2 ? 'active' : ''}`}
          role="tab"
          aria-selected={value === 2}
       /*   $active={value === 2}
          $darkTheme={darkTheme}*/
          onClick={() => handleChange(2)}
          {...a11yProps(2)}
        >
          Inactive Employee
        </StyledTab>
      </StyledDiv>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <UsersTable usersData={usersData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UsersTable usersData={usersData.filter(item => item.status === "active")} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <UsersTable usersData={usersData.filter(item => item.status === "inactive")} />
      </CustomTabPanel>
    </StyledContainer>
  );
};

export default UsersTabs;
