window.addEventListener('load', function () {
  var playerEl = document.getElementById('player');
  var scriptEl = playerEl.getElementsByTagName('script')[0];

  var getMediaDefinitions = function () {
    var m = scriptEl.innerHTML.match(/var flashvars(_\d+)(.+)/);
    eval('var flashvars' + m[2]);
    return flashvars.mediaDefinitions;
  }

  var createDownloadBlock = function (mediaDefinitions) {
    var downloadBlockEl = document.createElement('div');
    downloadBlockEl.style.padding = '20px 0';
    downloadBlockEl.innerHTML = 'download qualities: ';
    for (var i = 0; i < mediaDefinitions.length; i++) {
      var el = document.createElement('a');
      var mediaDefinition = mediaDefinitions[i];
      el.innerHTML = ' ' + mediaDefinition.quality;
      el.setAttribute('href', mediaDefinition.videoUrl);
      el.setAttribute('target', '_blank');
      downloadBlockEl.appendChild(el);
    }
    playerEl.appendChild(downloadBlockEl);
  }

  createDownloadBlock(getMediaDefinitions());
});
