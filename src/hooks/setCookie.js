import Cookie from 'js-cookie';

/**
 * React js set cookie
 */

const SetCookie = (cookiename,userin)=>{
    Cookie.set(cookiename, userin, {
        expires:30, // 30 days
        secure:true,
        sameSite:'strict',
        path:'/'
    })
};
export default SetCookie;