//checkbox,radio チェック状態でラベルの色変え by tanaka
(function($) {

  var methods = {
    init : function( options ) {

      //チェック済みの背景色を変える
      $('input[type="checkbox"],input[type="radio"]').each(function(){
        if ($(this).prop('checked')) {
          $(this).parent('label').addClass('colorlabel_active');
        } else {
          $(this).parent('label').removeClass('colorlabel_active');
        }
      });

      //チェックボックスへのイベントバインド
      $('input[type="checkbox"]').bind('click', function(){
        if ($(this).prop('checked')) {
          $(this).parent('label').addClass('colorlabel_active');
        } else {
          $(this).parent('label').removeClass('colorlabel_active');
        }
      });

      //ラジオボタンへのイベントバインド
      $('input[type="radio"]').bind('click', function(){
        var name = $(this).attr('name');
        $('input[name='+name+']').each(function(){
          if ($(this).prop('checked')) {
            $(this).parent('label').addClass('colorlabel_active');
          } else {
            $(this).parent('label').removeClass('colorlabel_active');
          }
        });
      });

      //リセットボタンへのイベントバインド
      $('input[type="reset"]').bind('click', function(){
        $('input[type="checkbox"],input[type="radio"]').each(function(){
          if ($(this).prop('checked')) {
            $(this).parent('label').addClass('colorlabel_active');
          } else {
            $(this).parent('label').removeClass('colorlabel_active');
          }
        });
      });

    }
  };

  $.fn.colorlabel = function( method ) {
    // メソッド呼び出し部分
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.colorlabel' );
    }
  };

  $(window).on('load',function(){
      methods.init.apply();
  });

})(jQuery);
