import React from "react";
import { SUl, SLi, SLink, SDiv } from './styled';

const Breadcrumbs = ({ links }) => {
  return (
    <SDiv>
        <SUl>
        {links.map((link, index) => (
            <SLi key={index}>
            <SLink to={link.path}>{link.label}</SLink>
            {(index !== links.length - 1) && <span> /</span>}
            </SLi>
        ))}
        </SUl>
    </SDiv>
  );
};

export default Breadcrumbs;