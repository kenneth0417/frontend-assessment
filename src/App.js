import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Parser from "html-react-parser";
import data from "./data.json";
import "./App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = useState("panel0");

  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="tabs-container">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            {data.map((tab, idx) => (
              <Tab label={tab.title} {...a11yProps(idx)} key={idx} />
            ))}
          </Tabs>
        </Box>
        {data.map((tab, idx) => (
          <TabPanel value={value} index={idx} key={idx}>
            {Parser(tab.content)}
          </TabPanel>
        ))}
      </div>
      <div className="accordion-container">
        <Box
          sx={{ textAlign: "center", marginBottom: "10px", padding: "10px" }}
        >
          <Typography variant="h5">SECTIONS</Typography>
        </Box>
        {data.map((accord, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === `panel${idx}`}
            onChange={handleAccordion(`panel${idx}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${idx}bh-content`}
              id={`panel${idx}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }} variant="h6">
                {accord.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{Parser(accord.content)}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default App;
