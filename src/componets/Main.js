import React from "react";
import "../variables.css";
import "../media.css";

export default function Main() {
  return (
    <div className='main'>
      <h1 className='main-title'>Designed for the future</h1>
      <div className='container'>
        <section className='first'>
          <div className='first-section-image first-section-wrap-div'></div>
          <div className='first-section-details'>
            <h1 className='details-headers'>
              Introducing an extensible editor
            </h1>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h1 className='details-headers'>Robust content management</h1>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </section>
        <section className='wrap'>
          <section className='second'>
            <div className='first-section-image'>
              <img src='./images/illustration-phones.svg' alt='' />
            </div>
            <div className='first-section-details second-details'>
              <h1 className='details-headers'>
                State of the Art Infrastructure
              </h1>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </section>
        </section>
        <section className='third'>
          <div className='first-section-image third-wrap-image-div'></div>
          <div className='first-section-details'>
            <h1 className='details-headers'>Free, open, simple</h1>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h1 className='details-headers'>Powerful tooling</h1>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
