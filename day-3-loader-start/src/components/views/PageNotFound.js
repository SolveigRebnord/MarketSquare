import { Link } from "react-router-dom";

const PageNotFound = () => {


    return (
        <>
        <section className="text-center flex flex-col gap-6">
            <h1 className=" text-3xl mb-12">404</h1>
            <p>Page not found</p>
           <Link to={'/'} className="underline">Return to home page</Link>
       
        </section>
        
             
        </>
    );
};

export default PageNotFound;
