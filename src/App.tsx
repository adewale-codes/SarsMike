import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Achievements from './components/Achievments';
import Tawk from './components/Tawk';
import Supported from './components/Supported';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/products/Products';

interface MainPageProps {
  homeRef: React.RefObject<HTMLDivElement>;
  productRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  blogRef: React.RefObject<HTMLDivElement>;
}

const MainPage: React.FC<MainPageProps> = ({ homeRef, productRef, aboutRef, contactRef, blogRef }) => (
  <>
    <Hero ref={homeRef} contactRef={contactRef} />
    <Achievements />
    <Supported ref={blogRef} />
    <About ref={aboutRef} />
    <Contact ref={contactRef} />
    <Tawk />
  </>
);

const Layout: React.FC<MainPageProps> = (props) => (
  <>
    <Nav
      homeRef={props.homeRef}
      productRef={props.productRef}
      aboutRef={props.aboutRef}
      contactRef={props.contactRef}
      blogRef={props.blogRef}
    />
    <div>
      <Routes>
        <Route
          path="/"
          element={<MainPage {...props} />}
        />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    <Footer />
  </>
);

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <Layout
        homeRef={homeRef}
        productRef={productRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        blogRef={blogRef}
      />
    </Router>
  );
}

export default App;
