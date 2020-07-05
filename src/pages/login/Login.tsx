import React from "react";
import { Row, Col, Card, Button } from "antd";

export default () => (
  <div className="App">
    <Row justify="center">
      <Col span="6">
        <Card title="login page">
          <Button type="primary" style={{ marginLeft: 8 }}>
            login page
          </Button>
        </Card>
      </Col>
    </Row>
  </div>
);
