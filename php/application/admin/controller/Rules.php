<?php
// +----------------------------------------------------------------------
// | Description: 规则
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

/**
 * @apiDefine RuleResponse
 * @apiSuccess {Number} code 200正确400错误
 * @apiSuccess {object} data 返回信息
 * @apiSuccess {Int} data.id 主键
 * @apiSuccess {String} data.name 权限标识
 * @apiSuccess {String} data.title 权限显示名
 * @apiSuccess {String} data.p_title 上级名称
 * @apiSuccess {Number} data.level 级别1模块,2控制器,3操作
 * @apiSuccess {String} data.remark  备注
 * @apiSuccess {Number} data.status 状态
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

class Rules extends ApiCommon
{
    /**
     * @api {GET} admin/rules 01获取规则列表
     * @apiVersion 1.0.0
     * @apiName ruleList
     * @apiGroup Rule
     *
     * @apiParam {String} keywords 关键字
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 10,
                "title": "系统基础功能",
                "name": "admin",
                "level": 1,
                "pid": 0,
                "status": 1,
                "p_title": "",
                "else": "系统基础功能"
            }],
            "error": ""
        }

     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function index()
    {   
        $ruleModel = model('Rule');
        $param = $this->param;
        $type = !empty($param['type'])? $param['type']: '';
        $data = $ruleModel->getDataList($type);
        return resultArray(['data' => $data]);
    }

    /**
     * @api {GET} admin/rules/:id 02获取规则详情
     * @apiVersion 1.0.0
     * @apiName read
     * @apiGroup Rule
     *
     * @apiSampleRequest admin/rules/
     * 
     * @apiParam {Int} id 用户ID(GET参数)
     * @apiParam {String} keywords 关键字
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 10,
                "title": "系统基础功能",
                "name": "admin",
                "level": 1,
                "pid": 0,
                "status": 1,
                "p_title": "",
                "else": "系统基础功能"
            }],
            "error": ""
        }
     *
     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function read()
    {   
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {POST} admin/rules 03新增规则详情
     * @apiVersion 1.0.0
     * @apiName save
     * @apiGroup Rule
     *
     * @apiParam {String} name 权限标识
     * @apiParam {String} title 权限显示名
     * @apiParam {String} pid 上级ID
     * @apiParam {Number} level 级别1模块,2控制器,3操作
     * @apiParam {Int} structure_id 所属部门 
     * @apiParam {String} remark 备注
     *
     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息 
     * @apiSuccess {String} error 错误信息
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "添加成功",
                "error": ""
            }

     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function save()
    {
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    /**
     * @api {PUT} admin/rules/:id 04编辑规则
     * @apiVersion 1.0.0
     * @apiName update
     * @apiGroup Rule
     *
     * @apiSampleRequest admin/rules/
     * 
     * @apiParam {Int} id 规则ID(GET参数)
     * @apiParam {String} name 权限标识
     * @apiParam {String} title 权限显示名
     * @apiParam {String} pid 上级ID
     * @apiParam {Number} level 级别1模块,2控制器,3操作
     * @apiParam {Int} structure_id 所属部门 
     * @apiParam {String} remark 备注
     *
     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息 
     * @apiSuccess {String} error 错误信息
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "编辑成功",
                "error": ""
            }

     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function update()
    {
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    /**
     * @api {DELETE} admin/rules/:id 05删除规则
     * @apiVersion 1.0.0
     * @apiName delete
     * @apiGroup Rule
     *
     * @apiSampleRequest admin/rules/
     * 
     * @apiParam {Int} id 规则ID(GET参数)
     *
     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息 
     * @apiSuccess {String} error 错误信息
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "删除成功",
                "error": ""
            }
     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function delete()
    {
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->delDataById($param['id'], true);       
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    /**
     * @api {POST} admin/rules/deletes 06批量删除规则
     * @apiVersion 1.0.0
     * @apiName deletes
     * @apiGroup Rule
     * 
     * @apiParam {Int[]} ids 需要删除的ID
     *
     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息 
     * @apiSuccess {String} error 错误信息
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "删除成功",
                "error": ""
            }
     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function deletes()
    {
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->delDatas($param['ids'], true);  
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    /**
     * @api {POST} admin/rules/enables 07批量启用、禁用
     * @apiVersion 1.0.0
     * @apiName enables
     * @apiGroup Rule
     * 
     * @apiParam {Int[]} ids 需要修改的ID
     *
     * @apiSuccess {Number} code 200正确400错误
     * @apiSuccess {object} data 返回信息 
     * @apiSuccess {String} error 错误信息
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "删除成功",
                "error": ""
            }
     * @apiUse RuleResponse
     * @apiUse commError
     */
    public function enables()
    {
        $ruleModel = model('Rule');
        $param = $this->param;
        $data = $ruleModel->enableDatas($param['ids'], $param['status'], true);  
        if (!$data) {
            return resultArray(['error' => $ruleModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 