import { EXAMINEAll, EXAMINENOT, EXAMINEFINISH, EXAMINEWAIT } from './globalConstant';

export const examineArr = [
    { key: EXAMINEAll, val: '全部', color: '' },
    { key: EXAMINENOT, val: '不通过', color: 'red' },
    { key: EXAMINEWAIT, val: '待审核', color: 'blue' },
    { key: EXAMINEFINISH, val: '已完成', color: 'green' },
];
