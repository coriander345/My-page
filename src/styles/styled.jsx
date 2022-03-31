import styled from 'styled-components';

const AppStyle = styled.div`
  border-radius: 8px;
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #fff;
  .container {
    position: relative;
    width: 90%;
    height: 50%;
  }
  .container::before {
    position: absolute;
    content: '';
    left: 0;
    top: -7px;
    z-index: 99;
    height: 100%;
    width: 150px;
    background-image: linear-gradient(90deg, black, transparent);
  }
  .container::after {
    position: absolute;
    content: '';
    right: 0;
    top: -7px;
    z-index: 99;
    height: 100%;
    width: 150px;
    background-image: linear-gradient(-90deg, black, transparent);
    transition: 0.2s ease;
  }
  .icon {
    color: rgb(67, 247, 76);
    background-color: transparent;
    font-size: 50px;
    outline: none;
    border: none;
    padding: 0px 20px;
    cursor: pointer;
  }
  .icon:hover {
    color: yellow;
    transform: scale(1.2);
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: auto;
  position: relative;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  .child {
    min-width: 600px;
    height: 450px;
    margin: 1px 10px;
    cursor: pointer;
    border: hidden;
    overflow: hidden;
  }

  .child img {
    width: 100%;
    height: 100%;
  }

  & > h1 {
    font-size: 30px;
  }
`;
export default AppStyle;
