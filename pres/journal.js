let entries = [
  {
    title: 'Fun in the Sun!',
    date: new Date('2019-3-25').toLocaleDateString('en-US'),
    content: 'Today was so much fun. We got to go swimming and eat ice cream!'
  },
  {
    title: 'MET Presentation',
    date: new Date('2019-10-15').toLocaleDateString('en-US'),
    content: 'Today I presented at MET. It was fun.'
  }
];

$('#postButton').click(() => {
  addEntry({
    title: $('#title').val(),
    date: new Date().toLocaleDateString('en-US'),
    content: $('#content').val()
  });
});

drawEntries();

function addEntry(entry) {
  entries.push(entry);
  drawEntries();
  $('#title').val('');
  $('#content').val('');
}

function drawEntries() {
  $('#entries').empty();
  entries.forEach(entry => {
    $('#entries').prepend(
      `
      <div class="panel panel-default">
            <div class="panel-heading">
              <h3>${entry.title}</h3>
              <h5>${entry.date}</h5>
            </div>
            <div class="panel-body">
              ${entry.content}
            </div>
      </div>
      `
    );
  });
}