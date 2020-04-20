import React from 'react';
import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadFile } from '@/services/upload';

const { Dragger } = Upload;

class UploadFile extends React.Component {
  uploadProps = {
    name: 'file',
    accept: '.xlsx, .xls',
    action: uploadFile,
    beforeUpload: () => {},
    customRequest: () => {},
    data: {},
    headers: {},
    multiple: false,
    onUpload: (file) => {
      console.log(file);
    },
  };

  handleUploadChange = (info) => {
    console.log(info);
  };

  // async beforeUpload(file){
  //     await this.fecthUploadToken(file);
  //     return true;
  // }

  render() {
    return (
      <Dragger {...this.uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件进行上传</p>
      </Dragger>
    );
  }
}

export default UploadFile;
