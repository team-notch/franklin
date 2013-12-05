$(function() {

  $('.m-form__field').on('click', function() {
    $(this).children('input').focus();
  });

  $('.m-form__field > input').on('focus', function() {
    $('.m-form__field').addClass('is-focused');
    $('.m-error').addClass('is-hidden');
  });

  $('.m-form__field > input').on('blur', function() {
    $('.m-form__field').removeClass('is-focused');
  });

});
