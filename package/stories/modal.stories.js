import React from "react";

import Modal from "@bscop/react-modal";

import Select from "../src";

export default {
  title: "Modal",
  component: Select,
};

export const ModalContainingSelect =
  () => {
    return (
      <Modal
        renderContent={
          () => {
            return (
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, tortor nec
                  pharetra ultricies, ante erat imperdiet velit.
                </p>
                <Select
                  label="Pick a fruit"
                  options={
                    [
                      {
                        id: "a",
                        label: "Apple",
                      },
                      {
                        id: "b",
                        label: "Banana",
                      },
                      {
                        id: "c",
                        label: "Cherry",
                      },
                      {
                        id: "d",
                        label: "Damson",
                      },
                    ]
                  }
                />
                <p>
                  <a href="#">Nam luctus</a>, enim in interdum condimentum, nisl diam iaculis lorem, vel volutpat
                  mi leo sit amet lectus
                </p>
              </div>
            );
          }
        }
        renderHook={
          (props) => {
            return (
              <button type="button" {...props}>Show modal</button>
            );
          }
        }
        rootId="modal-root"
        title="Modal title"
      />
    );
  };
