<?php
// +----------------------------------------------------------------------
// | Description: 用户组
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

/**
 * @apiDefine groupsParam
 * @apiParam {String} name 名称
 * @apiParam {String} remark 备注
*/

/**
 * @apiDefine groupsResponse
 * @apiSuccess {Number} code 200正确400错误
 * @apiSuccess {object} data 返回信息
 * @apiSuccess {Int} data.id 主键
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {String} data.remark 备注
 * @apiSuccess {String} data.create_time 创建时间
 * @apiSuccess {Number} data.status 状态1启用0禁用
 * @apiSuccess {String} error 错误信息
 */

/**
 * @apiDefine commError
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
class Groups extends ApiCommon
{

    /**
     * @api {GET} admin/groups 01获取用户组列表
     * @apiVersion 1.0.0
     * @apiName list
     * @apiGroup Groups
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 15,
                "title": "普通会员",
                "rules": "1,2,3,4,5,6,7,8,9,10,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,61,62,63,28,29",
                "pid": 0,
                "remark": "最厉害的组别",
                "status": 1,
                "p_title": "",
                "else": "普通会员",
                "level": 1
            }],
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function index()
    {   
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->getDataList();
        return resultArray(['data' => $data]);
    }

   /**
     * @api {GET} admin/groups/:id 02获取用户组详情
     * @apiVersion 1.0.0
     * @apiName read
     * @apiGroup Groups
     *
     * @apiSampleRequest admin/groups/
     * 
     * @apiParam {Int} id 用户组ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 15,
                "title": "普通会员",
                "rules": "1,2,3,4,5,6,7,8,9,10,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59,61,62,63,28,29",
                "pid": 0,
                "remark": "最厉害的组别",
                "status": 1,
                "p_title": "",
                "else": "普通会员",
                "level": 1
            }],
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function read()
    {   
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {POST} admin/groups/ 03添加用户组
     * @apiVersion 1.0.0
     * @apiName save
     * @apiGroup Groups
     * 
     * @apiUse groupsParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "添加成功",
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function save()
    {
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    /**
     * @api {PUT} admin/groups/:id 04编辑用户组
     * @apiVersion 1.0.0
     * @apiName update
     * @apiGroup Groups
     * 
     * @apiSampleRequest admin/groups
     * 
     * @apiParam {Int} id 用户组ID(GET参数)
     * @apiUse groupsParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "编辑成功",
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function update()
    {
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

   /**
     * @api {DELETE} admin/groups/:id 05删除用户组
     * @apiVersion 1.0.0
     * @apiName delete
     * @apiGroup Groups
     * 
     * @apiSampleRequest admin/groups
     * 
     * @apiParam {Int} id 用户组ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "删除成功",
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function delete()
    {
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->delDataById($param['id'], true);       
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    /**
     * @api {POST} admin/groups/deletes 06批量删除用户组
     * @apiVersion 1.0.0
     * @apiName deletes
     * @apiGroup Groups
     * 
     * @apiParam {Int[]} ids 需要删除的ID
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "删除成功",
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function deletes()
    {
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->delDatas($param['ids'], true);  
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    /**
     * @api {POST} admin/groups/enables 07批量启用、禁用
     * @apiVersion 1.0.0
     * @apiName enables
     * @apiGroup Groups
     * 
     * @apiParam {Int[]} ids 需要操作的ID
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "操作成功",
            "error": ""
        }

     * @apiUse groupsResponse
     * @apiUse commError
     */
    public function enables()
    {
        $groupModel = model('Group');
        $param = $this->param;
        $data = $groupModel->enableDatas($param['ids'], $param['status'], true);  
        if (!$data) {
            return resultArray(['error' => $groupModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 