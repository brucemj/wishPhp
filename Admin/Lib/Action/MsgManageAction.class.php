<?php
	Class MsgManageAction extends CommonAction {
		//帖子查看
		public function index(){
			$count = M('msg')->count();
			 
			import('ORG/Util/Page');
			$page = new Page($count ,10);
			
			$limit = $page->firstRow . ',' . $page->listRows ;
			
			$this->page = $page->show();			
			$this->wish = M('msg')->limit($limit)->select();
			$this->display();
		}
		
		//帖子删除
		public function delete() {
			if (M(msg)->delete(I('get.id')) ){
				$this->success('删除成功', U('Admin/MsgManage/index','',''));
			} else{
				$this->error('删除失败');
			}
		}
	}
?>
