import { component$, useSignal, $ } from "@builder.io/qwik";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

export default component$(() => {
  const swiperRoot = useSignal<HTMLElement>();
  const loadSwiperSig = useSignal<boolean>(false);

  const loadSwiper$ = $((fn?: () => void) => {
    const el = ".swiper"; // swiperRoot.value
    (window as any).Appswiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: "horizontal",
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    if (fn) fn();
  });

  return (
    <div style={{ height: "500px" }} class="swiper" ref={swiperRoot}>
      <div
        class="swiper-wrapper"
        onPointerEnter$={() => {
          if (!loadSwiperSig.value) {
            loadSwiper$();
            loadSwiperSig.value = true;
          }
        }}
      >
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>

      <div
        class="swiper-button-prev"
        onClick$={() => {
          if (!loadSwiperSig.value) {
            loadSwiper$(() => (window as any).Appswiper?.slidePrev());
            loadSwiperSig.value = true;
          } else {
            (window as any).Appswiper?.slidePrev();
          }
        }}
      ></div>
      <div
        class="swiper-button-next"
        onClick$={() => {
          if (!loadSwiperSig.value) {
            loadSwiper$(() => (window as any).Appswiper?.slideNext());
            loadSwiperSig.value = true;
          } else {
            (window as any).Appswiper?.slideNext();
          }
        }}
      ></div>
    </div>
  );
});
