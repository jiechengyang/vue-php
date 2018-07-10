<?php
// +----------------------------------------------------------------------
// | Description: 菜单
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

/**
 * @apiDefine menuParam
 * @apiParam {Int} pid 上级id
 * @apiParam {String} title 菜单名称
 * @apiParam {String} url 链接
 * @apiParam {String} icon 图标
 * @apiParam {String} menu_type 1普通三级菜单2单页菜单3外联 
 * @apiParam {Number} sort 排序
 * @apiParam {Number} status 状态1启用0禁用
 * @apiParam {Int} rule_id 绑定标识
 * @apiParam {Int} module 所属菜单
 * @apiParam {Number} from 子菜单来源
*/

/**
 * @apiDefine menuResponse
 * @apiSuccess {Number} code 200正确400错误
 * @apiSuccess {object} data 返回信息
 * @apiSuccess {Int} data.id 主键
 * @apiSuccess {Int} data.pid 上级id
 * @apiSuccess {String} data.title 菜单名称
 * @apiSuccess {String} data.url 链接
 * @apiSuccess {String} data.icon 图标
 * @apiSuccess {String} data.menu_type  1普通三级菜单2单页菜单3外联
 * @apiSuccess {Number} data.sort 排序
 * @apiSuccess {Number} data.rule_id 绑定标识
 * @apiSuccess {Number} data.module 模块
 * @apiSuccess {Number} data.from 子菜单来源
 * @apiSuccess {Number} data.p_title 上级菜单
 * @apiSuccess {Number} data.level 级别
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
class Menus extends ApiCommon
{

    /**
     * @api {GET} admin/menus 01获取菜单列表
     * @apiVersion 1.0.0
     * @apiName menuList
     * @apiGroup Menu
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 56,
                "pid": 53,
                "title": "      ├ 权限规则",
                "url": "\/home\/rule\/list",
                "icon": "",
                "menu_type": 1,
                "sort": 0,
                "status": 1,
                "rule_id": 13,
                "module": "Administrative",
                "menu": "rule",
                "p_title": "系统配置",
                "else": "权限规则",
                "level": 3
            }],
            "error": ""
        }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function index()
    {   
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->getDataList();
        return resultArray(['data' => $data]);
    }

    /**
     * @api {GET} admin/menus/:id 02获取菜单详情
     * @apiVersion 1.0.0
     * @apiName read
     * @apiGroup Menu
     *
     * @apiSampleRequest admin/menus/
     * 
     * @apiParam {Int} id 菜单ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 56,
                "pid": 53,
                "title": "      ├ 权限规则",
                "url": "\/home\/rule\/list",
                "icon": "",
                "menu_type": 1,
                "sort": 0,
                "status": 1,
                "rule_id": 13,
                "module": "Administrative",
                "menu": "rule",
                "p_title": "系统配置",
                "else": "权限规则",
                "level": 3
            }],
            "error": ""
        }
     *
     * @apiUse menuResponse
     * @apiUse commError
     */
    public function read()
    {   
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {POST} admin/menus 03新增菜单详情
     * @apiVersion 1.0.0
     * @apiName save
     * @apiGroup Menu
     *
     * @apiUse menuParam
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "添加成功",
                "error": ""
            }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function save()
    {
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    /**
     * @api {PUT} admin/menus/:id 04编辑菜单
     * @apiVersion 1.0.0
     * @apiName update
     * @apiGroup Menu
     *
     * @apiSampleRequest admin/menus
     * 
     * @apiParam {Int} id 菜单ID(GET参数)
     * @apiUse menuParam
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "编辑成功",
                "error": ""
            }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function update()
    {
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    /**
     * @api {DELETE} admin/menus/:id 05删除菜单
     * @apiVersion 1.0.0
     * @apiName delete
     * @apiGroup Menu
     *
     * @apiSampleRequest admin/menus
     * 
     * @apiParam {Int} id 菜单ID(GET参数)
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "删除成功",
                "error": ""
            }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function delete()
    {
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->delDataById($param['id'], true);       
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    /**
     * @api {POST} admin/menus/deletes 06批量删除菜单
     * @apiVersion 1.0.0
     * @apiName deletes
     * @apiGroup Menu
     * 
     * @apiParam {Int[]} ids 需要删除的ID
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "删除成功",
                "error": ""
            }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function deletes()
    {
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->delDatas($param['ids'], true);  
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    /**
     * @api {POST} admin/menus/enables 07批量启用、禁用
     * @apiVersion 1.0.0
     * @apiName enables
     * @apiGroup Menu
     * 
     * @apiParam {Int[]} ids 需要操作的ID
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
            {
                "code": 200,
                "data": "操作成功",
                "error": ""
            }

     * @apiUse menuResponse
     * @apiUse commError
     */
    public function enables()
    {
        $menuModel = model('Menu');
        $param = $this->param;
        $data = $menuModel->enableDatas($param['ids'], $param['status'], true);  
        if (!$data) {
            return resultArray(['error' => $menuModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
}
 