import React from 'react'


Link
function Nav() {
    
  return (
    <nav className='pt-10 text-2xl flex justify-center gap-10'>
        <NavLink
           style={(e)=>{
            return {
                color: e.isActive?"tomoto":"",
                fontWeight: e.isActive?"bold":"",
            };
           }}
           to="/"
          >
            Home

        </NavLink>
        <NavLink
           style={(e)=>{
            return [
                e.isActive?"text-red-300" : "",
                e.isActive?"font-bold":"",
            ].join("");;

           }}
           to="/create"
          >
            Home

        </NavLink>
        <NavLink to="/show">
        Show
        </NavLink>
         
    </nav>
  );
};

export default Nav
