import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {
  dashboardEmailStatisticsChart,
} from "variables/charts.jsx";

import Tables from './Tables';

class Dashboard extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col lg="3" md="4" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="7">
                    <div className="numbers">
                      <CardTitle tag="p">121</CardTitle>
                      <p />
                    </div>
                  </Col>
                  <Col md="8" xs="5">
                    <div className="icon-big text-center">
                      <img
                        alt="..."
                        src={require('../../src/assets/img/icon_booking.svg')}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <span>Booking</span>
                  <br />
                  <span>No of Waybills</span>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="7">
                    <div className="numbers">
                      <CardTitle tag="p">55</CardTitle>
                      <p />
                    </div>
                  </Col>
                  <Col md="8" xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-money-coins text-success" /> */}
                      <img
                        alt="..."
                        src={require('../../src/assets/img/icon_ofd.svg')}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <span>OFD</span>
                  <br />
                  <span>Out for Delivery</span>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="7">
                    <div className="numbers">
                      <CardTitle tag="p">43</CardTitle>
                      <p />
                    </div>
                  </Col>
                  <Col md="8" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img
                        alt="..."
                        src={require('../../src/assets/img/icon_ofd.svg')}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <span>DEL</span>
                  <br />
                  <span>Delivered</span>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="7">
                    <div className="numbers">
                      <CardTitle tag="p">23</CardTitle>
                      <p />
                    </div>
                  </Col>
                  <Col md="8" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <img
                        alt="..."
                        src={require('../../src/assets/img/icon_ofd.svg')}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <span>UNDEL</span>
                  <br />
                  <span>Undelivered</span>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="4" sm="6">
            <Card>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Tables />
        </Row>
      </div>
      </>
    );
  }
}

export default Dashboard;
