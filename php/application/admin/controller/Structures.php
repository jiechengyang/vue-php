<?php
// +----------------------------------------------------------------------
// | Description: 组织架构
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

/**
 * @apiDefine deptParam
 * @apiParam {Int} pid 上级id
 * @apiParam {String} name 名称
*/

/**
 * @apiDefine deptResponse
 * @apiSuccess {Number} code 200正确400错误
 * @apiSuccess {object} data 返回信息
 * @apiSuccess {Int} data.id 主键
 * @apiSuccess {Int} data.pid 上级id
 * @apiSuccess {String} data.name 名称
 * @apiSuccess {Number} data.status 状态1启用0禁用
 * @apiSuccess {String} data.p_title 上级名称
 * @apiSuccess {String} data.level  级别
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
class Structures extends ApiCommon
{

    /**
     * @api {GET} admin/structures 01获取部门列表
     * @apiVersion 1.0.0
     * @apiName list
     * @apiGroup Department
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 1,
                "name": "广东洪睿信息科技有限公司",
                "pid": 0,
                "status": 1,
                "p_title": "",
                "else": "广东洪睿信息科技有限公司",
                "title": "广东洪睿信息科技有限公司",
                "level": 1
            }],
            "error": ""
        }

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function index()
    {   
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->getDataList();
        return resultArray(['data' => $data]);
    }

    /**
     * @api {GET} admin/structures/:id 02获取部门详情
     * @apiVersion 1.0.0
     * @apiName read
     * @apiGroup Department
     *
     * @apiSampleRequest admin/structures/
     * 
     * @apiParam {Int} id 部门ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 1,
                "name": "广东洪睿信息科技有限公司",
                "pid": 0,
                "status": 1,
                "p_title": "",
                "else": "广东洪睿信息科技有限公司",
                "title": "广东洪睿信息科技有限公司",
                "level": 1
            }],
            "error": ""
        }

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function read()
    {   
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {POST} admin/structures/ 03添加部门
     * @apiVersion 1.0.0
     * @apiName save
     * @apiGroup Department
     * 
     * @apiUse deptParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "添加成功",
            "error": ""
        }

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function save()
    {
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    /**
     * @api {PUT} admin/structures/:id 04编辑部门
     * @apiVersion 1.0.0
     * @apiName update
     * @apiGroup Department
     * 
     * @apiSampleRequest admin/structures
     * 
     * @apiParam {Int} id 部门ID(GET参数)
     * @apiUse deptParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "编辑成功",
            "error": ""
        }

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function update()
    {
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    /**
     * @api {DELETE} admin/structures/:id 05删除部门
     * @apiVersion 1.0.0
     * @apiName delete
     * @apiGroup Department
     * 
     * @apiSampleRequest admin/structures
     * 
     * @apiParam {Int} id 部门ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "删除成功",
            "error": ""
        }

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function delete()
    {
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->delDataById($param['id'], true);       
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    /**
     * @api {POST} admin/structures/deletes 06批量删除部门
     * @apiVersion 1.0.0
     * @apiName deletes
     * @apiGroup Department
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

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function deletes()
    {
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->delDatas($param['ids'], true);  
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    /**
     * @api {POST} admin/structures/enables 07批量启用、禁用
     * @apiVersion 1.0.0
     * @apiName enables
     * @apiGroup Department
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

     * @apiUse deptResponse
     * @apiUse commError
     */
    public function enables()
    {
        $structureModel = model('Structure');
        $param = $this->param;
        $data = $structureModel->enableDatas($param['ids'], $param['status'], true);  
        if (!$data) {
            return resultArray(['error' => $structureModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 