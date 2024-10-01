import React from "react";
import styles from "./myApp.module.css";
import rootFolder from "./data";

function FolderStructure(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const node = props.root;
  const isfolder = node.type === "folder";

  console.log(props.path);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  function handleAddNew(e) {
    e.stopPropagation();
    node.contents.push({
      type: "file",
      name: "index.js",
    });
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <span>{isfolder ? (isOpen ? "▼" : "▶") : "📁"}</span>{" "}
        <span>{node.name}</span>{" "}
        {isfolder && <span onClick={handleAddNew}>+</span>}
      </div>
      <div style={{ display: isOpen ? "block" : "none" }}>
        {node.contents &&
          node.contents.map((content) => (
            <FolderStructure
              root={content}
              path={[...props.path, content.name]}
            />
          ))}
      </div>
    </div>
  );
}

function MainComponent() {
  // const [rootFolderState, setRootFolderState] = React.useState(rootFolder);

  // function handler(path, newNode) {
  // }

  return (
    <div>
      {rootFolder.map((node) => (
        <FolderStructure root={node} path={[node.name]} />
      ))}
    </div>
  );
}

export default MainComponent;
