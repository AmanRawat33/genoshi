import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-slate-900 p-2 md:p-4 box-border">
        <div className="flex w-[100%] md:w-[80%] mx-auto justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white">GRAFF</h1>
          </Link>
          <ul className="flex gap-3 text-lg">
            <Link to="/profile">
              <li className="text-slate-200 box-border font-semibold cursor-pointer hover:text-white">
                Profile
              </li>
            </Link>
            <Link to="/pricing">
              <li className="text-slate-200 box-border font-semibold cursor-pointer hover:text-white">
                Pricing
              </li>
            </Link>
            <Link to="/account-details">
              <li className="text-slate-200 box-border font-semibold cursor-pointer hover:text-white">
                Details
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
