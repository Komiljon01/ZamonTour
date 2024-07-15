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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
