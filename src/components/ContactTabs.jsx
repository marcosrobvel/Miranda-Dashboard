import * as React from "react";
import PropTypes from "prop-types";
import { useDarkTheme } from "../context/DarkTheme";
import { StyledContainer, StyledDiv, StyledTab } from "./styled-components/BookingTabs.js";
import ContactTable from "./ContactTable";

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

export default function ContactTabs(props) {
  const [value, setValue] = React.useState(0);
  const { darkTheme } = useDarkTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    color: darkTheme ? "white" : "black",
    "&.Mui-selected": {
      backgroundColor: darkTheme ? "#333" : "#f5f5f5",
      color: darkTheme ? "white" : "black",
    },
  };

  return (
    <StyledContainer>
      <StyledDiv role="tablist">
        <StyledTab
          className={`tabs-table selection ${value === 0 ? "active" : ""}`}
          role="tab"
          aria-selected={value === 0}
          $active={value === 0}
          $darkTheme={darkTheme}
          onClick={() => handleChange(null, 0)}
          {...a11yProps(0)}
        >
          All Contacts
        </StyledTab>
        <StyledTab
          className={`tabs-table selection ${value === 1 ? "active" : ""}`}
          role="tab"
          aria-selected={value === 1}
          $active={value === 1}
          $darkTheme={darkTheme}
          onClick={() => handleChange(null, 1)}
          {...a11yProps(1)}
        >
          Archived
        </StyledTab>
      </StyledDiv>

      <CustomTabPanel value={value} index={0}>
        <ContactTable
          contactData={props.contactData.filter(
            (item) => item.status !== "archived"
          )}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContactTable
          contactData={props.contactData.filter(
            (item) => item.status === "archived"
          )}
        />
      </CustomTabPanel>
    </StyledContainer>
  );
}
