import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layouts/Mainlayout";
 import Home from './pages/Home';
import Projects from "./pages/Projects";
import Skills from './pages/Skills';

import ResumePage from "./pages/ResumePage";
import NotFound from "./components/NotFound";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";


let router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <Projects/> },
      { path: "/Skills", element: <Skills /> },
      { path: "/resume", element: <ResumePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default router;