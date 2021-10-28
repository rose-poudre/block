// // データ保存
// $('#save').on('click', function () {
//   const title = $('#input').val();
//   const text = $('#text_area').val();
//   const data = {
//     title: title,
//     text: text,
//   };
//   const jsonData = JSON.stringify(data);
//   localStorage.setItem('memo', jsonData);
//   // console.log(jsonData);
// });

// // データ削除
// $('#clear').on('click', function () {
//   localStorage.removeItem('memo');
//   $('#input').val('');
//   $('#text_area').val('');
// });

// // データ読み込み
// if (localStorage.getItem('memo')) {
//   const jsonData = localStorage.getItem('memo');
//   const data = JSON.parse(jsonData);
//   $('#input').val(data.title);
//   $('#text_area').val(data.text);
//   console.log(data);
// }




// 配列を定義
const blocks = [];
const blockTag = [];

// ボタンのクリックでブロック生成
$('#btn').on('click', function () {
  const block = $('#input').val();
  blocks.push(block);
  console.log(blocks);

  // ブロックタグの生成
  // const blockTag = [];
  for (let i = 0; i < blocks.length; i++) {
    blockTag.push('<div class="drag-and-drop" id="' + blocks[i] + '"></div>');
  }
  $('#block').html(blockTag);
});




(function () {

  // let event = '';

  //要素の取得
  let elements = document.getElementsByClassName('drag-and-drop');

  //要素内のクリックされた位置を取得する変数
  let x;
  let y;

  //マウスが要素内で押されたとき、又はタッチされたとき発火
  for (let i = 0; i < elements.length; i++) {
    // elements[i].addEventListener('mousedown', mdown, false);
    // elements[i].addEventListener('touchstart', mdown, false);
    $(document).on('mousedown', '.drag-and-drop', mdown);
    $(document).on('touchstart', '.drag-and-drop', mdown);
  }

  //マウスが押された際の関数
  function mdown(e) {

    //クラス名に .drag を追加
    this.classList.add('drag');

    //タッチデイベントとマウスのイベントの差異を吸収
    if (e.type === 'mousedown') {
      let event = e;
    } else {
      let event = e.changedTouches[0];
    }

    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;

    //ムーブイベントにコールバック
    document.body.addEventListener('mousemove', mmove, false);
    document.body.addEventListener('touchmove', mmove, false);
  }

  //マウスカーソルが動いたときに発火
  function mmove(e) {

    //ドラッグしている要素を取得
    let drag = document.getElementsByClassName('drag')[0];

    //同様にマウスとタッチの差異を吸収
    if (e.type === 'mousemove') {
      let event = e;
    } else {
      let event = e.changedTouches[0];
    }

    //フリックしたときに画面を動かさないようにデフォルト動作を抑制
    e.preventDefault();

    //マウスが動いた場所に要素を動かす
    drag.style.top = event.pageY - y + 'px';
    drag.style.left = event.pageX - x + 'px';

    //マウスボタンが離されたとき、またはカーソルが外れたとき発火
    // drag.addEventListener('mouseup', mup, false);
    $(document).on('mouseup', '.drag', mup);
    document.body.addEventListener('mouseleave', mup, false);
    // drag.addEventListener('touchend', mup, false);
    $(document).on('touchend', '.drag', mup);
    document.body.addEventListener('touchleave', mup, false);

  }

  //マウスボタンが上がったら発火
  function mup(e) {
    let drag = document.getElementsByClassName('drag')[0];


    // //ムーブイベントハンドラの消去
    // document.body.removeEventListener('mousemove', mmove, false);
    // drag.removeEventListener('mouseup', mup, false);
    // document.body.removeEventListener('touchmove', mmove, false);
    // drag.removeEventListener('touchend', mup, false);

    //クラス名 .drag も消す
    drag.classList.remove('drag');
  }
  // let result = element.getBoundingClientRect();
  // console.log(result);

})()





































// $('#save').on('click', function () {
//   const title = $('#input').val();
//   const text = $('#text_area').val();
//   var px = window.pageXOffset + clientRect.left; // ページの左端から、要素の左端までの距離
//   var py = window.pageYOffset + clientRect.top; // ページの上端から、要素の上端までの距離
//   const data = {
//     title: title,
//     text: text,
//     potision_x: px,
//     position_y: py,
//   };
//   const jsonData = JSON.stringify(data);
//   localStorage.setItem('memo', jsonData);
//   // console.log(jsonData);
// });


// // 配列を定義
// const blocks = [];

// // ボタンのクリックでブロック生成
// $('#btn').on('click', function () {
//   const block = $('input').val();
//   blocks.push(block);
//   console.log(blocks);

//   // ブロックタグの生成
//   const blockTag = [];
//   for (let i = 0; i < blocks.length; i++) {
//     blockTag.push('<p>' + blocks[i] + '</p>');
//   }
//   $('#block').html(blockTag);
// });






// // a要素を作成
// var a_element = document.createElement('a');
// a_element.textContent = 'Top page';
// a_element.id = 'link_to_top';
// a_element.href = '/';
// a_element.rel = 'nofollow nooppener';

// // ul要素を作成
// var ul_element = document.createElement('ul');

// for (var i = 1; i <= 5; i++) {
//   var li_element = document.createElement('li');
//   li_element.textContent = 'テキスト' + i;
//   ul_element.appendChild(li_element);
// }

// // 作成したHTML要素をarticle要素に追加する
// var textbox = document.getElementById('textbox');
// textbox.appendChild(ul_element);
// textbox.appendChild(a_element);












// // optionタグの生成
// const start = 1901;
// const end = 2021;

// let option = '';

// // for (let i = start; i <= end; i++) {
// //   option += '<option>' + i + '</option>';
// // }


// for (let i = start; i <= end; i++) {
//   option.push('<option>' + i + '</option>')
// }



// // console.log(option);

// $('select').html(option);

// // 配列の中身表示
// const list01 = ['月', '火', '水', '木', '金', '土', '日'];

// const array = [];

// for (let i = 0; i < list01.length; i++) {
//   array.push('<p>' + list01[i] + '</p>')
// }

// // console.log(array);

// $('#echo').html(array);

