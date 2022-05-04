import {baseUrl} from './baseUrl.js'

const CREATE_USER_POST = baseUrl.API_URL+"api/users";
const ALL_USERS_GET = baseUrl.API_URL+"api/users";

const CREATE_USER_POST_URL = "users";
const ALL_USERS_GET_URL = "users";

export const apiUrl = {
    CREATE_USER_POST,
    ALL_USERS_GET,
    CREATE_USER_POST_URL,
    ALL_USERS_GET_URL
}