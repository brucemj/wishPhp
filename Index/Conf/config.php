<?php
return array(
	//'配置项'=>'配置值'
		'__TMPL__'      =>  APP_TMPL_PATH,  // 项目模板目录
		'__ROOT__'      =>  __ROOT__,       // 当前网站地址
		'__APP__'       =>  __APP__,        // 当前项目地址
		'__GROUP__'     =>  defined('GROUP_NAME')?__GROUP__:__APP__,
		'__ACTION__'    =>  __ACTION__,     // 当前操作地址
		'__SELF__'      =>  __SELF__,       // 当前页面地址
		'__URL__'       =>  __URL__,
		'../Public'     =>  APP_TMPL_PATH.'Public',// 项目公共模板目录
		'__PUBLIC__'    =>  __ROOT__.'/Public',// 站点公共目录
		'TMPL_TEMPLATE_SUFFIX' => '.html',
		'URL_HTML_SUFFIX' => 'html',
		
		//数据库配置
		'DB_TYPE' => 'mysql',
		'DB_HOST' => '172.21.12.58',
		'DB_NAME' => 'wish',
		'DB_USER' => 'root',
		'DB_PWD' => 'root',
		'DB_PREFIX' => '',
		'DB_PORT' => 3306
);
?>