import Mock from 'mockjs';


export default {
    'POST /api/authority/authorityList': Mock.mock({
        'data|10': [{
            'id|+1': 1,
            'name|1':['陈平安','徐凤年','李淳刚','剑九黄','洗洪象'],
            'phoneNumber': 15619270901,
            'role|1': ['超级管理员', '支队管理员', '品牌厂家'],
            'authority': ['人员管理', '商户管理', '目录管理'],
            'status|1': ['0','1'], // 0 停用 1启用
            'turnStopDate': '@date(yyyy-MM-dd)',
        }],
        'total': 10
    })
}