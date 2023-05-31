import React from "react";

interface Phones {
  id: number;
  name: string;
  amount: number;
  stock: number;
  images_src: [];
  specs: {
    capacity: string;
    body: {
      color: string;
      scratches: string;
      status: string;
      batteryHealth: number;
      screenSize: string;
    };
  };
  condition: string;
  video_src: string;
}

interface ModalPopProps {
  selectedPhone: Phones;
  closeModal: () => void;
}

function ModalPop({ selectedPhone, closeModal }: ModalPopProps) {
  return (
    <div className="modal-box bg-secondary text-primary">
      <h3 className="font-bold text-lg">
        This {selectedPhone.name} device has the following specs.
      </h3>
      <ul className="py-4">
        <li>Phone Size: {selectedPhone.specs.capacity}</li>
        <li>Price: {selectedPhone.amount} Cedis</li>
        <li>Color: {selectedPhone.specs.body.color}</li>
        <li>Fault: {selectedPhone.specs.body.scratches}</li>
        <li>Status: {selectedPhone.specs.body.status}</li>
      </ul>
      <span>Please note that this is a {selectedPhone.condition} phone.</span>
      <div className="modal-action">
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalPop;
