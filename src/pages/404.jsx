import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
<<<<<<< HEAD


=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
