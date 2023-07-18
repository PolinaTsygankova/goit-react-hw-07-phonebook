import styled from 'styled-components';

export const MainTitle = styled.h1`
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  & {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 5px;
  }
  &:before {
    width: 28px;
    height: 5px;
    display: block;
    content: '';
    position: absolute;
    bottom: 3px;
    left: 50%;
    margin-left: -14px;
    background-color: #b80000;
  }
  &:after {
    width: 100px;
    height: 1px;
    display: block;
    content: '';
    position: relative;
    margin-top: 25px;
    left: 50%;
    margin-left: -50px;
    background-color: #b80000;
  }
`;

export const MainDiv = styled.div`
  overflow-y: hidden;
  /* width: 100vw; */
  /* height: 100vh; */
  /* background: #eee; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContactTitle = styled.h2`
  /* font-family: Raleway, sans-serif; */
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 34px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;

  & {
    text-align: center;
    padding-bottom: 5px;
  }
`;

export const Loader = styled.div`
  --uib-size: 80px;
  --uib-speed: 1.55s;
  --uib-color: black;
  --uib-line-weight: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--uib-line-weight);
  width: var(--uib-size);
  border-radius: calc(var(--uib-line-weight) / 2);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  margin-bottom: 15px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
  }

  &::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: wobble var(--uib-speed) ease-in-out infinite;
    transform: translateX(-90%);
    background-color: var(--uib-color);
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-90%);
    }

    50% {
      transform: translateX(90%);
    }
  }
`;
