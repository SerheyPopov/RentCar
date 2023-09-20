import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 1184px;
  margin-left: auto;
  outline: 1px solid red;
  margin-right: auto;
`;
export const MainContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const LoadMorecontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

export const LoadMoreButton = styled.button`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background: inherit;
  text-decoration-line: underline;
  &:hover {
    color: #0b44cd;
  }
`;
