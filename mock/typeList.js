import Mock from 'mockjs';

export default {
    'POST /api/typeApprove/typeApproveList': Mock.mock({
        'data|100': [{
            'id|+1': 1,
            'applyAt;': '@date(yyyy-MM-dd)',
            'agentOutletsName|1': ['陈平安', '徐凤年', '李淳刚', '剑九黄', '洗洪象'],
            'batchName|1': ['A33', 'T50', 'N99'],
            'batchModelCount|1': [99, 88, 77, 66, 55],
            'approvalStatus|1': [1, 2, 3], // 
            'approvalAt': '@date(yyyy-MM-dd)',
            'notPassReason|approvalStatus ==2': '不想给你通过'
        }],
        'total': 100,
    })
}