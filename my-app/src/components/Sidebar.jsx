const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-full md:w-72 p-6 flex flex-col items-center rounded-xl shadow-lg">
      <img
        src="/avatar.png"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">Sarthak Thorat</h2>
      <span className="text-sm bg-gray-700 px-3 py-1 rounded-full mt-2 mb-4">Physicist</span>

      <ul className="text-sm space-y-2 text-center">
        <li>Email: <a href="mailto:thoratsharthak@..." className="text-yellow-500">click</a></li>
        <li>Birthday: September 24, 2002</li>
        <li>Location: Mumbai, India</li>
      </ul>

      {/* Social links here */}
    </aside>
  );
};

export default Sidebar;
