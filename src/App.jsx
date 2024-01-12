import axios from "axios";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Landing from "./pages/Landing";
import Resistration from "./pages/Resistration";
import Login from "./pages/Login/Login";
import SupportLogin from "./pages/Login/SupportLogin";
import Signup from "./pages/Signup";
import Anwesh from "./pages/Anwesh";
import Ahwan from "./pages/Ahwan";
import Akanksha from "./pages/Akanksha";
import About from "./pages/About";
import Coordinators from "./pages/Coordinators";
import EventDetails from "./pages/EventDetails";
import OrganiserProfile from "./pages/OrganiserProfile";
import AnweshWinnerPage from "./pages/AnweshWinnerPage";
import AhwanWinnerPage from "./pages/AhwanWinnerPage";
import AkankshaWinnersPage from "./pages/AkankshaWinnersPage";
import AhwanEventBoys from "./pages/AhwanEventBoys";
import AhwanEventGirls from "./pages/AhwanEventGirls";
import OrganiserSetting from "./pages/OrganiserSetting";
import OrganiserNotification from "./pages/OrganiserNotification";
import OrganiserHelp from "./pages/OrganiserHelp";
import EventInchargeProfile from "./pages/EventInchargeProfile";
import EventInchargeSettings from "./pages/EventInchargeSettings";
import EventInchargeNotifications from "./pages/EventInchargeNotifications";
import EventInchargeHelp from "./pages/EventInchargeHelp";
import EventCoordinatorProfile from "./pages/EventCoordinatorProfile";
import EventCoordinatorSettings from "./pages/EventCoordinatorSettings";
import EventCoordinatorsNotifications from "./pages/EventCoordinatorsNotifications";

import HelpSupportProfile from "./pages/HelpSupportProfile";
import HelpSupportSettings from "./pages/HelpSupportSettings";
import HelpSupportNotification from "./pages/HelpSupportNotification";
import EventParticipants from "./pages/EventParticipants";
import NavToPages from "./pages/NavToPages";
import TechFestEvents from "./pages/TechFestEvents";
import Robotics from "./pages/Robotics";

import EventCoordinatorsHelp from "./pages/EventCoordinatorsHelp";

import Responsibility from "./pages/Input/Responsibility";
import InputEventDetailsForm from "./pages/Input/InputEventDetailsForm";
import FestCoordinators from "./pages/FestCoordinators";
import FestCoordinatorInFo from "./Components/Fest-Coordinators/FestCoordinatorInFo";
import CreditsPage from "./pages/CreditsPage";
import Gallery from "./pages/Gallery/Gallery";
import Photoes from "./pages/Gallery/Photoes";
import Videos from "./pages/Gallery/Videos";
import AkankshaRegistrationPage from "./pages/Input/AkankshaRegistrationPage";

export default function App() {
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // useEffect(() => {
  //   const handleLoad = async () => {
  //     if (!isSubscribed) {
  //       try {
  //         let sw = await navigator.serviceWorker.register("./sw.js");
  //         let swr = await navigator.serviceWorker.ready;

  //         let push = await swr.pushManager.subscribe({
  //           userVisibleOnly: true,
  //           applicationServerKey:
  //             "BISAreb3fNmlV-FimMn5XurLbzpV937QrnrPc-m_6IfP04eNZxh0XVownuigLDGkcGDwFE6lf3hcSJhNCLI1dms",
  //         });

  //         const entry = await axios.post(
  //           "http://localhost:3000/notifications/receive",
  //           JSON.stringify(push),
  //           {
  //             headers: {
  //               Accept: "application/json",
  //               "Content-Type": "application/json;charset=UTF-8",
  //             },
  //           }
  //         );
  //         setIsSubscribed(true);
  //       } catch (error) {
  //         console.log("error subscribing to notifications", error);
  //       }
  //     }
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, [isSubscribed]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/coordinators" element={<Coordinators />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Resistration />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />


          {/* Organiser  */}
          
        <Route path="/organiser/Profile" element={<OrganiserProfile />} />
        <Route path="/organiser/Settings" element={<OrganiserSetting />} />
        <Route path="/organiser/Help" element={<OrganiserHelp />} />

        <Route
          path="/organiser/Notifications"
          element={<OrganiserNotification />}
        />
        <Route path="/anwesh" element={<Anwesh />} />
        <Route path="/ahwan" element={<Ahwan />} />
        <Route path="/akanksha" element={<Akanksha />} />
        <Route
          path="/akanksha/registrationPage"
          element={<AkankshaRegistrationPage />}
        />
        <Route path="/help" element={<Help />} />
        <Route path="/anweshWinners" element={<AnweshWinnerPage />} />
        <Route path="/ahwanWinners" element={<AhwanWinnerPage />} />
        <Route path="/akankshaWinners" element={<AkankshaWinnersPage />} />
        <Route path="/ahwanBoys" element={<AhwanEventBoys />} />
        <Route path="/ahwanGirls" element={<AhwanEventGirls />} />

        {/* Event Incharge  */}

        <Route
          path="/eventIncharge/Profile"
          element={<EventInchargeProfile />}
        />
        <Route
          path="/eventIncharge/Settings"
          element={<EventInchargeSettings />}
        />
        <Route
          path="/eventIncharge/Notifications"
          element={<EventInchargeNotifications />}
        />
        <Route path="/eventIncharge/Help" element={<EventInchargeHelp />} />

        {/* Event Coordinators  */}
        <Route
          path="/eventCoordinator/Profile"
          element={<EventCoordinatorProfile />}
        />
        <Route
          path="/eventCoordinator/Settings"
          element={<EventCoordinatorSettings />}
        />
        <Route
          path="/eventCoordinator/Notifications"
          element={<EventCoordinatorsNotifications />}
        />
        <Route
          path="/eventCoordinator/Help"
          element={<EventCoordinatorsHelp />}
        />
        {/* <Route
                    path="/helpSupportNotifications"
                    element={<HelpSupportNotification />}
                /> */}
        <Route path="/eventParticipants" element={<EventParticipants />} />
        <Route path="/navToPages" element={<NavToPages />} />
        <Route path="/techFestEvents" element={<TechFestEvents />} />
        <Route path="/robotics" element={<Robotics />} />

        {/*help and support routes*/}
        <Route path="/support/login" element={<SupportLogin />} />
        <Route path="/support/add" element={<Responsibility />} />
        <Route path="/support/event" element={<InputEventDetailsForm />} />
        <Route path="/support/profile" element={<HelpSupportProfile />} />
        <Route path="/support/settings" element={<HelpSupportSettings />} />
        <Route
          path="/support/notifications"
          element={<HelpSupportNotification />}
        />

        {/* Fest-Coordinators info page  */}
        <Route path="/fest/Coordinators" element={<FestCoordinators />} />

        {/* Website Credits page  */}
        <Route path="/fest/CreditsPage" element={<CreditsPage />} />

        {/* Gallery  */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/Photoes" element={<Photoes />} />
        <Route path="/gallery/Videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}
