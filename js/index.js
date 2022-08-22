// city & store data
var storesList = {};
var cityOptions = document.querySelector(".js-city");
var storeOptions = document.querySelector(".js-stores");

var getCitiesList = function getCitiesList() {
  var activityId = {
    activityId: 5
  };
  var baseUrl = "https://sandy-esteelauder.dev.coolbe.com.tw/Play/getActivityStore";
  axios.post(baseUrl, activityId).then(function (response) {
    citiesList = response.data.userData.locationOptions;
    citiesRender();
  });
};

var citiesRender = function citiesRender() {
  var option = "";
  citiesList.forEach(function (item) {
    option += "<option value=\"".concat(item.value, "\">").concat(item.label, "</option>");
  });
  cityOptions.innerHTML = "<option selected disabled value=\"\">\u8ACB\u9078\u64C7\u7E23\u5E02</option>".concat(option);
};

var storeRender = function storeRender() {
  var option = "";
  storesList.storeOptions.forEach(function (item) {
    option += "<option value=\"".concat(item.value, "\">").concat(item.label, "</option>");
  });
  storeOptions.innerHTML = "<option selected disabled value=\"\">\u8ACB\u9078\u64C7\u6AC3\u9EDE</option>".concat(option);
};

var getStoresList = function getStoresList() {
  var cityValue = cityOptions.value;
  var target = citiesList.find(function (item) {
    return item.value == cityValue;
  });
  storesList = target;
  storeRender();
}; // scroll-animation


var scrollAnimation = function scrollAnimation() {
  gsap.from(".js-scrollContent", {
    duration: 3,
    ease: "bounce.out",
    height: 0
  }); // typo

  gsap.to(".js-rotate", {
    duration: 3,
    rotation: 360,
    repeat: -1,
    ease: "none"
  });
  gsap.from(".js-opacity", {
    duration: 1,
    opacity: 0,
    delay: 0.5
  });
}; // flower-aniamtion


var flowerAniamtion = function flowerAniamtion(target, position, delay) {
  gsap.set(target, {
    transformOrigin: position
  });
  var tl = gsap.timeline();
  tl.from(target, {
    duration: 2,
    scale: 0,
    delay: delay
  }).from(target, {
    duration: 2,
    rotation: -30
  }, "-=2").to(target, {
    duration: 2,
    rotation: -10,
    yoyo: true,
    repeat: -1
  });
}; // flower-title


var flowerTitleAnimation = function flowerTitleAnimation() {
  var flowerTitle1 = ".js-flowerTitle1";
  gsap.set(flowerTitle1, {
    transformOrigin: "right bottom"
  });
  var flowerTitle1Tl = gsap.timeline();
  flowerTitle1Tl.from(flowerTitle1, {
    duration: 2,
    scale: 0.5,
    delay: 0.3,
    opacity: 0
  }).from(flowerTitle1, {
    duration: 2,
    rotation: -30
  }, "-=2");
  var flowerTitle2 = ".js-flowerTitle2";
  gsap.set(flowerTitle2, {
    transformOrigin: "left bottom"
  });
  var flowerTitle1T2 = gsap.timeline();
  flowerTitle1T2.from(flowerTitle2, {
    duration: 2,
    scale: 0.5,
    delay: 0.5,
    opacity: 0
  }).from(flowerTitle2, {
    duration: 2,
    rotation: 30
  }, "-=2");
}; // flower4 animation


var flower4Animation = function flower4Animation() {
  var flower4 = ".js-flower4";
  gsap.set(flower4, {
    transformOrigin: "left top",
    scaleX: -1
  });
  var tl = gsap.timeline();
  tl.to(flower4, {
    duration: 2,
    rotation: -10,
    yoyo: true,
    repeat: -1
  });
}; // flower5 animation


var flower5Animation = function flower5Animation() {
  var flower5 = ".js-flower5";
  gsap.set(flower5, {
    transformOrigin: "left top",
    rotation: 30
  });
  var tl = gsap.timeline();
  tl.from(flower5, {
    duration: 2,
    scale: 0.5
  }).from(flower5, {
    duration: 2,
    rotation: 0
  }, "-=2").to(flower5, {
    duration: 2,
    rotation: 20,
    yoyo: true,
    repeat: -1
  });
};

$(function () {
  // get city option
  getCitiesList(); // animation

  scrollAnimation();
  flowerAniamtion(".js-flower1", "left top");
  flowerAniamtion(".js-flower2", "right top", 0.2);
  flowerAniamtion(".js-flower3", "right bottom");
  flower4Animation();
  flower5Animation();
  flowerTitleAnimation(); // form validation
  // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll(".needs-validation"); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
      } else {
        event.preventDefault();
        window.location.href = "event.html";
      }
    }, false);
  });
});