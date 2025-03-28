import * as React from "react";
import PropTypes from "prop-types";
import { useDarkTheme } from "../context/DarkTheme";
import BookingTable from "./BookingTable.jsx";
import { StyledContainer, StyledDiv, StyledTab } from "./styled-components/BookingTabs";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BookingTabs(props) {
  const [value, setValue] = React.useState(0);
  const { darkTheme } = useDarkTheme();

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <StyledContainer>
      <div darkTheme={darkTheme}>
        <StyledDiv role="tablist">
          <StyledTab className={`tabs-table selection ${value === 0 ? 'active' : ''}`} 
            role="tab"
            aria-selected={value === 0}
            $active={value === 0}
            darkTheme={darkTheme}
            onClick={() => handleChange(0) }
            {...a11yProps(0)}
          >
            All Bookings
          </StyledTab>
          <StyledTab className={`tabs-table selection ${value === 1 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 1}
            $active={value === 1}
            darkTheme={darkTheme}
            onClick={() => handleChange(1)}
            {...a11yProps(1)}
          >
            Checking In
          </StyledTab>
          <StyledTab className={`tabs-table selection ${value === 2 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 2}
            $active={value === 2}
            darkTheme={darkTheme}
            onClick={() => handleChange(2)}
            {...a11yProps(2)}
          >
            Checking Out
          </StyledTab>
          <StyledTab className={`tabs-table selection ${value === 3 ? 'active' : ''}`}
            role="tab"
            aria-selected={value === 3}
            $active={value === 3}
            darkTheme={darkTheme}
            onClick={() => handleChange(3)}
            {...a11yProps(3)}
          >
            In Progress
          </StyledTab>
        </StyledDiv>
      </div>
      <CustomTabPanel value={value} index={0}>
        <BookingTable bookingsData={props.bookingsData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <BookingTable
          bookingsData={props.bookingsData.filter(
            (item) => item.bookStatus === "in"
          )}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BookingTable
          bookingsData={props.bookingsData.filter(
            (item) => item.bookStatus === "out"
          )}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BookingTable
          bookingsData={props.bookingsData.filter(
            (item) => item.bookStatus === "progress"
          )}
        />
      </CustomTabPanel>
    </StyledContainer>
  );
}
