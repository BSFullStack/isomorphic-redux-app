/**
 * 验证是否登录中间件
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
export function isLoginAuth(req, res, next){
    const { user } = req.session;
    if (user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}
