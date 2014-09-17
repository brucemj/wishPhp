<?php
class LoginAction extends Action {
	public function index(){
		$this->display();
	}
	
	public function login(){
	if (! IS_POST ) $this->error('页面 不能直接访问 ，请先登录 ');
 
    	if( I('session.verify') != I('post.code','','md5') ){
    		$this->error('验证码错误，请重新输入 ');
    	}
    	
    	if ( $user = M('user')->where(array('username' => I('post.username')))->find() ){
    		if ( !$user['lock'] && $user['password'] == I('post.password', '', 'md5') ){
    			$user['logintime'] = time();
    			$user['loginip'] = get_client_ip();
    			M('user')->save($user);
    			
    			session('uid', $user['id']);
    			session('username', $user['username']);
    			session('logintime', date('Y-m-d H:i:s', $user['logintime']));
    			session('loginip', $user['loginip']);
    			
    			$this-> redirect('Admin/Index/index');

    		}else{
    			if( $user['lock']) $this->error( '用户被锁定，请联系管理员' );
    			$this->error( '用户名或密码不正确' );
    		}
    	}else{
    		$this->error( '用户名不存在' );
    	}
	}
	
	public function verify(){
		import('ORG/Util/Image');
		Image::buildImageVerify(1,1,'png');
	}
}
?>