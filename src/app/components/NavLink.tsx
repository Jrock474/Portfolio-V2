import React from 'react'

const NavLink = ({ navLink }: { navLink: string }) => {

    const handleClick = () => {
        const section = document.getElementById(`${navLink.toLocaleLowerCase()}-section`)
         section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  
    return (
    <button className='p-3 ml-3 mr-3' onClick={handleClick}>{navLink}</button>
  )
}

export default NavLink