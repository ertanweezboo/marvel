import * as React from "react";
import Image from "next/image";
import Table from "../components/Table";
import Modal from "../styles/modal";
import { useUiContext } from "../contexts/UIContext";
import { Button } from "../styles/shared";

const ModalComponent = () => {
  const { setModal, modalData, modal } = useUiContext();

  if (!modal || !modalData) return null;

  return (
    <Modal>
      <div className="modal-content">
        <Image
          src={`${modalData.thumbnail.path}/standard_xlarge.jpg`}
          alt={modalData.title}
          layout={"responsive"}
          height={200}
          width={200}
          className="tumb"
        />

        <span>
          <Table
            headers={[]}
            body={[
              ["Title", modalData.title],
              [
                "Description",
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      modalData.description ||
                      "Unfortunately, there is no description of the comic.",
                  }}
                />,
              ],
              ["Printed Price", modalData.prices[0].price],
            ]}
          />
          <Button onClick={() => setModal(false)}>
            <span>Close Modal</span>
          </Button>
        </span>
      </div>
    </Modal>
  );
};

export default ModalComponent;
