import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";

function Products() {
    const location = useLocation();
    console.log("location::::", location);
    
    return (
        <>
        {location.pathname === "/products/featured" && <Outlet/>}
        <div>
            <input type= "text" placeholder ="Search products"/>    
        </div>

        <nav>
            <Link to = "featured">Featured</Link>
            <Link to = "new">New</Link>
        </nav>

       {location.pathname === "/products/new" && <Outlet/>}
        </>
    )
}

export default Products
