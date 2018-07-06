<?php
// +----------------------------------------------------------------------
// | Description: 系统用户
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

class Users extends ApiCommon
{

    /**
     * @api {GET} admin/users 03用户列表
     * @apiVersion 1.0.0
     * @apiName userList
     * @apiGroup User

     * @apiParam {String} keywords 关键字
     * @apiParam {Number} struct_id 部门id
     * @apiParam {Number} page 当前页数
     * @apiParam {Number} limit 每页数量

     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息
     * @apiSuccess {Number} data.dataCount 数据总量
     * @apiSuccess {String[]} data.list 返回数据
     * @apiSuccess {String} data.list.username 账号
     * @apiSuccess {String} data.list.password 密码
     * @apiSuccess {String} data.list.remark 备注
     * @apiSuccess {Number} data.list.create_time 创建时间
     * @apiSuccess {Number} data.list.status 状态1启用0禁用
     * @apiSuccess {String} data.list.realname  真实姓名
     * @apiSuccess {String} data.list.s_name 部门
     * @apiSuccess {String} data.list.p_name 岗位
     * @apiSuccess {String} error 错误信息

     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "code": 200,
     *       "data": {
                "list": [{
                    "id": 3,
                    "username": "用户AAAA",
                    "password": "c78b6663d47cfbdb4d65ea51c104044e",
                    "remark": "",
                    "create_time": 1487217060,
                    "realname": "用户A",
                    "structure_id": 5,
                    "post_id": 20,
                    "status": 1,
                    "s_name": "设计部",
                    "p_name": "项目经理"
                }],
                "dataCount": 1
              },
              "error": ""
     *     }

     * @apiError (404) 404错误 地址不存在
     *
     * @apiErrorExample 400-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "地址不存在"
     *     }

     * @apiError (500) 500错误 服务器内部错误
     *
     * @apiErrorExample 500-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "error": "服务器内部错误"
     *     }
    */
    public function index()
    {   
        $userModel = model('User');
        $param = $this->param;
        $keywords = !empty($param['keywords']) ? $param['keywords']: '';
        $page = !empty($param['page']) ? $param['page']: '';
        $limit = !empty($param['limit']) ? $param['limit']: '';    
        $data = $userModel->getDataList($keywords, $page, $limit);
        return resultArray(['data' => $data]);
    }

    public function read()
    {   
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    public function save()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    public function update()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    public function delete()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->delDataById($param['id']);       
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    public function deletes()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->delDatas($param['ids']);  
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    public function enables()
    {
        $userModel = model('User');
        $param = $this->param;
        $data = $userModel->enableDatas($param['ids'], $param['status']);  
        if (!$data) {
            return resultArray(['error' => $userModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
    
}
 