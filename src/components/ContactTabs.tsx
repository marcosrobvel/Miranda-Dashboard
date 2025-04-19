import * as React from 'react';
import { useDarkTheme } from '../context/DarkTheme';
import {
  StyledContainer,
  StyledDiv,
  StyledTab,
} from './styled-components/BookingTabs';
import ContactTable from './ContactTable';

interface Contact {
  id: number;
  date: string;
  customer: string;
  mail: string;
  phone: string;
  subject: string;
  comment: string;
  status: string;
}

interface ContactTabsProps {
  contactData: Contact[];
}

interface CustomTabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function CustomTabPanel({ children, value, index, ...other }: CustomTabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ContactTabs: React.FC<ContactTabsProps> = ({ contactData }) => {
  const [value, setValue] = React.useState<number>(0);
  const { darkTheme } = useDarkTheme();

  const handleChange = (_event: React.MouseEvent | null, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainer>
      <StyledDiv role="tablist">
        <StyledTab
          className={`tabs-table selection ${value === 0 ? 'active' : ''}`}
          role="tab"
          aria-selected={value === 0}
       /*   $active={value === 0}
          $darkTheme={darkTheme}*/
          onClick={() => handleChange(null, 0)}
          {...a11yProps(0)}
        >
          All Contacts
        </StyledTab>
        <StyledTab
          className={`tabs-table selection ${value === 1 ? 'active' : ''}`}
          role="tab"
          aria-selected={value === 1}
       /*   $active={value === 1}
          $darkTheme={darkTheme}*/
          onClick={() => handleChange(null, 1)}
          {...a11yProps(1)}
        >
          Archived
        </StyledTab>
      </StyledDiv>

      <CustomTabPanel value={value} index={0}>
        <ContactTable contactData={contactData.filter((item) => item.status !== 'archived')} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContactTable contactData={contactData.filter((item) => item.status === 'archived')} />
      </CustomTabPanel>
    </StyledContainer>
  );
};

export default ContactTabs;
