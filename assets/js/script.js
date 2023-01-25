const dayObj = dayjs();

$('.date').text(dayObj.format('MMM D, YYYY'));

const updateTime = () => {
  $('.time').html(dayjs().format('hh:mm:ss a'));
};

const intervalID = setInterval(updateTime, 1000);

$('.submission-form').on('submit', function (e) {
  e.preventDefault();

  let projectDetails = {
    name: $('#project-name').val(),
    type: $('#project-type').val(),
    dueDate: $('#due-date').val(),
  };

  console.log(projectDetails);
});
