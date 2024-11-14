import React, { useState } from "react";
import styled from "styled-components";
import {FaSeedling } from "react-icons/fa"; // Importing icons from react-icons
import { CiCreditCard1 } from "react-icons/ci";

// Sidebar Container Styling
const SidebarContainer = styled.div`
  width: 20vw;
  background-color: rgb(26, 30, 31);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px, rgba(94, 92, 154, 0.1) 5px 0px 25px 0px;

  &::-webkit-scrollbar {
    background: rgb(143, 148, 157);
    border-radius: 8px;
    width: 8px;
  }
  label {
    color: rgb(43, 112, 250) !important;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.08em;
    margin-bottom: 0.6rem;
    display: inline-block;
  }
`;

// Menu Item Styling
const MenuItem = styled.div<{ active?: boolean }>`
  padding: 0.5rem 13px;
  margin: 2px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "rgb(45, 52, 54)" : "transparent")};
  border-radius: 8px;
  font-size: 14px;
  color: rgb(143, 148, 157);
  display: flex;
  align-items: center;  // To align text and icon in a row
  gap: 8px;  // Spacing between the icon and text
  
  &:hover {
    background-color: rgb(45, 52, 54) !important;
  }
  .icon{
    margin-right: 0.2rem;
  }
`;

const Sidebar: React.FC = () => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("lottery");

  return (
    <SidebarContainer>
      {/* label for section */}
      <label htmlFor="">Dashboard</label>

      {/* Menu items with icons */}
      <MenuItem
        active={activeItem === "lottery"} // Check if this is the active item
        onClick={() => setActiveItem("lottery")} // Set "lottery" as active on click
      >
        <CiCreditCard1 className="icon"/> Lottery
      </MenuItem>
      <MenuItem
        active={activeItem === "farming"} // Check if this is the active item
        onClick={() => setActiveItem("farming")} // Set "farming" as active on click
      >
        <FaSeedling className="icon" /> Farming
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
