import Header from "../components/Header";
import MsgError from "../components/MsgError";
import Footer from "../components/Footer";
import '../styles/MsgError.css'

function Error() {
  return (
    <div>
      <Header />
      <MsgError />
      <Footer />
    </div>
  );
}

export default Error;