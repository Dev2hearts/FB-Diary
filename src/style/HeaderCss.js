import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Mainmenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 0 20px;
  li {
    a {
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const UserMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 0 20px;
  li {
    a {
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
