import { typeApproveList } from '@/services/typeApproval';
const initialState = {
    total: 0,
    pagesIndex: 1,
    pagesSize: 10
}

export default {
    namespace: 'typeApproval',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { call, put }) {
            
        }
    },
    reducers: {

    }
}