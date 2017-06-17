/**
 * Created by ��ͥ on 2017/5/12.
 */
$(function(){
    /*��ʼ��������ʾ*/
    $('[data-toggle="tooltip"]').tooltip();

    /*��ȡ��ǰ����item*/
    var items=$(".carousel-inner .item");
    /*������Ļ�Ĵ�С�ı�*/
    $(window).on("resize",function(){
        /*1.��ȡ��ǰ��Ļ�Ŀ��*/
        var width=$(window).width();
        /*2.�ж���Ļ�Ŀ��*/
        if(width>=768){/*˵�����ƶ���*/
            /*Ϊÿһ��item�����Ԫ��--����*/
            $(items).each(function(index,value){
                var item=$(this);
                /*��ǰ�Զ��������� �洢��ͼƬ·��*/
                var imgSrc=item.data("largeImage");
                console.log(imgSrc);
                /*��ӷ��ƶ��˵���Ԫ��*/
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }
        else{
            $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            });
        }
    }).trigger("resize");

    /*����ƶ��˵Ļ�������*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*��ȡ��ǰ�ֲ�ͼ*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*��һ��*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*��һ��*/
            carousel.carousel('next');
        }
    });


    /*�����Ʒ�鵼�����ԭʼ���*/
    var ul=$(".wjs_product .nav-tabs");
    var lis=ul.find("li");
    var totalWidth=0;//�ܿ��
    lis.each(function(index,value){
        totalWidth=totalWidth+$(value).innerWidth();

    });
    ul.width(totalWidth);
    /*ʹ�ò��ʵ�ֵ������Ļ�������*/
    var myScroll = new IScroll('.tabs_parent',{
        /*����ˮƽ������������ֱ����*/
        scrollX: true, scrollY: false
    });
});
