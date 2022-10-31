import "./App.css";
import Link from "./Link";
import MainContent from "./MainContent";
import Item from "./Item";
import SideContent from "./SideContent";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
      <header className="wrapper">
        <h1>MyBlog</h1>
        <p>An awsome Baseline</p>
      </header>
      <nav className="navigation wrapper">
        <Link />
        <Link />
        <Link />
        <Link />
      </nav>
      <main className="wrapper main-container">
        <MainContent></MainContent>
        <SideContent></SideContent>
      </main>
      <footer className="wrapper">
        <p>Made at le Leacteur by Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
