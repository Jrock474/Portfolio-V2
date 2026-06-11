import React from 'react'

const NavLink = (navLink: string) => {

    const handleClick = () => {
        const section = document.getElementById(`${navLink.toLocaleLowerCase}-section`)
         section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  
    return (
    <div onClick={handleClick}>{navLink}</div>
  )
}

export default NavLink