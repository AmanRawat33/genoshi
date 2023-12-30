const GraphDetailsComponents = () => {
  const graphDetails = {
    title: "Sample Graph",
    description: "This is a sample graph description.",
    dateCreated: "2023-01-15",
  };

  const papersInGraph = [
    { id: 1, title: "Paper 1", favorite: true },
    { id: 2, title: "Paper 2", favorite: false },
    { id: 3, title: "Paper 3", favorite: true },
  ];

  const handleEditPaper = (paperId) => {
    // Add logic to edit paper
    console.log(`Editing paper with ID ${paperId}`);
  };

  const handleRemovePaper = (paperId) => {
    // Add logic to remove paper
    console.log(`Removing paper with ID ${paperId}`);
  };

  const handleShareGraph = () => {
    // Add logic to share the graph
    console.log("Sharing the graph");
  };

  const handleDeleteGraph = () => {
    // Add logic to delete the graph
    console.log("Deleting the graph");
  };

  return (
    <div className="p-8 bg-slate-800 min-h-[100vh]">
      <h2 className="text-2xl font-bold mb-8 text-white">{graphDetails.title}</h2>

      <div className="mb-4">
        <p className="text-gray-300 mb-2">{graphDetails.description}</p>
        <p className="text-gray-300 mb-2">
          Date Created: {graphDetails.dateCreated}
        </p>
      </div>

      <button
        type="button"
        className="bg-slate-900 text-white px-4 py-2 rounded-md mb-4 font-semibold"
        onClick={() => console.log("Navigate to the graph")}
      >
        Go to Graph
      </button>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-white">Papers in the Graph</h3>
        <ul>
          {papersInGraph.map((paper) => (
            <li
              key={paper.id}
              className="flex justify-between items-center border p-2 mb-2"
            >
              <span>{paper.title}</span>
              <div>
                <button
                  type="button"
                  className="text-blue-500 mr-2"
                  onClick={() => handleEditPaper(paper.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-red-500 mr-2"
                  onClick={() => handleRemovePaper(paper.id)}
                >
                  Remove
                </button>
                <span
                  className={`text-${paper.favorite ? "yellow" : "gray"}-500`}
                >
                  {paper.favorite ? "★" : "☆"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={handleShareGraph}
        >
          Share Graph
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleDeleteGraph}
        >
          Delete Graph
        </button>
      </div>
    </div>
  );
};

export default GraphDetailsComponents;
