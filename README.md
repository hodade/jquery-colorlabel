jquery-colorlabel
=================
チェックボックスまたはラジオボタンがチェック状態のときにラベルの色を変えます。
チェックを外すと色は消えます。


組み込み方
----------
jQueryと、このプラグインのjsと、このプラグインのCSSを読み込むコードを書きます。

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="jquery-colorlabel/colorlabel.js"></script>
    <link href="jquery-colorlabel/colorlabel.css" rel="stylesheet">



HTMLのコードの書き方
-----
inputタグをlabelで囲むように書きます。チェックがついた項目は色が変わります。

    <label><input type="checkbox" name="seasoning" value="1"/>しお</label>
    <label><input type="checkbox" name="seasoning" value="2"/>しょうゆ</label>

ラジオボタンにも対応しています。同じnameの中では1つのみ色が変わります。

    <label><input type="radio" name="bivalve" value="1"/>ほたて</label>
    <label><input type="radio" name="bivalve" value="2"/>しじみ</label>


見た目のカスタマイズ
----
colorlabel.cssをいじると、チェック状態のlabelの見た目をカスタマイズできます。

    /* チェックが入っているときのラベルの色 */
    .colorlabel_active { background-color:#357ebd; color:white; border-radius:3px; }



再適用方法
-----
遅延ロードなどで、チェックボックスが増えた場合は、下記のコードを実行してください。

    <script>
      $().colorlabel();
    </script>
    

サンプル
----
http://hodade.adam.ne.jp/jquery-colorlabel/sample/sample.html


ライセンス
----
MIT
ゆるいライセンスです。

