import { BrowserRouter, Routes, Route } from "react-router-dom";

import Help from "./pages/Help";
import Landing from "./pages/Landing";

import Anwesh from "./pages/Anwesh";
import Ahwan from "./pages/Ahwan";
import Akanksha from "./pages/Akanksha";
import About from "./pages/About";
import Coordinators from "./pages/Coordinators";
import EventDetails from "./pages/EventDetails";

import AnweshWinnerPage from "./pages/AnweshWinnerPage";
import AhwanWinnerPage from "./pages/AhwanWinnerPage";
import AkankshaWinnersPage from "./pages/AkankshaWinnersPage";
import AhwanEventBoys from "./pages/AhwanEventBoys";
import AhwanEventGirls from "./pages/AhwanEventGirls";

import Robotics from "./pages/Robotics";


import CreditsPage from "./pages/CreditsPage";
import Gallery from "./pages/Gallery/Gallery";
import Photoes from "./pages/Gallery/Photoes";
import Videos from "./pages/Gallery/Videos";
import AkankshaRegistrationPage from "./pages/Input/AkankshaRegistrationPage";
import Shedules from "./pages/Shedules";
import TechFestEvents from "./pages/TechFestEvents";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/coordinators" element={<Coordinators />} />

        <Route path="/eventDetails" element={<EventDetails />} />

        <Route path="/schedules" element={<Shedules />} />

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

        <Route path="/robotics" element={<Robotics />} />
        <Route path="/anwesh/techEvents" element={<TechFestEvents/>}/>

        {/* Fest-Coordinators info page  */}


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
