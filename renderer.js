function render(threshold1= 50, threshold2=100, apertureSize=3, L2gradient = false){
    srcImgEl = document.getElementById('src-image')
    var src = cv.imread(srcImgEl); // load the image from <img>
    var dst = new cv.Mat();

    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
  
    cv.Canny(src, dst, threshold1, threshold2, apertureSize, L2gradient); // You can try more different parameters
    cv.imshow('the-canvas', dst); // display the output to canvas

    src.delete(); // remember to free the memory
    dst.delete();
}
(function() {
    var fileUploadEl = document.getElementById('file-upload'),
      srcImgEl = document.getElementById('src-image')
  
    fileUploadEl.addEventListener("change", function (e) {
      srcImgEl.src = URL.createObjectURL(e.target.files[0]);
    }, false);
  
    srcImgEl.onload = function () {
        render()
    }
  
    // opencv loaded?
    window.onOpenCvReady = function () {
      document.getElementById('loading-opencv-msg').remove();
      const imgPath = path.resolve(__dirname,"./test.jpeg")
      const imgData = base64Img.base64Sync(imgPath);
      
    }
  
  })()