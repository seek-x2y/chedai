import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { uploadFile } from '@/services/file';

const { Dragger } = Upload;

class UploadFile extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    fileData: [],
  };

  uploadProps = {
    name: 'file',
    accept:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    action: uploadFile,
    beforeUpload(file) {
      // 此处的type实际是input的accept, 即 Content Type
      const isExcel =
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel';
      if (!isExcel) {
        message.error('仅支持上传 XLSX/XLS 格式文件');
      }
      const isLt50M = file.size / 1024 / 1024 < 50;
      if (!isLt50M) {
        message.error('文件大小不能超过 50 M');
      }
    },
    customRequest: () => {},
    data: {},
    multiple: false,
    onChange(info) {
      if (info) {
        const { file } = info;
        if (file.status === 'uploading') {
          setTimeout(() => {
            // this.setState({
            //   percent: fileList.percent
            // })
          });
        }
      }
    },
    onSuccess(res) {
      console.log(res);
    },
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
