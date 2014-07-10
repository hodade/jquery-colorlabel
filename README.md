jquery-colorlabel
=================
チェックボックスまたはラジオボタンがチェック状態のときにラベルの色を変えます


組み込み方
----------
HTMLに、jQueryと、このプラグインと、このプラグインのCSSを読み込むコードを書きます。

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="colorlabel.js"></script>
    <link href="colorlabel.css" rel="stylesheet">



HTMLのコードの書き方
-----
inputタグをlabelで囲むように書きます。

    <label><input type="checkbox" name="param" value="1"/></label>


見た目のカスタマイズ
----
colorlabel.cssをいじると、チェック状態のlabelの見た目をカスタマイズできます。

    /* ラベルの外観 */
    label { margin:1px; padding:1px 5px; }
    
    /* チェックが入っているときのラベルの色 */
    .colorlabel_active { background-color:#357ebd; color:white; border-radius:3px; }



再適用方法
-----
遅延ロードなどで、チェックボックスが増えたりした場合は、下記のコードで再適用できます。

    <script>
      $().colorlabel();
    </script>
    
