import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Awards } from "./pages/Awards";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "hakkinda", Component: About },
      { path: "oduller", Component: Awards },
      { path: "icerikler", Component: Blog },
      { path: "icerikler/:id", Component: BlogDetail },
      { path: "iletisim", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
