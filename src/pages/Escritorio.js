import React, { useState } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { Redirect, useHistory } from "react-router-dom";

const { Title, Text } = Typography;

export const Escritorio = () => {
  const [usuario] = useState(getUsuarioStorage());
  useHideMenu(false);
  const history = useHistory();
  const salir = () => {
    localStorage.clear();
    history.replace("/ingresar");
  };
  const siguienteTicket = () => {};
  if (!usuario.agente || !usuario.escritorio) {
    return <Redirect to="/ingresar" />;
  }
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta trabajando en el escritorio</Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            Salir
            <CloseCircleOutlined />
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            Siguiente <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};
