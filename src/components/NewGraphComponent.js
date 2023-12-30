import {useState} from 'react'

const NewGraphComponent = () => {
  const [graphTitle, setGraphTitle] = useState("");
  const [graphDescription, setGraphDescription] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [layout, setLayout] = useState("default");
  const [colors, setColors] = useState({
    background: "#ffffff",
    line: "#3498db",
    point: "#e74c3c",
  });

  const handleGraphTitleChange = (e) => {
    setGraphTitle(e.target.value);
  };

  const handleGraphDescriptionChange = (e) => {
    setGraphDescription(e.target.value);
  };

  const handlePaperSelection = (paper) => {
    setSelectedPaper(paper);
  };

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  const handleColorChange = (colorType, value) => {
    setColors((prevColors) => ({ ...prevColors, [colorType]: value }));
  };

  const handlePreview = () => {
    // Add logic to preview the graph visualization
    console.log("Preview graph with settings:", {
      graphTitle,
      graphDescription,
      selectedPaper,
      layout,
      colors,
    });
  };

  return (
    <div className="p-8 bg-slate-800 min-h-[100vh]">
      <h2 className="text-2xl font-bold mb-8 text-white">Create New Graph</h2>

      <form>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="graphTitle"
          >
            Graph Title
          </label>
          <input
            type="text"
            id="graphTitle"
            className="w-full border p-2 rounded-md max-w-[800px] bg-slate-900 text-gray-300 outline-none border-none"
            value={graphTitle}
            onChange={handleGraphTitleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="graphDescription"
          >
            Graph Description
          </label>
          <textarea
            id="graphDescription"
            className="w-full border p-2 rounded-md max-w-[800px] bg-slate-900 text-gray-300 outline-none border-none"
            value={graphDescription}
            onChange={handleGraphDescriptionChange}
          />
        </div>

        {/* Add paper selection or favorites/collections here */}

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Graph Settings
          </label>
          <div className="flex space-x-4">
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Layout
              </label>
              <select
                onChange={handleLayoutChange}
                value={layout}
                className="w-full border p-2 rounded-md"
              >
                <option value="default">Default</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Background Color
              </label>
              <input
                type="color"
                value={colors.background}
                onChange={(e) =>
                  handleColorChange("background", e.target.value)
                }
                className="w-full border p-2 rounded-md"
              />
              <p className="text-slate-500">{colors.background}</p>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Line Color
              </label>
              <input
                type="color"
                value={colors.line}
                onChange={(e) => handleColorChange("line", e.target.value)}
                className="w-full border p-2 rounded-md"
              />
              <p className="text-slate-500">{colors.line}</p>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Point Color
              </label>
              <input
                type="color"
                value={colors.point}
                onChange={(e) => handleColorChange("point", e.target.value)}
                className="w-full border p-2 rounded-md"
              />
              <p className="text-slate-500">{colors.point}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="bg-slate-900 text-white px-4 py-2 rounded-md font-semibold"
          onClick={handlePreview}
        >
          Preview Graph
        </button>
        <p className='text-gray-300' >When the website is functional, the graph will be previewed here by clicking the above button.</p>
      </form>

      {/* Add graph visualization preview here */}
    </div>
  );
}

export default NewGraphComponent;
