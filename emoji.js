// Create the panel before opening the dialog for quick opening
// Though lazy creation also works and is blazing fast! (3ms)
new EmojiPanel(document.getElementById('example-3'));

// Toggle dialog
document.getElementById('example-3-btn').addEventListener('click', () => {
  document.getElementById('example-3-container').classList.toggle('open');
});
    