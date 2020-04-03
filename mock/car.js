import Mock from 'mockjs';

export default {
    'GET /api/car/dealerList': Mock.mock({
        'data|10': [{
            'id|+1': 1,
            'val': '@cname'
        }]
    }),
    'GET /api/car/meansList': Mock.mock({
        'data|10': [{
            'id|+1': 1,
            'applyDate': '@date(yyyy-MM-dd)',
            'secondDealer': '@cname',
            'carBrand|1': ['爱玛', '雅迪', '绿能', '小牛电动', '五羊-本田', 'E客'],
            'carModel|1': ['TR11Z', 'TR66X', 'TR16Z', 'TR26Z', 'TR15X', 'TR11A'],
            'SNCode|1': ['11110', '11112', '10135', '485745', '16584', '13584'],
            'cccIdCode|1': ['154878845', '15487878456', '123546987', '154862135', '45648974', '123549879'],
            'status|1': [1, 2, 3],
            'date': '@date(yyyy-MM-dd)',
            'reason': '@ctitle'
        }],
        'total': 10
    })
}