import styled, { css } from "styled-components";

const Header = styled.header<{ active: boolean }>`
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 12px;
  user-select: none;
  padding: 10px 0;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  nav {
    display: none;
    flex-direction: row;
    padding: 10px;
    opacity: 0;
    transition: all 0.25s ease;

    a {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      margin: 0 12px;
      border-right: 1px solid gray;
      padding-right: 12px;
      font-family: ${({ theme }) => theme.fonts.primary};
      color: ${({ theme }) => theme.colors.onSurface};
      height: 100%;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
      text-decoration: none;
      letter-spacing: 1px;
      text-transform: uppercase;

      &:hover,
      &:focus {
        opacity: 0.8;
      }

      &:last-child {
        padding: 0;
        margin-right: 0;
        border: none;
      }
    }

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoint.tablet}) {
      display: flex;
      opacity: 1;
      transition: all 0.25s ease;
    }
  }

  ${({ active }) =>
    active &&
    css`
      nav {
        display: flex;
        position: absolute;
        flex-direction: column;
        align-items: center;
        background: ${({ theme }) => theme.colors.primary};
        width: 100%;
        left: 0;
        top: 75px;
        opacity: 1;
        z-index: 10;

        a {
          font-size: 14px;
          margin: 8px 0;
          border: none;
          padding: 0;
        }
      }
    `}
`;

const Footer = styled.footer`
  padding: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.onSurface};

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    div {
      flex-direction: row;
    }
  }
`;

const Container = styled.div<{ row?: boolean }>`
  max-width: 1240px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${({ row }) =>
    row &&
    css`
      display: flex;
      flex-direction: column;

      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoint.mobile}) {
        flex-direction: row;
      }
    `}
`;

const Main = styled.main`
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    padding: 2rem 0;
  }
`;

const Title = styled.h2`
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;
  line-height: 0.9;
  margin: 20px 0;
  font-family: ${({ theme }) => theme.colors.primary};

  &:after,
  &:before {
    background-color: ${({ theme }) => theme.colors.third};
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    -webkit-transform: rotate(-45deg) skewX(45deg);
    transform: rotate(-45deg) skewX(45deg);
    width: 20px;
  }

  &:before {
    left: 53px;
    top: -8px;
    transform-origin: left bottom;
  }
  &:after {
    left: -6px;
    top: calc(100% + 3px);
    transform-origin: right top;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    margin: 20px 0 40px;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Button = styled.a`
  background-color: transparent;
  border-radius: 0;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin: 15px auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  letter-spacing: 0px;
  width: auto;
  z-index: 10;

  &:after,
  &:before {
    border-style: solid;
    box-sizing: border-box;
    content: "";
    display: block;
    height: 16px;
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  &:before {
    border-width: 0 0 16px 16px;
    margin-left: 16px;
    top: 0;
    transition: none;
  }
  &:after {
    border-width: 16px 16px 0 0;
    bottom: 0;
    margin-right: 16px;
    transition: none;
  }

  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSurface};
    display: block;
    padding: 0 35px;
    transition: none;
    text-align: center;
    line-height: 16px;

    &:after,
    &:before {
      border-color: ${({ theme }) => theme.colors.secondary} transparent;
      border-style: solid;
      border-width: 0 0 16px 16px;
      box-sizing: border-box;
      content: "";
      display: block;
      position: absolute;
    }

    &:before {
      left: 0;
      top: 0;
      transition: none;
    }
    &:after {
      bottom: 0;
      right: 0;
      transform: rotate(180deg);
    }
  }
`;

const Close = styled.button<{ active: boolean }>`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  opacity: 0.75;
  background: transparent;
  padding: 0;
  border: none;
  transition: all 0.25s ease;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 24px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.onSurface};
    padding: 0;
    margin: 0;
    transition: all 0.25s ease;
  }
  &:before {
    transform: rotate(-90deg);
    top: 7px;
  }
  &:after {
    transform: rotate(90deg);
    top: -1px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    display: none;
  }

  ${({ active }) =>
    active &&
    css`
      top: 24px;
      transition: all 0.25s ease;

      &:before,
      &:after {
        transition: all 0.25s ease;
      }
      &:before {
        transform: rotate(-45deg);
        top: 0;
      }
      &:after {
        transform: rotate(45deg);
      }
    `}
`;

const Hero = styled.section<{ background: string }>`
  background: url(${({ background }) => background});
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.onSurface};
  height: 250px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;

  div {
    width: 100%;
    div {
      max-width: 360px;
      width: 100%;
    }
  }

  h2 {
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 0;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.mobile}) {
    height: 300px;
  }
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    height: 350px;
  }
`;

const Table = styled.table`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
  margin: 0 40px 20px 0;

  thead {
    font-size: 14px;
    font-weight: bold;
  }

  th,
  td {
    padding: 4px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    border: none;
  }
`;

const Input = styled.input`
  margin: 20px 0 10px;
  height: 50px;
  border-radius: 4px;
  min-width: 20rem;
  display: block;
  padding: 0 10px;
  border: 2px solid;
  width: 100%;
  font-size: 18px;
  border: 2px solid ${({ theme }) => theme.colors.border};

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.third};
  }
`;

const Search = styled.section`
  min-height: calc(100vh - 280px);

  h3 {
    text-align: center;
    font-weight: 300;
  }

  span {
    font-size: 11px;
    margin-bottom: 40px;
    display: block;
  }
`;

const Pagination = styled.div`
  padding: 0;
  margin-top: 20px;
  display: flex;
  flex-flow: wrap;

  a {
    zoom: 0.7;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    flex-flow: inherit;
  }
`;

export {
  Container,
  Close,
  Main,
  Title,
  Description,
  Header,
  Footer,
  Button,
  Hero,
  Table,
  Input,
  Search,
  Pagination,
};
