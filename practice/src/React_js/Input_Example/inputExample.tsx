import React, { useState } from "react";
import { Panel } from "../utils/panel";

const inputExample = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h2> Kathmandu</h2>
      <Panel
        title="Kotesor"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        praesentium nesciunt voluptatibus cupiditate minima molestias similique
        voluptates aliquam aperiam, accusantium, dolore eius esse minus
        inventore nostrum quibusdam deleniti quisquam, et harum natus!
        Voluptates minima sit excepturi qui iste deserunt laboriosam ducimus
        reprehenderit ad vel! Totam expedita voluptatem doloribus natus laborum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        praesentium nesciunt voluptatibus cupiditate minima molestias similique
        voluptates aliquam aperiam, accusantium, dolore eius esse minus
        inventore nostrum quibusdam deleniti quisquam, et harum natus!
        Voluptates minima sit excepturi qui iste deserunt laboriosam ducimus
        reprehenderit ad vel! Totam expedita voluptatem doloribus natus laborum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        praesentium nesciunt voluptatibus cupiditate minima molestias similique
        voluptates aliquam aperiam, accusantium, dolore eius esse minus
        inventore nostrum quibusdam deleniti quisquam, et harum natus!
        Voluptates minima sit excepturi qui iste deserunt laboriosam ducimus
        reprehenderit ad vel! Totam expedita voluptatem doloribus natus laborum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
        praesentium nesciunt voluptatibus cupiditate minima molestias similique
        voluptates aliquam aperiam, accusantium, dolore eius esse minus
        inventore nostrum quibusdam deleniti quisquam, et harum natus!
        Voluptates minima sit excepturi qui iste deserunt laboriosam ducimus
        reprehenderit ad vel! Totam expedita voluptatem doloribus natus laborum.
      </Panel>

      <Panel
        title="Banesor"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quae
        cum aut libero cumque, perspiciatis omnis asperiores reiciendis,
        obcaecati inventore modi sequi. Voluptates deleniti, commodi enim
        excepturi vitae architecto unde obcaecati ad reiciendis. Ratione,
        officia beatae dolores natus perspiciatis, expedita nulla quaerat fugit,
        ut deleniti praesentium. Laborum nulla maiores atque eveniet aspernatur
        quisquam beatae? Placeat quo porro eveniet pariatur doloremque?
      </Panel>
    </div>
  );
};

export default inputExample;
