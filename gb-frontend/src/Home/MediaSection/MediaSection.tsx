import React from "react";
import { Row, Col, Image } from 'react-bootstrap';

import './MediaSection.scss';

type MediaSectionProps = JSX.IntrinsicAttributes & {
  className?: string;
  mediaFirst?: boolean;
  mediaSrc?: string;
  mediaType?: string;
  heading?: string;
  children?: React.ReactNode;
};

const MediaSection = ( props: MediaSectionProps ) => {
  let media;
  if ( typeof props.mediaType !== 'undefined' && props.mediaType.startsWith( 'video' ) ) {
    media = (
      <div className="embed-responsive embed-responsive-1by1">
        <video controls>
          <source src={ props.mediaSrc } type={ props.mediaType } />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
  else {
    media = <Image src={ props.mediaSrc } fluid />
  }

  return (
    <div className={ `MediaSection text-start ${ props.className }` } data-testid="MediaSection">
      <Row className="align-items-center">
        <Col className="centered-parent media-container" xs={ 12 } md={ { span: 6, order: ( props.mediaFirst ? 'first' : 'last' ) } }/* lg={ { span: 5, order: ( props.mediaFirst ? 'first' : 'last' ) } }*/>
          <div className="media-wrapper">
            { media }
          </div>
        </Col>
        <Col xs={ 12 } md={ { span: 6, order: ( props.mediaFirst ? 'last' : 'first' ) } }>
          <h2 className="text-center">{ props.heading }</h2>
          { props.children }
        </Col>
      </Row>
    </div>
  );
}

export default MediaSection;
