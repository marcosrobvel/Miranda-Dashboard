import * as React from 'react';
import { useDarkTheme } from '../context/DarkTheme';
import BookingTable from './BookingTable';
import {
  StyledButton,
  StyledContainer,
  StyledDiv,
  StyledTab,
} from './styled-components/BookingTabs';
import { useNavigate } from 'react-router-dom';

interface Booking {
  id: number;
  guest: string;
  orderDate: string;
  checkIn?: string;
  check_in?: string;
  checkOut?: string;
  check_out?: string;
  special?: string;
  special_request?: string;
  roomType: string;
  roomNumber?: string;
  bookStatus: string;
}

interface BookingTabsProps {
  bookings: Booking[];
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

const BookingTabs: React.FC<BookingTabsProps> = ({ bookings }) => {
  const [value, setValue] = React.useState<number>(0);
  const { darkTheme } = useDarkTheme();
  const navigate = useNavigate();

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleClick = () => {
    navigate('/newbooking');
  };

  return (
    <StyledContainer>
      <div dark-theme={darkTheme.toString()}>
        <StyledDiv role="tablist">
          <StyledTab
            className={`tabs-table selection ${value === 0 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 0}
            onClick={() => handleChange(0)}
            {...a11yProps(0)}
          >
            All Bookings
          </StyledTab>
          <StyledTab
            className={`tabs-table selection ${value === 1 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 1}
            onClick={() => handleChange(1)}
            {...a11yProps(1)}
          >
            Checking In
          </StyledTab>
          <StyledTab
            className={`tabs-table selection ${value === 2 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 2}
            onClick={() => handleChange(2)}
            {...a11yProps(2)}
          >
            Checking Out
          </StyledTab>
          <StyledTab
            className={`tabs-table selection ${value === 3 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 3}
            onClick={() => handleChange(3)}
            {...a11yProps(3)}
          >
            In Progress
          </StyledTab>

          <StyledButton onClick={handleClick}>New Booking</StyledButton>
        </StyledDiv>
      </div>

      <CustomTabPanel value={value} index={0}>
        <BookingTable bookingsData={bookings} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BookingTable bookingsData={bookings.filter((item) => item.bookStatus === 'in')} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BookingTable bookingsData={bookings.filter((item) => item.bookStatus === 'out')} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BookingTable bookingsData={bookings.filter((item) => item.bookStatus === 'progress')} />
      </CustomTabPanel>
    </StyledContainer>
  );
};

export default BookingTabs;
