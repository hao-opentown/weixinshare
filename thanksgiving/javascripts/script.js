  $(function() {
      // Prevent form submission
      $(".thanksgiving").submit(function(event) {
          // console.log(event);
          event.preventDefault();
          mockAction();
      });
      $('.share-bar .fa').on('click',function() {
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
  });
