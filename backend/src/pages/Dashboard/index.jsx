import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'antd';
import SearchTree from './components/SearchTree';
import FeeTable from './components/FeeTable';
import UploadFile from './components/UploadFile';
import styles from './index.less';

export default () => {
  const [, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <UploadFile />
      <Card>
        <Row>
          <Col
            span={6}
            style={{
              minHeight: 400,
              padding: 16,
            }}
          >
            <Card>
              <SearchTree />
            </Card>
          </Col>
          <Col
            span={18}
            style={{
              minHeight: 400,
              padding: 16,
            }}
          >
            <Card>
              <FeeTable />
            </Card>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
};
