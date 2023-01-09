
const API_SERVER_URL = `http://localhost:3080/api`;

const API_SERVICES = {
    GET_CUSTOMERS: `${API_SERVER_URL}/customers`,
    GET_REWARD_POINTS: `${API_SERVER_URL}/customer/reward-points`,
    ADD_CUSTOMER: `${API_SERVER_URL}/customer`,
    ADD_TRANSACTION: `${API_SERVER_URL}/customer/transaction/`,
};

export {
    API_SERVER_URL,
    API_SERVICES,
};
