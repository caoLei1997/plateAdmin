import Mock from 'mockjs';

export default {
  'GET /api/infoChangeList': Mock.mock({
    'data|10': [{
      'id|+1': 1,
      'dateOfApplication': '@date(yyyy-MM-dd)',
      'registerPerson': '@cname',
      'IDType|1': [0, 1, 2],
      'IDNumber': 6101211116691025,
      'phoneNumber': 1561927091,
      'changeField|1': [1, 2, 3],
      'status|1': [1, 2, 3],
      'reviewDate': '@date(yyyy-MM-dd)',
      'fail': '@fail',
    }],
    'total': 10
  })
}