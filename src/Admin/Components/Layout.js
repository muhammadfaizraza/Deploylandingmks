import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import News from './News'
import GetNews from './GetNews';
import Home from './Home';
const Layout = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="AllNews ">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
           
            <Nav.Item>
              <Nav.Link eventKey="AllNews">All News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Add News">Add News</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="AllNews">
              <GetNews />
            </Tab.Pane>
            <Tab.Pane eventKey="Add News">
              <News />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Layout
