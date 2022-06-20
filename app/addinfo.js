//alert('アラートのテストです。');
//console.log('アラートのテストです。');
var isOnce = true;
$(function () {
    /*    
        //$('li').filter('.sc-jWBwVP').each(function(i,v){
        $('a').filter('.sc-kafWEX').each(function(i,v){
            //$(this).text("test"+v.innerText+i);
            //$(this).text("test"+v.innerText+i);
            //scode = $(this).find('p').text();
            //$(this).append("<li>"+"test"+scode+"</li>");
            addhtml = "<img src='https://hikousen-rs.com/scode/16266-1.jpg' width=50>"
            $(this).prepend(addhtml);
            //$(this).parent().prepend(addhtml);
            //console.log(i)
        });
    */
    addbutton = '<button id="cusBtnList" type="button" class="sc-VigVT zMuoF">詳細表示</button>'
    $('.sc-kGXeez').eq(2).append(addbutton);

    $('#cusBtnList').click(function () {

        var data_l = [];

        $('ul').filter('.sc-cJSrbW').each(async function (i, el_ul) {
            //$(el_ul).children('li').each(function(j,el_li){
            //    console.log(j,$(el_li).text());
            //});
            lis = $(el_ul).find('li');
            var scode_0 = $(lis).eq(1).find('.sc-iELTvK').text();
            var scode = scode_0.replace('管理番号', '').trim();
            //console.log(scode_0);
            console.log(scode);
            if (i == 0) {
                addImage = "<li></li>";
                //addAnl = "<li></li>";
                addWatch = "ウォッチ"
            }
            else {
                addImage = "<li><img src='https://hikousen-rs.com/scode/" + scode + ".jpg' width=130>"
                //    +"<br/><a href='https://hikousen-rs.com/scode/anl_" + scode + ".png' width=150>アクセス詳細</a></li>";
                addWatch = "<br/>(A:700)<br/>(W:20)<br/>(Z:200)"
            }
            //$(lis).eq(1).find('a').append(addhtml);
            //$(lis).eq(7).empty();
            //$(lis).eq(7).html(addImage);
            //if($(lis).eq(7)){
            //    $(lis).eq(7).html(addImage);
            //}else{
            //    $(el_ul).append(addImage);
            //}
            $(lis).eq(7).remove();
            $(el_ul).append(addImage);
            //$(lis).eq(3).find('div').html(addWatch);
            //csvUrl = "https://hikousen-rs.com/scodeinf.php?scode=" + scode ;
            if (i != 0){
                /*
                fetch('https://hikousen-rs.com/scodeinf.php?scode='+scode)
                //await fetch(csvUrl)
                .then(function (res) {
                    return res.json(); 
                })
                .then(function (data) {
                    addWatch = `<br/>${data.scode}<br/>(A:${data.lastPv})<br/>(W:${data.watch})<br/>(Z:${data.totalWatch})`;
                    //$(lis).eq(3).find('div').html(addWatch);
                    console.log(addWatch); 
                })
                */
                const response = await fetch('https://hikousen-rs.com/scodeinf.php?scode='+scode);
                const data = await response.json();   
                console.log(data); 
                addWatch = `<br/>${data.scode}<br/>(A:${data.lastPv})<br/>(W:${data.watch})<br/>(Z:${data.totalWatch})`;
                console.log(addWatch); 
                //data_l.push(addWatch);
                //lis = $(el_ul).find('li');
                $(el_ul).find('li').eq(3).find('div').html(addWatch); //読み直さないと値が設定できないみたい。
            }
            
        });

    });




});
