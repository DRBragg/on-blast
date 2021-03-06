import React from 'react';
import { Col, PanelGroup, Panel } from 'react-bootstrap';
import ReviewForm from './reviewForm'

const RepInfo = (props) => {
  return(
    <div className="size">
      <Col xs={12}>
        <PanelGroup>
            <Panel collapsible header="Biography" eventKey="1" className="buffer">
              Name: {props.rep.name}<br />
              Office: {props.rep.office}<br />
              Party: {props.rep.party}<br />
              Elected on: {props.rep.elected}<br />
              Bio: {props.rep.bio}<br />
            </Panel>
            <Panel collapsible header="Contact" eventKey="2" className="buffer">
              Email: {props.rep.email}<br />
              Phone Number: {props.rep.phone_number}<br />
            </Panel>
            <Panel collapsible header ="Review this Representative" eventKey="3" className="buffer">
              <ReviewForm
                repId={props.rep.id}
                newReview={props.newReview}
                userId={props.userId}
              />
            </Panel>
        </PanelGroup>
      </Col>
    </div>
  )
}

export default RepInfo
