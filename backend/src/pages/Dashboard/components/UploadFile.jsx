import React from 'react';
import { Upload, Button, Row, Col, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadFile } from '@/services/file';

class UploadFile extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    uploadFile(formData)
      .then((r) => {
        console.log('fetch ok', r);
      })
      .catch((r) => {
        console.log('fetch reject', r);
      });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      multiple: false,
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <Row gutter={16}>
        <Col span={2}>
          <Upload {...props}>
            <Button>
              <UploadOutlined /> 选择文件
            </Button>
          </Upload>
        </Col>
        <Col span={14}>
          <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
          >
            {uploading ? '正在上传...' : '开始上传'}
          </Button>
        </Col>
        <Divider />
      </Row>
    );
  }
}

export default UploadFile;
