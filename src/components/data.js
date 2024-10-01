const root = [
  {
    type: "folder",
    name: "Interview",
    contents: [
      {
        type: "folder",
        name: "Javascript",
        contents: [
          {
            type: "file",
            name: "index.js",
          },
          {
            type: "file",
            name: "style.css",
          },
        ],
      },
      {
        type: "folder",
        name: "ReactJS",
        contents: [
          {
            type: "folder",
            name: "src",
            contents: [
              {
                type: "file",
                name: "index.jsx",
              },
            ],
          },
          {
            type: "file",
            name: "package.json",
          },
        ],
      },
    ],
  },
  {
    type: "file",
    name: "README.md",
  },
];

export default root;
