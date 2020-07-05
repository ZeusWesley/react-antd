import React from 'react'
import logo from '../../logo.svg';
import { Row, Col, Card, Button } from "antd";

export default () => {
    return (
    <div className="App">
      <Row justify="center">
        <Col span="6">
        <Card title="Login">
          <Button type="primary" style={{ marginLeft: 8 }}>
          Sign in
          </Button>
        </Card>
        </Col>
      </Row>
    </div>
    )
}