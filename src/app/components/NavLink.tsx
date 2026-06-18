import React from 'react'

const NavLink = ({ navLink }: { navLink: string }) => {

    const handleClick = () => {
        const section = document.getElementById(`${navLink.toLocaleLowerCase}-section`)
         section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  
    return (
    <div className='p-3' onClick={handleClick}>{navLink}</div>
  )
}

export default NavLink