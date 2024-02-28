import React from 'react';
const HorizontalTimeline: React.FC = () => {
  return (
    <section className="cd-h-timeline js-cd-h-timeline margin-bottom-md">
      <div className="cd-h-timeline__container container">
      <p>2024/2/18</p>
        <div className="cd-h-timeline__dates">
          <div className="cd-h-timeline__line">
            <ol>
            <li><a href="#0" data-date="16/01/2014" className="cd-h-timeline__date cd-h-timeline__date--selected">16 Jan</a></li>
               <li><a href="#0" data-date="28/02/2014" className="cd-h-timeline__date">28 Feb</a></li>
            </ol>
            <span className="cd-h-timeline__filling-line" aria-hidden="true"></span>
          </div>
        </div>
        <ul>
          <li>
            <a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive">Prev</a>
          </li>
          <li>
            <a href="#0" className="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--next">Next</a>
          </li>
        </ul>
      </div>
      <div className="cd-h-timeline__events">
      <ol>
         <li className="cd-h-timeline__event cd-h-timeline__event--selected text-component">
            <div className="cd-h-timeline__event-content container">
               <h2 className="cd-h-timeline__event-title">Horizontal Timeline</h2>
               <em className="cd-h-timeline__event-date">January 16th, 2014</em>
               <p className="cd-h-timeline__event-description color-contrast-medium"> 
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
               </p>
            </div>
         </li>

         <li className="cd-h-timeline__event text-component">
          <p>some description</p>
         </li>
      </ol>
   </div>
    </section>
  );
}

export default HorizontalTimeline