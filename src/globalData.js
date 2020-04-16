import { EXAMINE, STANDARDS, CAR_USE, PLATE_CLASS, PLATE_TYPE } from './globalConstant';

export const examineArr = [
    { key: EXAMINE.All, val: '全部', color: '' },
    { key: EXAMINE.NOT, val: '不通过', color: 'red' },
    { key: EXAMINE.WAIT, val: '待审核', color: 'blue' },
    { key: EXAMINE.WAIT2, val: '待审核', color: 'blue' },
    { key: EXAMINE.FINISH, val: '已完成', color: 'green' },
];

export const standardsArr = [
    { key: STANDARDS.NEW, val: '新国标' },
    { key: STANDARDS.OLD, val: '旧国标' }
];

export const plateTypeArr = [
    { key: PLATE_TYPE.TEMPORARY, val: '临时号牌' },
    { key: PLATE_TYPE.FORMAL, val: '正式号牌' }
]

export const carUseArr = [
    { key: CAR_USE.SELF, val: '自用' },
    { key: CAR_USE.EXPRESS, val: '快递' },
    { key: CAR_USE.TAKEOUT, val: '外卖' },
    { key: CAR_USE.OTHER, val: '其他' }
]

export const plateClassArr = [
    { key: PLATE_CLASS.ORDINARY, val: '普通电动自行车号牌' }, 
    { key: PLATE_CLASS.OTHER, val: '其他电动自行车号牌' },
]


export default {
    examineArr,
    standardsArr,
    carUseArr,
    plateClassArr,
    plateTypeArr
}