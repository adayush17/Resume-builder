import React, { useEffect, useRef, useState } from "react";
import "./Body.scss";
import { Download } from "react-feather";
import ReactToPrint from "react-to-print";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

const Body = () => {
  const color = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRefrence = useRef();

  const [activeColor, setActiveColor] = useState(color[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className="body">
      <p className="heading">
        Build Your Resume Here
        <span> Resume Builder</span>
      </p>
      <div className="toolbar">
        <div className="colors">
          {color.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${"color"} ${activeColor === item ? "active" : ""}`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <Download />
              </button>
            );
          }}
          content={() => resumeRefrence.current}
        />
      </div>
      <div className="main">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRefrence}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
};

export default Body;
