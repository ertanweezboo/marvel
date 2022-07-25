import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;

  button {
    background: transparent;
    position: absolute;
    z-index: 3;
    right: 20px;
    bottom: 20px;
    border: none;
    width: 18px;
    height: 18px;
    padding: 0;
    cursor: pointer;
  }

  .tumb {
    background: ${({ theme }) => theme.colors.secondary};
    margin: 0;
    overflow: hidden;
    padding: 0;
    transition: all 0.5s ease;
    object-fit: cover;
  }

  .content {
    padding: 16px 24px 17px 20px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.secondary};
    min-height: 90px;
    position: relative;
    overflow: hidden;

    h3 {
      font-size: 13px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.onSurface};
      margin: 0;
      position: relative;
      z-index: 5;
    }

    &:before {
      transition: all 0.25s ease;
      height: 4px;
      content: "";
      background-color: ${({ theme }) => theme.colors.secondary};
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &:hover,
  &:focus {
    .content {
      &:before {
        transition: all 0.25s ease;
        height: 100px;
      }
    }

    .tumb {
      transform: scale(1.2);
      transition: all 0.5s ease;
    }
  }

  &:after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: ${({ theme }) => theme.colors.onSurface};
    border-style: solid;
    border-top-color: transparent;
    border-width: 12px 12px 0 0;
    bottom: 0;
    content: "";
    position: absolute;
    right: 0;
    top: auto;
    z-index: 40;
  }
`;

const CardComic = styled.div`
  cursor: pointer;
  position: relative;
  margin-top: 12px;
  max-width: 224px;
  width: 100%;

  .tumb {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
    box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
    transition: all 0.17s ease-in-out;
  }
  span {
    overflow: inherit !important;
  }
  .content {
    h3 {
      font-size: 14px;
      margin: 10px 0;
    }
  }

  &:hover,
  &:focus {
    .tumb {
      transition: all 0.17s ease-in-out;
      transform: translate3d(0, -10px, 0);
    }
  }
`;

const ComicWrapper = styled.section<{ length: number }>`
  display: grid;
  grid-gap: 12px;
  justify-items: center;
  grid-template-columns: repeat(${({ length }) => length}, minmax(160px, 1fr));
  overflow-x: auto;
  transform: translateZ(0px);
  margin: 0 -20px;
  padding: 0 20px;

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.border};
  }

  ::-webkit-scrollbar {
    height: 4px;
    background-color: ${({ theme }) => theme.colors.border};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 0;
    padding: 0;
  }
`;

const CardWrapper = styled.section`
  display: grid;
  transition: max-height 1s ease-out;
  overflow: hidden;
  grid-column-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(47.5%, 1fr));

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(31.66%, 1fr));
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.talet}) {
    grid-template-columns: repeat(auto-fit, minmax(23.75%, 1fr));
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(15.82%, 1fr));
  }
`;

const Detail = styled.section<{ background: string }>`
  background: black url(${({ background }) => background}) no-repeat;
  height: 250px;
  background-size: contain;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.onSurface};
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 52px;
    width: 200px;
    height: 300px;
    background-image: linear-gradient(90deg, #000 0%, #0000 100%);
    z-index: 0;
  }
  .content {
    max-width: 85%;
    position: relative;
    z-index: 1;
  }
  h1 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 22px;
    margin: 0;
  }
  h3 {
    font-size: 14px;
    margin: 40px 0 5px;
  }
  p {
    font-size: 14px;
  }
  a {
    text-transform: uppercase;
    font-size: 12px;
    margin-right: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.onSurface};

    &:last-child {
      margin: 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    height: 300px;
    background-size: initial;
    background-position: right center;

    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
    }
    h3 {
      margin: 100px 0 5px;
    }
    &:after {
      height: 300px;
      right: 350px;
    }
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    height: 350px;

    .content {
      max-width: 60%;
    }
    h1 {
      font-size: 40px;
    }
    &:after {
      height: 350px;
    }
  }
`;

export { Card, CardComic, CardWrapper, ComicWrapper, Detail };
