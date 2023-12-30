import {useState} from 'react'

const AccountDetails = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] =
    useState("Pro");
  const [googleLinked, setGoogleLinked] = useState(false);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubscriptionPlanChange = (e) => {
    setSelectedSubscriptionPlan(e.target.value);
  };

  const handleLinkGoogleAccount = () => {
    // Logic will be added here to link/unlink Google account
    setGoogleLinked(!googleLinked);
  };

  const handleViewUsageStatistics = () => {
    // Logic will be added here to view usage statistics
    console.log("Viewing usage statistics");
  };

  const handleUpdateProfile = () => {
    // Logic will be added here to update user profile details
    console.log("Updating profile details:", { newName, newEmail });
  };

  const handleChangePassword = () => {
    // Logic will be added here  to change the user's password
    console.log("Changing password:", { currentPassword, newPassword });
  };

  const handleManageSubscription = () => {
    // Logic will be added here to manage subscription plan
    console.log("Managing subscription plan:", selectedSubscriptionPlan);
  };

  return (
    <div className="p-8 min-h-[100vh] bg-slate-800">
      <h2 className="text-3xl font-bold mb-8 text-white">Account Settings</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">
          Update User Profile
        </h3>
        <label className="block text-gray-300 text-md font-bold mb-2">
          New Name
        </label>
        <input
          type="text"
          className="w-full border p-2 rounded-md max-w-[450px] outline-none border-none"
          value={newName}
          onChange={handleNameChange}
        />
        <label className="block text-gray-300 text-md font-bold mb-2 mt-2">
          New Email
        </label>
        <input
          type="email"
          className="w-full border p-2 rounded-md max-w-[450px] outline-none border-none"
          value={newEmail}
          onChange={handleEmailChange}
        />
        <button
          type="button"
          className="mt-4 bg-slate-900 text-white font-semibold px-4 py-2 rounded-md block"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">
          Change Password
        </h3>
        <label className="block text-gray-300 text-md font-bold mb-2">
          Current Password
        </label>
        <input
          type="password"
          className="w-full border p-2 rounded-md max-w-[450px] outline-none border-none"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <label className="block text-gray-300 text-md font-bold mb-2 mt-2">
          New Password
        </label>
        <input
          type="password"
          className="w-full border p-2 rounded-md max-w-[450px] outline-none border-none"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <label className="block text-gray-300 text-md font-bold mb-2 mt-2">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full border p-2 rounded-md max-w-[450px] outline-none border-none"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button
          type="button"
          className="mt-4 bg-slate-900 text-white font-semibold px-4 py-2 rounded-md block"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">
          Manage Subscription Plan
        </h3>
        <label className="block text-gray-300 text-md font-bold mb-2">
          Select Plan
        </label>
        <select
          className="border p-2 rounded-md w-30 text-white cursor-pointer bg-slate-900 mr-4 outline-none border-none"
          onChange={handleSubscriptionPlanChange}
          value={selectedSubscriptionPlan}
        >
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Enterprise">Enterprise</option>
        </select>
        <button
          type="button"
          className="mt-4 bg-slate-900 text-white font-semibold px-4 py-2 rounded-md block"
          onClick={handleManageSubscription}
        >
          Manage Subscription
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-200">
          Link Third-Party Accounts
        </h3>
        <button
          type="button"
          className={`font-semibold bg-${
            googleLinked ? "red" : "green"
          }-500 text-white px-4 py-2 rounded-md`}
          onClick={handleLinkGoogleAccount}
        >
          {googleLinked ? "Unlink Google Account" : "Link Google Account"}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-200">
          View Usage Statistics
        </h3>
        <button
          type="button"
          className="bg-slate-900 text-white font-semibold px-4 py-2 rounded-md"
          onClick={handleViewUsageStatistics}
        >
          View Usage Statistics
        </button>
      </div>
    </div>
  );
}

export default AccountDetails
