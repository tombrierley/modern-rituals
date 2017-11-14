import React from 'react';

// Section component
const Section = ({ sectionId, children }) => (
    <section id={sectionId} className={'o-section o-section--' + sectionId}>
        <div className="o-grid__container">{children}</div>
    </section>
);

export default Section;
