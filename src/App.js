
import "./App.css";
import NavBar from "./component/NavBar";
import Profile from "./component/Profile";

// eslint-disable-next-line
import SideNavigation from "./component/SideNavigation";

function App() {
  return (
    <div className="h-[100vh]">
      <div className="flex gap-10">
        {/* <h1 className=''>hello NFT</h1> */}
        <SideNavigation />
        <NavBar/>
        <Profile />
        {/* <PhotoDiv/> */}
      </div>
    </div>
  );
}

export default App;
