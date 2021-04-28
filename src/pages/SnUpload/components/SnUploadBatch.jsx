import React from 'react';
import { FileWordOutlined } from '@ant-design/icons';
import AddExcel from './AddExcel'
import styles from './index.less';
import wordImg from '@/assets/Excelguanli.png'
const SnUploadBatch = (props) => {

  const { changeTbaCurrentsCB } = props;
  return (
    <div className={styles.container}>
      <div className={styles.context}>
        <h3 className='mt-16'>
          点击此处
          <a
            href='./snDeclare.xlsx'
            download='品牌厂家SN申报模板'
            className='font-underline ml-8'>
            下载模板
          </a>
        </h3>
        <p className='mt-16'>
          <img src={wordImg}/>
        </p>
        <p className='mt-16'>
          <AddExcel changeTbaCurrentsCB={changeTbaCurrentsCB} />
        </p>
        <p className='mt-16'>
          单次上传数据条目不能大于500条，上传文件应不大于500M
        </p>
      </div>
      <div className={styles.matter}>
        <h3>1.先下载模版，按照模版要求填写完成后在下方上传提交申报批次</h3>
        <h3>2.上传excel中的型号必须是您的品牌已申报并审批通过的型号，否则无法上传成功</h3>
        <h3>3.SN码具有全局唯一性，上传的SN码不能与已经存在或处于待审核状态的SN重复</h3>
        <h3>4.SN上传文件的填写内容应当避免空格和空行</h3>
      </div>
    </div>
  );
}

export default SnUploadBatch;
