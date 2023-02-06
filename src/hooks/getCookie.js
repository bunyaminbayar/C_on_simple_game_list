import Cookie from 'js-cookie';

/**
 * React js get cookie
 */

const GetCookie = (cookiename)=>{
    return Cookie.get(cookiename)
};
export default GetCookie;