import { Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styles from './index.less';

const PicPreview = props => {
  const { src } = props;
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  }
  const hideModal = () => {
    setVisible(false);
  }

  return (
    <div className={styles.picPreview}>
      <div className='box' >
        <img src={src} alt=" " />
        <div className='opera-box'>
          <div className='opera'><EyeOutlined onClick={showModal} /></div>
        </div>
      </div>
      <Modal className='picPreview preview-wrap' width='80%' visible={visible} footer={null} onCancel={hideModal} destroyOnClose>
        <div className='preview-box flex hc vc'>
          <img src={src} alt=" " style={{ maxWidth: '100%' }} />
        </div>
      </Modal>
    </div>
  );
};

export default PicPreview;
