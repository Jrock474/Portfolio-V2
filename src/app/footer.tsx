import Image from "next/image";

const Footer = () => {
    return (
        <footer>
      <p>
          <a href="mailto:jordanw0412@gmail.com">Contact</a>
      </p>    
      <p>
          <Image src="./Site_Files/copyright_symbol_3.png" alt={"Copyright symbol"}/>
          All Rights Reserved
      </p>    
    </footer>
    )
}

export default Footer;