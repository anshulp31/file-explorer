import { useState } from "react";

export default function FileExplorer({ folderData }) {
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <div className="container">
      <h5 onClick={handleClick}>
        {folderData.type === "folder" ? "📁" : "📄"}
        <span>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((child, ind) => (
          <FileExplorer folderData={child} key={ind} />
        ))}
    </div>
  );
}
