<?php
// +----------------------------------------------------------------------
// | Description: 图片上传
// +----------------------------------------------------------------------
// | Author: linchuangbin <linchuangbin@honraytech.com>
// +----------------------------------------------------------------------
namespace app\admin\controller;

use think\Request;
use think\Controller;

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
class Upload extends Controller
{   

    /**
     * @api {POST} admin/upload 01文件上传
     * @apiVersion 1.0.0
     * @apiName upload
     * @apiGroup Upload
     *
     * @apiSuccess {Number} code 返回码 200正确400错误
     * @apiSuccess {String} data 返回数据
     * @apiSuccess {String} error 错误信息
     *
     * @apiUse commError
     */
    public function index()
    {	

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        $file = request()->file('file');
        if (!$file) {
        	return resultArray(['error' => '请上传文件']);
        }
        
        $info = $file->validate(['ext'=>'jpg,png,gif'])->move(ROOT_PATH . DS . 'uploads');
        if ($info) {
            return resultArray(['data' =>  'uploads'. DS .$info->getSaveName()]);
        }
        
        return resultArray(['error' =>  $file->getError()]);
    }
}
 