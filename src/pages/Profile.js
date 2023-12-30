import { Link } from "react-router-dom";

const UserProfileDetails = ({ name, email, profilePhoto, bio }) => (
  <div className="border-none p-4 mb-4 bg-slate-900 rounded-lg shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
      alt="Profile"
      className="rounded-full w-16 h-16 mb-2 bg-contain"
    />
    <h2 className="text-xl font-bold text-white">{name}</h2>
    <p className="text-gray-300">{email}</p>
    <p className="text-gray-300">{bio}</p>
  </div>
);

const AccountDetails = ({ subscriptionPlan, status }) => (
  <div className="border-none p-4 mb-4 bg-slate-900 rounded-lg shadow-2xl">
    <h2 className="text-xl font-bold text-white">Account Details</h2>
    <p className="text-gray-300">Subscription Plan: {subscriptionPlan}</p>
    <p className="text-gray-300">Status: {status}</p>
  </div>
);

const UsageMetrics = ({ graphsCreated, graphsShared, papersCollected }) => (
  <div className="border-none p-4 mb-4 bg-slate-900 rounded-lg shadow-2xl">
    <h2 className="text-xl font-bold text-white">Usage Metrics</h2>
    <p className="text-gray-300">Graphs Created: {graphsCreated}</p>
    <p className="text-gray-300">Graphs Shared: {graphsShared}</p>
    <p className="text-gray-300">Papers Collected: {papersCollected}</p>
  </div>
);

const RecentActivityFeed = ({ recentGraphs, collections, queries }) => (
  <div className="border-none p-4 mb-4 bg-slate-900 rounded-lg shadow-2xl">
    <h2 className="text-xl font-bold text-white">Recent Activity Feed</h2>
    <p className="text-gray-300">
      This section will contain the recent activity feed.
    </p>
  </div>
);

const ButtonsSection = () => (
  <div className="flex space-x-4 mb-4">
    <Link to="/new-graph">
      <button className="bg-slate-900 text-white px-4 py-2 rounded-md font-semibold ">
        Create New Graph
      </button>
    </Link>
    <Link to="/graph-details">
      <button className="bg-slate-900 text-white px-4 py-2 rounded-md font-semibold ">
        Graph Details
      </button>
    </Link>
    <button className="bg-slate-900 text-white px-4 py-2 rounded-md font-semibold">
      Share Graphs
    </button>
    <button className="bg-slate-900 text-white px-4 py-2 rounded-md font-semibold">
      Upload Papers
    </button>
  </div>
);

const SavedGraphsList = ({ savedGraphs }) => (
  <div>
    <h2 className="text-xl font-bold mb-4 text-white">Saved Graphs</h2>
    <p className="text-gray-300">
      This section will display list of saved graphs with title, date created,
      preview thumbnail
    </p>
  </div>
);

const LinkToFavouritesAndCollections = () => (
  <div className="text-white font-semibold mt-2">
    <button className="px-2 py-1 border-none bg-slate-900 mr-2">
      Favorites
    </button>
    <button className="px-2 py-1 border-none bg-slate-900">Collections</button>
  </div>
);
const Profile = () => {
  const userProfile = {
    name: "Aman Rawat",
    email: "aman.rawat@gmail.com",
    profilePhoto: "profile.jpg",
    bio: "This is the profile bio",
  };

  const accountDetails = {
    subscriptionPlan: "Pro Plan",
    status: "Active",
  };

  const usageMetrics = {
    graphsCreated: 25,
    graphsShared: 10,
    papersCollected: 5,
  };

  const recentActivity = {
    recentGraphs: [],
    collections: [],
    queries: [],
  };

  const savedGraphs = [
    {
      title: "Graph 1",
      dateCreated: "2023-01-15",
      previewThumbnail: "graph1.jpg",
    },
    {
      title: "Graph 2",
      dateCreated: "2023-02-10",
      previewThumbnail: "graph2.jpg",
    },
    // Add more saved graphs
  ];

  return (
    <>
      <div className=" p-8 bg-slate-800">
        <UserProfileDetails {...userProfile} />
        <AccountDetails {...accountDetails} />
        <UsageMetrics {...usageMetrics} />
        <RecentActivityFeed {...recentActivity} />
        <ButtonsSection />
        <SavedGraphsList savedGraphs={savedGraphs} />
        <LinkToFavouritesAndCollections />
      </div>
    </>
  );
};

export default Profile;
