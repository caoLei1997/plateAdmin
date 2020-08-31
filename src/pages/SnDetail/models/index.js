import { PAGESIZE } from "@/globalConstant";

const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: PAGESIZE,
    content: [],
}


export default {
    namespace: 'snDetail',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { put, call }) {
            
        }
    },
    reducers: {}
}