<?php
return array(
	//'配置项'=>'配置值'
	'TMPL_PARSE_STRING' => array(
		'__PUBLIC__'    =>  __ROOT__ . '/' . APP_NAME . '/Tpl/Public'
			),
		
		//数据库配置
		'DB_TYPE' => 'mysql',
		'DB_HOST' => '172.21.12.58',
		'DB_NAME' => 'wish',
		'DB_USER' => 'root',
		'DB_PWD' => 'root',
		'DB_PREFIX' => '',
		'DB_PORT' => 3306,
		
		'TMPL_EXCEPTION_FILE' => __ROOT__ . '/' . APP_NAME . '/Tpl/error.html',
		'ERROR_PAGE' =>  __ROOT__ . '/' . APP_NAME . '/Tpl/error.html'
		
);
?>