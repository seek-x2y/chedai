import React from 'react';
import { Upload, Button, Row, Col, Divider, message } from 'antd';
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
    message.loading('文件上传中....');
    uploadFile(formData)
      .then(() => {
        this.setState({
          uploading: false,
        });
        message.success('文件上传成功！');
      })
      .catch(() => {
        message.error('文件上传失败！');
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
