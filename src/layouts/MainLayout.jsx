import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "80vh",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "20px",
          }}
        >
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;