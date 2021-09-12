import React from "react";
import "../styles/ScrollEvent.css";

function ScroolEvent() {
  const isElementUnderBottom = (elem, triggerDiff) => {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll(".up-on-scroll");
    elems.forEach((elem) => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(70px)";
      } else {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0px)";
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div class="container">
      <div class="list">
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
        <article class="up-on-scroll">
          We are extra cool everyday dancing. This generator should be used and
          succeed. We will not try to go. We will not try to bow and go. Indeed
          so. Indeed so. This generator should succeed. Try hard to achieve
          everything you can succeed. This generator should be used and succeed.
          Try hard to achieve everything succeed. We will not try to bow and go.
          We will not try to bow and go. Indeed so. We are dancing. Indeed so.
          Some women should never cry. Some women cry. We are extra dancing. We
          are extra cool everyday dancing. We will not try to go. Try hard
          succeed.
        </article>
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
        <article class="up-on-scroll">
          We are extra cool everyday dancing. This generator should be used and
          succeed. We will not try to go. We will not try to bow and go. Indeed
          so. Indeed so. This generator should succeed. Try hard to achieve
          everything you can succeed. This generator should be used and succeed.
          Try hard to achieve everything succeed. We will not try to bow and go.
          We will not try to bow and go. Indeed so. We are dancing. Indeed so.
          Some women should never cry. Some women cry. We are extra dancing. We
          are extra cool everyday dancing. We will not try to go. Try hard
          succeed.
        </article>
        <div class="img-wrap">
          <img
            src="https://images.unsplash.com/photo-1570760295437-3627311f8fbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2846&q=80"
            alt="img1"
            class="image up-on-scroll"
          />
        </div>
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
        <article class="up-on-scroll">
          We are extra cool everyday dancing. This generator should be used and
          succeed. We will not try to go. We will not try to bow and go. Indeed
          so. Indeed so. This generator should succeed. Try hard to achieve
          everything you can succeed. This generator should be used and succeed.
          Try hard to achieve everything succeed. We will not try to bow and go.
          We will not try to bow and go. Indeed so. We are dancing. Indeed so.
          Some women should never cry. Some women cry. We are extra dancing. We
          are extra cool everyday dancing. We will not try to go. Try hard
          succeed.
        </article>
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
        <div class="img-wrap">
          <img
            src="https://images.unsplash.com/photo-1570788551960-3520cb318370?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="img2"
            class="image up-on-scroll"
          />
        </div>
        <article class="up-on-scroll">
          We are extra cool everyday dancing. This generator should be used and
          succeed. We will not try to go. We will not try to bow and go. Indeed
          so. Indeed so. This generator should succeed. Try hard to achieve
          everything you can succeed. This generator should be used and succeed.
          Try hard to achieve everything succeed. We will not try to bow and go.
          We will not try to bow and go. Indeed so. We are dancing. Indeed so.
          Some women should never cry. Some women cry. We are extra dancing. We
          are extra cool everyday dancing. We will not try to go. Try hard
          succeed.
        </article>
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
        <article class="up-on-scroll">
          We are extra cool everyday dancing. This generator should be used and
          succeed. We will not try to go. We will not try to bow and go. Indeed
          so. Indeed so. This generator should succeed. Try hard to achieve
          everything you can succeed. This generator should be used and succeed.
          Try hard to achieve everything succeed. We will not try to bow and go.
          We will not try to bow and go. Indeed so. We are dancing. Indeed so.
          Some women should never cry. Some women cry. We are extra dancing. We
          are extra cool everyday dancing. We will not try to go. Try hard
          succeed.
        </article>
        <article class="up-on-scroll">
          We are dancing. We are extra dancing. Try hard to achieve succeed. We
          will not try to go. Try hard succeed. Indeed so. Some women cry. This
          generator should succeed. This generator should be used and succeed.
          We will not go. Try hard to achieve everything you can succeed. We are
          extra cool everyday dancing. We are extra cool everyday dancing. Try
          hard to achieve everything you can succeed. This generator should be
          used and succeed. Try hard to achieve everything succeed. This
          generator should be used and succeed. We will not try to bow and go.
          We are dancing.
        </article>
      </div>
    </div>
  );
}

export default ScroolEvent;
