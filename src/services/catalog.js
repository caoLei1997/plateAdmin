import request from '@/utils/request';

export const requestCatalogList = () => request('/api/catalog/list', {
    method: 'GET'
});
