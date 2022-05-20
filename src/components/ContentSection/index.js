import React from "react";

function ContentSection(props) {
  const { currentSection } = props;

  return (
    <div className="border border-success border-2 mh-100">
      <div>This text is inside ContentSection</div>
      <div>More text</div>
    </div>
  );
}

export default ContentSection;
