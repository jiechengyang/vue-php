<?php
// +----------------------------------------------------------------------
// | Description: 基础类，无需验证权限。
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

use com\verify\HonrayVerify;
use app\common\controller\Common;
use think\Request;

class Base extends Common
{
    /**
     * @api {post} admin/base/login 01用户登录
     * @apiVersion 1.0.0
     * @apiName login
     * @apiGroup User
     *
     * @apiParam {String} username 用户名
     * @apiParam {String} password 密码
     * @apiParam {String} verifyCode 验证码(当登录使用验证码验证的时候带上)
     * @apiParam {String} isRemember 记住密码(1:记住,0:不记住)

     * @apiSuccess {Number} code 返回码
     * @apiSuccess {String[]} data 返回数据
     * @apiSuccess {String} error 错误信息

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": {
                "authKey": "13578968cee752cced1dbf6ea4ff8f4e", 
                "authList": [], "menusList": [], 
                "sessionId": "hh42esnfeoetgs14u1g2jhv3m3",
                "userInfo": {},
              },
              "error": ""
     *     }

     * @apiError userinfoError  账户信息错误.
     *
     * @apiErrorExample userinfoError-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 400,
     *       "data": "",
     *       "error": "用户名或密码错误"
     *     }

     * @apiError 404错误 地址不存在
     *
     * @apiErrorExample 400-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "地址不存在"
     *     }

     * @apiError 500错误 服务器内部错误
     *
     * @apiErrorExample 500-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "error": "服务器内部错误"
     *     }
    */
    public function login()
    {   
        $userModel = model('User');
        $param = $this->param;
        $username = $param['username'];
        $password = $param['password'];
        $verifyCode = !empty($param['verifyCode'])? $param['verifyCode']: '';
        $isRemember = !empty($param['isRemember'])? $param['isRemember']: '';
        $data = $userModel->login($username, $password, $verifyCode, $isRemember);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function relogin()
    {   
        $userModel = model('User');
        $param = $this->param;
        $data = decrypt($param['rememberKey']);
        $username = $data['username'];
        $password = $data['password'];

        $data = $userModel->login($username, $password, '', true, true);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {post} admin/base/logout 02退出登录
     * @apiVersion 1.0.0
     * @apiName logout
     * @apiGroup User
     *
     * @apiParam {String} authkey 密钥
     * @apiParam {String} sessionId SESSIONID

     * @apiSuccess {Number} code 返回码
     * @apiSuccess {String} data 返回数据
     * @apiSuccess {String} error 错误信息

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": "退出成功",
             "error": ""
     *     }

     * @apiError 404错误 地址不存在
     *
     * @apiErrorExample 400-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "地址不存在"
     *     }

     * @apiError 500错误 服务器内部错误
     *
     * @apiErrorExample 500-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "error": "服务器内部错误"
     *     }
    */
    public function logout()
    {
        $param = $this->param;
        cache('Auth_'.$param['authkey'], null);
        return resultArray(['data'=>'退出成功']);
    }

    public function getConfigs()
    {
        $systemConfig = cache('DB_CONFIG_DATA'); 
        if (!$systemConfig) {
            //获取所有系统配置
            $systemConfig = model('admin/SystemConfig')->getDataList();
            cache('DB_CONFIG_DATA', null);
            cache('DB_CONFIG_DATA', $systemConfig, 36000); //缓存配置
        }
        return resultArray(['data' => $systemConfig]);
    }

    public function getVerify()
    {
        $captcha = new HonrayVerify(config('captcha'));
        return $captcha->entry();
    }

    public function setInfo()
    {
        $userModel = model('User');
        $param = $this->param;
        $old_pwd = $param['old_pwd'];
        $new_pwd = $param['new_pwd'];
        $auth_key = $param['auth_key'];
        $data = $userModel->setInfo($auth_key, $old_pwd, $new_pwd);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    // miss 路由：处理没有匹配到的路由规则
    public function miss()
    {
        if (Request::instance()->isOptions()) {
            return 'router error';
        } else {
            echo 'vuethink接口';
        }
    }

    public function test()
    {
        echo "路由测试";
    }
}
 