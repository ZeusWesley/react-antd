import React from "react";
import { Row, Col, Card, Button } from "antd";

export default () => (
  <div className="App">
    <Row justify="center">
      <Col span="6">
        <Card title="HOME PAGE">
          <Button type="primary" style={{ marginLeft: 8 }}>
            HOME PAGE
          </Button>
        </Card>
      </Col>
    </Row>
  </div>
);
