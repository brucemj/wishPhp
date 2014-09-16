<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
    	$wish = M('meg')->select();
    	$this->assign('wish', $wish)->display();
    }
    
    public function handle(){
    	//echo U('wish');
    	//p(I('post.'));
    	if( ! IS_AJAX ) halt('页面不存在');
    	$data = array(
    			'username' => I('post.username'),
    			'content' => I('post.content'),
    			'time' => time()
    			);
    	if ( $id = M('meg')->data($data)->add() ){
    		$data['time'] = date('y-m-d H:i', $data['time']);
    		$data['id'] = $id;
    		$data['status'] = 1;
    		$this->ajaxReturn($data, 'json');
    	} else{
    		$this->ajaxReturn(array('status' => 0), 'json');
    	}
    }
}