import React, { useState } from "react";
 import {
   Container,
   LogoContainer,
   Wrapper,
   Menu,
   MenuItem,
   MenuItemLink,
      MobileIcon,
 } from "./Narbar.elements";
 import {
   FaBattleNet,
   FaBars,
   FaTimes,
   FaHome,
   FaUserAlt,
   FaBriefcase,
   FaGlasses,
 } from "react-icons/fa";
 import { IconContext } from "react-icons";

 const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

   return (
     <Container>
       <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
           <LogoContainer>
             <FaBattleNet />
             <p>Navbar -</p>
             <p>Responsive</p>
           </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
             {showMobileMenu ? <FaTimes /> : <FaBars />}
//           </MobileIcon>

//           <Menu open={showMobileMenu}>
//             <MenuItem>
//               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
//                 <div>
//                   <FaHome />
//                   HOME
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>
//               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
//                 <div>
//                   <FaUserAlt />
//                   ACERCA DE MI
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>
//               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
//                 <div>
//                   <FaBriefcase />
//                   PORTAFOLIO
//                 </div>
//               </MenuItemLink>
//             </MenuItem>
//             <MenuItem>
//               <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
//                 <div>
//                   <FaGlasses />
//                   CONTACTA ME
//                 </div>
//             </MenuItemLink>
//            </MenuItem>
//          </Menu> //        </IconContext.Provider>
//      </Wrapper>
//    </Container>
  );
 };






 export default Navbar;


 



