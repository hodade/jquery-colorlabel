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
inputタグをlabelで囲むように書きます。ラジオボタンにも対応しています。

    <label><input type="checkbox" name="param" value="1"/></label>


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

