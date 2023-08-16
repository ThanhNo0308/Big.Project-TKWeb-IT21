function loadFriends() {
  fetch("assets/data/friends.json").then(res => res.json()).then(data => {
    let d = "";
    for (let e of data)
      d += `
      <div class="friend flex">
            <img class="img-friend" src="assets/img/${e.image}">
            <div class="infor" style="padding-left: 10px;">
                <b>${e.name}</b>
            </div>
          </div>
      `
    let f = document.getElementById("friends");
    f.innerHTML = d;
  })


}

function loadBlogs() {
  fetch("assets/data/blogs.json").then(res => res.json()).then(data => {
    let a = "";
    for (let b of data)
      a += `
          <div class="account flex">
            <img class="img-account" src="assets/img/${b.img}" alt="hieupc">
            <div class="infor">
              <div>
                <b>${b.name}</b>
                <i style="color: #00b8ff;" class="fa-solid fa-circle-check"></i>
              </div>
              <div style="color: #99a3ae;">${b.home}</div>
            </div>
            <div class="acc-fl hidefl hidefl-acc">Follow</div>
            <div class="acc-close"><i class="fa-solid fa-xmark"></i></div>
          </div>
      `
    let c = document.querySelector('.accounts');
    c.innerHTML = a;



              // START CLOSE ẨN ACCOUNT
          var closes = document.getElementsByClassName("acc-close");
          var hideflacc = document.getElementsByClassName("hidefl-acc");

          // Hàm ẩn phần tử khi bấm vào nút "Close"
          function hideAccountOnClick() {
            var account = this.parentNode; // Lấy phần tử cha của nút "Close"
            account.style.display = "none"; // Ẩn phần tử
          }

          function hideflAccOnClick() {
            var acc = this.parentNode; 
            acc.style.display = "none"; 
          }



          // Gán sự kiện cho các nút "Close"
          for (var i = 0; i < closes.length; i++) {
            closes[i].addEventListener("click", hideAccountOnClick);
          }

          for (var i = 0; i < hideflacc.length; i++) {
            hideflacc[i].addEventListener("click", hideflAccOnClick);
          }


                    // START ẨN FOLLOW
          var hidefollows = document.getElementsByClassName("hidefl");

          // Hàm ẩn phần tử khi bấm vào nút "Close"
          function hidefollowOnClick() {
            var account = this; 
            account.style.display = "none"; // Ẩn phần tử
          }

          // Gán sự kiện cho các nút "Close"
          for (var i = 0; i < hidefollows.length; i++) {
            hidefollows[i].addEventListener("click", hidefollowOnClick);
          }

  })
}






function DropdownStore() {
  var dropdownStore = document.querySelector(".dropdown-store-content");
  var store = document.querySelector(".fa-store")

  if (dropdownStore.style.display === "block") {
      dropdownStore.style.display = "none";
      store.style.color = "#a6afb8";
  } else {
      dropdownStore.style.display = "block";
      store.style.color = "white";
  }
}


function DropdownMessage() {
  var dropdownMessage = document.querySelector(".dropdown-message-content");
  var message = document.querySelector(".fa-facebook-messenger")

  if (dropdownMessage.style.display === "block") {
      dropdownMessage.style.display = "none";
      message.style.color = "#a6afb8";

  } else {
      dropdownMessage.style.display = "block";
      message.style.color = "white";

  }
}


function DropdownUser() {
  var dropdownUser = document.querySelector(".dropdown-user-content");
  var user = document.querySelector(".fa-user")

  if (dropdownUser.style.display === "block") {
      dropdownUser.style.display = "none";
      user.style.color = "#a6afb8";
  } else {
      dropdownUser.style.display = "block";
      user.style.color = "white";

  }
}

function DropdownThunder() {
  var dropdownThunder = document.querySelector(".dropdown-thunder-content");
  var thunder = document.querySelector(".fa-bolt")

  if (dropdownThunder.style.display === "block") {
      dropdownThunder.style.display = "none";
      thunder.style.color = "#a6afb8";

  } else {
      dropdownThunder.style.display = "block";
      thunder.style.color = "white";
  }
}



function DropdownElip() {
  var dropdownElip = document.querySelector(".dropdown-elip-content");
  if (dropdownElip.style.display === "block") {
      dropdownElip.style.display = "none";
  } else {
      dropdownElip.style.display = "block";
  }
}



window.onload = function() {
    loadBlogs();
    loadFriends();

    


  
                 // START HIEN THI MODAL-NAV
    const Btns = document.querySelectorAll('.js-show-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')


    // Ham hien thi modal (them class open vao modal)
    function showModals() {
      modal.classList.add('open')
    }

    //Ham an modal (go bo class open cua modal)
    function hideModals() {
      modal.classList.remove('open')
    }

    //Lap qua tung the button va nghe hanh vi click
    for(const Btn of Btns) {
      Btn.addEventListener('click', showModals)
    }

    //Nghe hanh vi click vao button close
    modalClose.addEventListener('click', hideModals)

    modal.addEventListener('click', hideModals)

    modalContainer.addEventListener('click', function(event) {
      event.stopPropagation()
        })


        
        
              // START HIEN THI MODAL-PEN
    const pen = document.querySelector('.js-show-modal-pen')
    const modalpenContainer = document.querySelector('.js-modal-pen-container')
    const modalpen = document.querySelector('.js-modal-pen')
        
    // Hien Modal
    function showModalPens() {
      modalpen.classList.add('open')
    }
        
    // An Modal
    function hideModalPens() {
      modalpen.classList.remove('open')
    }
        
    pen.addEventListener('click', showModalPens)
        
    // Hien Modal-Nav
    modalpenContainer.addEventListener('click', showModals)
        
    modalpen.addEventListener('click', hideModalPens)
        
        
        
        
              // START HIEN THI CONTENT
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const tabs = $$('.tab-item')
    const panes = $$('.tab-pane') 
        
    const tabActive = $('.tab-item.active')
    const line = $('.tabs .line')
        
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
        
        
    tabs.forEach((tab, index) => {
      const pane = panes[index]

      tab.onclick = function() {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
            
            
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
            
            
        this.classList.add('active')
        pane.classList.add('active')
      }
    })

}
    


$(document).ready(() => {
  $(".fa-heart-pulse").click(function() {
    $(this).toggleClass('heart');
  })
})


