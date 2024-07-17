// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";
import VisaSupport from "./components/Visa-support/Visa-support";
import Destinations from "./components/Destinations/Destinations";
import Visit from "./components/Visit/Visit";
import Locations from "./components/Locations/Locations";
import Contacts from "./components/Contacts/Contacts";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* Notification */}
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Weekly offers */}
      <Offers />

      {/* Visa Support */}
      <VisaSupport />

      {/* Destinations */}
      <Destinations />

      {/* Visit */}
      <Visit />

      {/* Locations */}
      <Locations />

      {/* Contacts */}
      <Contacts />

      {/* Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
