import Image from "next/image";

const Footer = () => {
    return (
        <footer>
      <p>
          <a href="mailto:jordanw0412@gmail.com">Contact</a>
      </p>    
      <p>
          <Image src="/site_images/copyright_symbol_3.png" alt={"Copyright symbol"} width={25} height={25}/>
          All Rights Reserved
      </p>    
    </footer>
    )
}

export default Footer;