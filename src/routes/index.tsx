import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import Carousel from "~/components/carousel/carousel";

export default component$(() => {
  return (
    <>
      <section style={{ height: "250px", background: "lightblue" }}>
        section before
      </section>
      <Carousel />
      <section style={{ height: "250px", background: "lightgreen" }}>
        section after
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
