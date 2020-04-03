import Mock from 'mockjs';

const { Random } = Mock;

export default {
    'GET /api/catalog/list': Mock.mock({
        'list|10': [
            {
                'id|+1': 1,
                'brandName': '@cname',
                'dealerName': '@cname',
                'codeSN': Random.natural(100000000, 999999999),
                'children': [{
                    'id|+1': 11,
                    'brandName': '@cname',
                    'codeSN': Random.natural(100000000, 999999999)
                }]
            }
        ]
    })
}