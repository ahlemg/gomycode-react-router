import { useSearchParams } from "react-router-dom";

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();
   
   const updateSearchParams = () => {
       console.log(typeof searchParams );
       console.log(searchParams);

       console.log(searchParams.getAll() );
       console.log(searchParams.values() );
    searchParams.set("filter2" , "test");
       setSearchParams(searchParams)}
    return (
        <div>
            <button onClick = {()=> setSearchParams({filter:"active"}) }> Active Users</button>
            <button onClick = {() =>setSearchParams({}) }> Reset filters</button>
            <button onClick = {updateSearchParams }> another filter</button>
    {searchParams.get("filter")=== "active"? <p>Showing Active users</p> : <p>Showing all users</p> }
        </div>
    )
}

export default Users
