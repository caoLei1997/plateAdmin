import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsWrap = ({ tabData = [], change }) => {
    const handleChange = (key) => {
        change(key);
    }

    return (
        <div>
            <Tabs defaultActiveKey="1" size='large' onChange={handleChange}>
                {tabData.map(item => <TabPane tab={item.title} key={`tab-pane-${item.id}`}>{item.components}</TabPane>)}
            </Tabs>
        </div>
    )
}

export default TabsWrap;