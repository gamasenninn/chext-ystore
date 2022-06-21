$(function () {
    addbutton = '<button id="cusBtnList" type="button" class="sc-VigVT zMuoF">詳細表示</button>'
    $('.sc-kGXeez').eq(2).append(addbutton);

    $('#cusBtnList').click(function () {

        var data_l = [];

        $('ul').filter('.sc-cJSrbW').each(async function (i, elUl) {
            let scode = $(elUl).find('li').eq(1).find('.sc-iELTvK').text().replace('管理番号', '').trim();
            $(elUl).find('li').eq(1).find('.sc-iELTvK').html(`ポータルリンク-> <a href="https://hikousen-rs.com/close?scode=${scode}" target="_blank">管理番号 ${scode}</a>`);
            //$(elUl).find('li').eq(1).find('.sc-iELTvK').html(`ポータルリンク-> <button onclick=window.open("https://hikousen-rs.com/close?scode=${scode}")>${scode}</button>`);
            let aucId = $(elUl).find('li').eq(1).find('.sc-feJyhm').text().replace('オークションID', '').trim();
            //const response = await fetch(`https://page.auctions.yahoo.co.jp/jp/auction/${aucId}`);
            //const html = await response.text();   
            //console.log(scode);
            $(elUl).find('li').eq(7).remove();
            if (i != 0){
                $(elUl).append("<li><img src='https://hikousen-rs.com/scode/" + scode + ".jpg' width=130></li>");
                const response = await fetch('https://hikousen-rs.com/scodeinf.php?scode='+scode);
                const data = await response.json();   
                //console.log(data,addWatch,addPv); 
                $(elUl).find('li').eq(3).find('div').html(`${data.watch}`); //読み直さないと値が設定できないみたい。
                $(elUl).find('li').eq(4).find('div').html(`${data.lastPv}<br/>(T:${data.totalPv})`); 
            }else{
                $(elUl).append("<li></li>");
                $(elUl).find('li').eq(3).find('div').text("ウォッチ"); 
            }         
        });
    });

});
