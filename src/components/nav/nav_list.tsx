import React from "react";
import { Link, useLocation } from "react-router-dom";

import styled from "styled-components";

export const nav_arr = [
  {
    title: "주문 리스트",
    link: "/order",
  },
  {
    title: "굿즈 리스트",
    link: "/goods",
  },
  {
    title: "관광지 리스트",
    link: "/tour",
  },
  {
    title: "특산품 리스트",
    link: "/local",
  },
  {
    title: "특산품 제공 리스트",
    link: "/local_offer",
  },
  {
    title: "푸시 리스트",
    link: "/push",
  },
];

export default function NavList() {
  const location = useLocation();
  const pathname = location?.pathname;

  return (
    <Ul>
      {nav_arr.map((item) => (
        <Link key={item.link} to={item.link}>
          <Li pathname={pathname === item.link ? "true" : "false"}>
            {item.title}
          </Li>
        </Link>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  width: 100%;
`;

const Li = styled.li<{ pathname: string }>`
  padding: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.pathname === "true"
      ? props.theme.colors.primary[4]
      : props.theme.colors.grayscale[3]};
  font-size: 20px;
  font-weight: 500;
`;
