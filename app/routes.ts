import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("portfolio", "routes/portfolio.tsx"),
    route("portfolio/:slug", "routes/portfolio.$slug.tsx"),
    route("contact", "routes/contact.tsx"),

    route("*", "routes/not-found.tsx"),

] satisfies RouteConfig;
