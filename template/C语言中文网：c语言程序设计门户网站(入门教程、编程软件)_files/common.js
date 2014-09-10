$(document).ready(function(){

	var activeNode = null;

	// ajax��̬����Ŀ¼����Ϊ��ǰ�½���ɫ
	(function(){
		var contents = $("#course-contents"),
			thistypeid = contents.attr("thistypeid"),
			thisDdTem = contents.children("dd[typeid='" + thistypeid + "']"),
			thisDd = thisDdTem && thisDdTem.length && thisDdTem.first();
		if(thisDd){
			var channelnum = thisDd.attr("channelnum"),
				dds = '';
			$.ajax({
				method: 'get',
				url: "/cpp/ajaxapi/getArtList.php?v=" + window.cmsTempletsVer + "&typeid=" + thistypeid,
				dataType: 'text',
				
				success: function(retData){
					retData = $.parseJSON( decodeURIComponent(retData) );
					if(!retData || !retData.success){
						thisDd.after('<div class="errorMsg">�����½��б�ʧ�ܣ�</div>');
						return;
					}
					// ���û�����ݣ���Ѹ��±�����Ϊactive
					if( !retData.data || !retData.data.length ){
						return;
					}

					$.each( retData.data, function( i, record ){
						dds += '<dd>' + channelnum + '.' + (++i) + ' ' + record + '</dd>';
					});
					thisDd.after( '<dl class="dl-sub">' + dds + '</dl>' );

					if(window.thisArtId){ // ����ҳ
						var aActiveTem = $("#course-contents a[artid='" + thisArtId + "']"),
							aActive = aActiveTem && aActiveTem.first();
						aActive && aActive.parent().addClass("active");
						activeNode = aActive.parent();
					}else{  // �����б�ҳ
						thisDd && thisDd.addClass("active");
						activeNode = thisDd;
					}
				},
				error: function(jqXHR, textStatus, errorThrown){
					thisDd.after('<div class="errorMsg">�����½��б�ʧ�ܣ�</div>');
				}
			});
		}
	})();

	// ���ر��������
	$("#id-beifeng-pic").html('' +
		'<a href="/cpp/redirect.html?type=cyuyan_728_80" target="_blank">' +
			'<img src="' + cmsPath + '/uploads/ads/beifeng_728_80.jpg?v={dede:global.cfg_tempversion/}" alt="������">' +
		'</a>');

	$("#ad-beifeng-text").html('����ѧϰ��̿��������������ͨ�̳���������<a href="/cpp/redirect.html?type=cyuyan_text" target="_blank">������</a>');

	//�������л�ɫ
	(function(){
		$(".bg_change").each(function(){
			var nodes = $(this).children("li:even");
			if(nodes && nodes.length){
				nodes.addClass('bg-f7f7f7');
			}else{
				$(this).children("dd:even").addClass('bg-f7f7f7');
			}
		});
	})();

	// ���ش���������
    (function(){
        var pres = document.getElementsByTagName("pre");
        if(!pres || !pres.length)
        	return;

        $.getScript(window.cmsTemplets+"/js/jquery.snippet.js",function(){
            $(pres).each(function(){
                var thisClass = $(this).attr("class");
                thisClass = thisClass && thisClass.replace( /^shell$/, "sh" );  // Shell

                thisClass && !/info-box/.test(thisClass) && $(this).snippet(thisClass,{
                    style:"bright",
                    clipboard:window.cmsTemplets+"/js/ZeroClipboard.swf"
                });
            });
        });
    })();

    // �����˵�
    (function(){
    	$(".share,.sub-menu").mouseover(function(){
        	$(this).children('ul').css({
        		'display': 'block'
        	});
        }).mouseout(function(){
        	$(this).children('ul').css({
        		'display': 'none'
        	});
        });
    })();

    // ����ť
    (function(){
    	var shareWrap = $(".share");

    	// �ٶȿ��յ������������ַ�������֣���Ϊ��̬����
    	shareWrap.append('' + 
    		'<dt>������</dt>' +
			'<dd class="qzone">QQ�ռ�</dd>' +
			'<dd class="weibo">����΢��</dd>' +
			'<dd class="tweibo">��Ѷ΢��</dd>' +
			'<dd class="douban">����</dd>' +
			'<dd class="renren">������</dd>');

        // QQ�ռ�
        shareWrap.delegate('.qzone', 'click', function(){
        	window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+
        		'title=' + encodeURIComponent(shareParam.title) + '&'+
        		'desc=' + encodeURIComponent(shareParam.desc) + '&'+
        		'summary=' + encodeURIComponent(shareParam.summary_qzone) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pics=' + encodeURIComponent(shareParam.pic_qzone), '_blank');
			return false;
        });

        // ����΢��
        shareWrap.delegate('.weibo', 'click', function(){
        	window.open('http://v.t.sina.com.cn/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // ��Ѷ΢��
        shareWrap.delegate('.tweibo', 'click', function(){
        	window.open('http://v.t.qq.com/share/share.php?'+
        		'title=' + encodeURIComponent(shareParam.desc) + '&'+
        		'url=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_tweibo, '_blank');
			return false;
        });

        // ����
        shareWrap.delegate('.douban', 'click', function(){
        	window.open('http://www.douban.com/share/service?'+
        		'name=' + encodeURIComponent(shareParam.title) + '&'+
        		'text=' + encodeURIComponent(shareParam.summary_douban) + '&'+
        		'sel=' + encodeURIComponent(shareParam.desc) + '&'+
        		'href=' + shareParam.url + '&'+
        		'image=' + shareParam.pic_douban, '_blank');
			return false;
        });

        // ����
        shareWrap.delegate('.renren', 'click', function(){
        	window.open('http://widget.renren.com/dialog/share?'+
        		'title=' + encodeURIComponent(shareParam.title) + '&'+
        		'description=' + encodeURIComponent(shareParam.summary_douban) + '&'+
        		'resourceUrl=' + shareParam.url + '&'+
        		'pic=' + shareParam.pic_douban + '&' +
        		'charset=utf-8', '_blank');
			return false;
        });

    })();

    // ��̬Ŀ¼����Ϊ��ǰ�½���ɫ
	(function(){
		var contents = $("#course-contents"),
			loadMode = contents.attr('loadmode');
		if(loadMode === 'static'){
			var url = document.location.pathname,
				as = contents.find('a');
			as.each(function(){
				if($(this).attr('href') === url){
					activeNode = $(this).parent();
					activeNode.addClass('active');
					return false;
				}
			});
		}
	})();

	// ��һ�ڡ���һ�ڰ�ť
	(function(){
		$(".paging-btn").click(function(){
			var isPreBtn = /paging-pre/.test( $(this).attr("class") );
			if(isPreBtn){
				var preNextNode = $(activeNode).prevAll("dd").first();
				preNextNode = preNextNode.length ? preNextNode : $(activeNode).parent().prev("dd");
			}else{
				var preNextNode = $(activeNode).nextAll("dd").first();
				preNextNode = preNextNode.length ? preNextNode : $(activeNode).next("dl").children("dd").first();
				if(!preNextNode.length){
					var preNextNode = $(activeNode).parent().next("dd");
				}
			}
			var preNextLink = (preNextNode && preNextNode.length) ? preNextNode.children("a").attr("href") : location.href;
			location.href = preNextLink;
		});
	})();

	// Ϊ�����ڵ�ͼƬ�������
	$("#art-body img").click(function(){
		window.open($(this).attr("src"));
	});

    // ���ض�˵���
    (function(){
    	if(!window.duoshuoQuery)
    		return;

		var ds = document.createElement('script');
		ds.type = 'text/javascript';
		ds.async = true;
		ds.src = 'http://static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
});