import Cookie from 'js-cookie';

/**
 * React js remove cookie
 */

const RemoveCookie = (cookiename)=>{
    Cookie.remove(cookiename)
};
export default RemoveCookie;