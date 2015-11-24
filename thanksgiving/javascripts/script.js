  $(function() {
      // Prevent form submission
      $(".thanksgiving").submit(function(event) {
          // console.log(event);
          event.preventDefault();
          mockAction();
      });
      $('.share-bar .fa').on('click', function() {
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              function() {
                  $(this).removeClass('animated pulse');
              });
          $(this).addClass('animated pulse');
      })

      function mockAction() {

          var sender = $('.thanksgiving #who').val(),
              code = $('.thanksgiving #message').val(),
              source = '原创',
              link = 'http://120.25.248.65:8921/print?' +
              'sender=' + encodeURIComponent(sender) + '&' +
              'code=' + encodeURIComponent(code) + '&' +
              'highlight=' + encodeURIComponent(code) + '&' +
              'source=' + encodeURIComponent(source);

          $(".page_8 .card").load(function() {
              $('#loader-wrapper').addClass('hidden');
              $(".container").addClass("hidden");
              $(".page_8").removeClass("hidden");
          });

          $('#loader-wrapper').removeClass('hidden');
          $(".page_8 .card").attr("src", link);

      }

      wechatInit();

      function wechatInit() {


          // wechat sdk 签名
          var wxReq = $.ajax({
              url: 'http://opentown.cn/wechat/rsx/0',
              type: 'post',
              dataType: 'json',
              data: {
                  url: location.href.split('#')[0]
              }
          }).done(function(resp) {
              var r = resp;
              wx.config({
                  appId: r.appid,
                  debug: true,
                  timestamp: r.timestamp,
                  nonceStr: r.nonceStr,
                  signature: r.signature,
                  jsApiList: [
                      'checkJsApi',
                      'onMenuShareTimeline',
                      'onMenuShareAppMessage',
                      'onMenuShareQQ',
                      'onMenuShareWeibo',
                      'chooseImage'
                  ]
              });
              // 调用微信API
              wx.ready(function() {
                  var txt = "hi";
                  var sdata = {
                      title: txt,
                      desc: txt,
                      link: location.href.split('#')[0],
                      imgUrl: 'http://game.4gshu.com/xuangedan/other-project/2015-01-06/img/share-wx-logo.jpg',
                  };
                  // wx.onMenuShareTimeline(sdata);
                  wx.onMenuShareAppMessage(sdata);
              });
          });

      }

  });
