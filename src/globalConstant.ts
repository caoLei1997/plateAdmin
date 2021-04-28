export const EXAMINE = {
    ALL: 'all',
    WAIT: '3',
    WAIT2: '0',
    NOT: '2',
    FINISH: '1'
}

export const STANDARDS = {
    NEW: '01',
    OLD: '02'
}

export const CAR_USE = {
    SELF: '0',
    EXPRESS: '1',
    TAKEOUT: '2',
    OTHER: '3'
}

export const PLATE_CLASS = {
    ORDINARY: '01',
    OTHER: '02'
}

export const PERSONAL_STATUS = {
    OPEN: '0',
    CLOSE: '1'
}

export const PLATE_TYPE = {
    TEMPORARY: 0,
    FORMAL: 1
}

export const LOCALUSERKEY = 'bike_user';
export const LOCAL_MEANS_IDS_KEY = 'means_ids';
export const LOCAL_MEANS_FILTER = 'means_filter';
export const SUPER_UNIQUE = 999999999; // 管理员
export const PoliceChannel = 13; // 交警
export const agentChannel = 11; // 经销商
export const BrigadeChannel = 14; // 交警大队

export const RETCODESUCCESS = '0000'; // 请求成功
export const RETCODE_TOKEN_ERR = 'token_error'; // token错误码
export const PAGESIZE = 10; // 分页条数
export const PAGE_INDEX = 0; // 页数
export const MODAL_PAGESIZE = '10';
export const INIT_ADMIN = '18629331200'
export const GUTTER = 20;// 删格间距
export const LABEL_COL = {// form label宽度
    span: 6,
    offset: 1
}


// 枚举
export enum VehicleReason {
    Scrap = '灭失或报废',
    Stolen = '车辆失窃',
    NewVehicleBack = '新车退车',
    OtherPlace = '迁往外地',
    OldForNew = '以旧换新或不再使用',
    Repeal = '依法撤销登记',
}

export enum VehicleReasonStatus {
    Scrap = 'scrap', // 灭失或报废
    Stolen = 'stolen',// 车辆失窃
    NewVehicleBack = 'newVehicleBack',// 车辆失窃
    OtherPlace = 'otherPlace',// 还往外地
    OldForNew = 'oldForNew',// 以旧换新或不再使用
    Repeal = 'repeal',//'依法撤销登记',
}


export enum vehicleUse {
    SelfUse = '自用',
    ExpressDelivery = '快递',
    Takeaway = '外卖',
    Other = '其他',
}

export enum certificate {
    IDCare = '身份证',
    passport = '护照',
    HongKong = '港澳通行证',
    officerID = '军官证',
}


export const NEW_API = '/newapi' //车辆变更注销 新服务
export const API = ''  //基础老服务