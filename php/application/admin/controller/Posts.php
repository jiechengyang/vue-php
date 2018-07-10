<?php
// +----------------------------------------------------------------------
// | Description: 部门控制器
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------

namespace app\admin\controller;

/**
 * @apiDefine postsParam
 * @apiParam {String} name 名称
 * @apiParam {String} remark 备注
*/

/**
 * @apiDefine postsResponse
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
class Posts extends ApiCommon
{

    /**
     * @api {GET} admin/posts 01获取岗位列表
     * @apiVersion 1.0.0
     * @apiName list
     * @apiGroup Posts
     *
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 32,
                "name": "后端研发工程师",
                "remark": "",
                "create_time": 1484706863,
                "status": 1
            }],
            "error": ""
        }

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function index()
    {   
        $postModel = model('Post');
        $param = $this->param;
        $keywords = empty($param['keywords'])? $param['keywords']: '';
        $data = $postModel->getDataList($keywords);
        return resultArray(['data' => $data]);
    }

   /**
     * @api {GET} admin/posts/:id 02获取岗位详情
     * @apiVersion 1.0.0
     * @apiName read
     * @apiGroup Posts
     *
     * @apiSampleRequest admin/posts/
     * 
     * @apiParam {Int} id 岗位ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": [{
                "id": 32,
                "name": "后端研发工程师",
                "remark": "",
                "create_time": 1484706863,
                "status": 1
            }],
            "error": ""
        }

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function read()
    {   
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->getDataById($param['id']);
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => $data]);
    }

    /**
     * @api {POST} admin/posts/ 03添加岗位
     * @apiVersion 1.0.0
     * @apiName save
     * @apiGroup Posts
     * 
     * @apiUse postsParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "添加成功",
            "error": ""
        }

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function save()
    {
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->createData($param);
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => '添加成功']);
    }

    /**
     * @api {PUT} admin/posts/:id 04编辑岗位
     * @apiVersion 1.0.0
     * @apiName update
     * @apiGroup Posts
     * 
     * @apiSampleRequest admin/posts
     * 
     * @apiParam {Int} id 岗位ID(GET参数)
     * @apiUse postsParam
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "编辑成功",
            "error": ""
        }

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function update()
    {
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->updateDataById($param, $param['id']);
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => '编辑成功']);
    }

    /**
     * @api {DELETE} admin/posts/:id 05删除岗位
     * @apiVersion 1.0.0
     * @apiName delete
     * @apiGroup Posts
     * 
     * @apiSampleRequest admin/posts
     * 
     * @apiParam {Int} id 岗位ID(GET参数)
     * 
     * @apiSuccessExample Success-Response:
     *  HTTP/1.1 200 OK
        {
            "code": 200,
            "data": "删除成功",
            "error": ""
        }

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function delete()
    {
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->delDataById($param['id']);       
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']);    
    }

    /**
     * @api {POST} admin/posts/deletes 06批量删除岗位
     * @apiVersion 1.0.0
     * @apiName deletes
     * @apiGroup Posts
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

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function deletes()
    {
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->delDatas($param['ids']);  
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => '删除成功']); 
    }

    /**
     * @api {POST} admin/posts/enables 07批量启用、禁用
     * @apiVersion 1.0.0
     * @apiName enables
     * @apiGroup Posts
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

     * @apiUse postsResponse
     * @apiUse commError
     */
    public function enables()
    {
        $postModel = model('Post');
        $param = $this->param;
        $data = $postModel->enableDatas($param['ids'], $param['status']);  
        if (!$data) {
            return resultArray(['error' => $postModel->getError()]);
        } 
        return resultArray(['data' => '操作成功']);         
    }
    
}
 