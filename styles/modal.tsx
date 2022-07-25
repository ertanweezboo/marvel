import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: none;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    background-color: ${({ theme }) => theme.colors.onSurface};
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100vh;

    span {
      display: flex;
      flex-direction: column;
      place-content: space-between;
    }

    table {
      td {
        font-size: 15px;

        &:first-child {
          font-weight: bold;
          padding-right: 10px;
        }
      }
    }
  }

  table {
    margin: 20px;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoint.tablet}) {
    .modal-content {
      display: grid;
      margin: 50px auto 0;
      grid-template-columns: repeat(2, minmax(160px, 1fr));
      max-height: 480px;
    }
  }
`;

export default Modal;
