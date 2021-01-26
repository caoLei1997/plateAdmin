import React, { FC } from 'react';
import BranFilter from './components/BranFilter/BranFilter';
import BrandAdd from './components/BrandAdd/BrandAdd';
import BrandList from './components/BrandList/BrandList';
import { connect } from 'umi';

const index: FC<{}> = (props) => {
  return (
    <div>
      <BranFilter />
      <BrandAdd />
      <BrandList />
    </div>
  );
}

export default connect()(index);
