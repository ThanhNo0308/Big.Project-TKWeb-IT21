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




function loadTab1() {
  fetch("assets/data/tab-pane-1.json").then(res => res.json()).then(data => {
    let g = "";
    for (let h of data)
      g += `
      <div class="content">
        <img class="img" src="assets/img/${h.user}" alt="user1">
        <header class="flex">
          <div class="name">${h.name}</div>
          <div class="fl hidefl">Follow</div>
          <div class="elip"><i class="fa-solid fa-ellipsis"></i></div>
        </header>
        <article>
          <a title="Xem Bài Viết" class="next-page" href="assets/page/${h.page}" target="_parent">
            <img class="img-content" src="assets/img/${h.image}" alt="img1">
          </a>
          <div>${h.content}</div>
          <div>
            <a class="tag" href="#">${h.tag1}</a>
            <a class="tag" href="#">${h.tag2}</a>
            <a class="tag" href="#">${h.tag3}</a>
            <a class="tag" href="#">${h.tag4}</a><br>
            <button>
              <i class="fa-solid fa-fire"></i>
              <div>Blaze</div>                  
            </button>
          </div>
        </article>
        <footer>
          <div><b>${h.like}</b> notes</div>
          <ul class="flex">
            <li><i class="fa-regular fa-share-from-square"></i></li>
            <li><i class="fa-regular fa-comment"></i></li>
            <li><i class="fa-solid fa-repeat"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
          </ul>
        </footer>
      </div>
      `
    let i = document.getElementById("tab-pane-1");
    i.innerHTML = g;
  })
}


function loadTab2() {
  fetch("assets/data/tab-pane-2.json").then(res => res.json()).then(data => {
    let k = "";
    for (let l of data)
      k += `
      <div class="content">
        <img class="img" src="assets/img/${l.user}" alt="user1">
        <header class="flex">
          <div class="name">${l.name}</div>
          <div class="elip"><i class="fa-solid fa-ellipsis"></i></div>
        </header>
        <article>
          <a title="Xem Bài Viết" class="next-page" href="assets/page/${l.page}" target="_parent">
            <img class="img-content" src="assets/img/${l.image}" alt="img1">
          </a>
          <div>${l.content}</div>
          <div>
            <a class="tag" href="#">${l.tag1}</a>
            <a class="tag" href="#">${l.tag2}</a>
            <a class="tag" href="#">${l.tag3}</a>
            <a class="tag" href="#">${l.tag4}</a><br>
            <button>
              <i class="fa-solid fa-fire"></i>
              <div>Blaze</div>                  
            </button>
          </div>
        </article>
        <footer>
          <div><b>${l.like}</b> notes</div>
          <ul class="flex">
            <li><i class="fa-regular fa-share-from-square"></i></li>
            <li><i class="fa-regular fa-comment"></i></li>
            <li><i class="fa-solid fa-repeat"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
          </ul>
        </footer>
      </div>
      `
    let m = document.getElementById("tab-pane-2");
    m.innerHTML = k;
  })
}


function loadTab3() {
  fetch("assets/data/tab-pane-3.json").then(res => res.json()).then(data => {
    let n = "";
    for (let o of data)
      n += `
      <div class="content">
        <img class="img" src="assets/img/${o.user}" alt="user1">
        <header class="flex">
          <div class="name">${o.name}</div>
          <div class="fl hidefl">Follow</div>
          <div class="elip"><i class="fa-solid fa-ellipsis"></i></div>
        </header>
        <article>
          <a title="Xem Bài Viết" class="next-page" href="assets/page/${o.page}" target="_parent">
            <img class="img-content" src="assets/img/${o.image}" alt="img1">
          </a>
          <div>${o.content}</div>
          <div>
            <a class="tag" href="#">${o.tag1}</a>
            <a class="tag" href="#">${o.tag2}</a>
            <a class="tag" href="#">${o.tag3}</a>
            <a class="tag" href="#">${o.tag4}</a><br>
            <button>
              <i class="fa-solid fa-fire"></i>
              <div>Blaze</div>                  
            </button>
          </div>
        </article>
        <footer>
          <div><b>${o.like}</b> notes</div>
          <ul class="flex">
            <li><i class="fa-regular fa-share-from-square"></i></li>
            <li><i class="fa-regular fa-comment"></i></li>
            <li><i class="fa-solid fa-repeat"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
          </ul>
        </footer>
      </div>
      `
    let p = document.getElementById("tab-pane-3");
    p.innerHTML = n;
  })
}


function loadTab4() {
  fetch("assets/data/tab-pane-4.json").then(res => res.json()).then(data => {
    let q = "";
    for (let r of data)
      q += `
      <div class="content">
        <img class="img" src="assets/img/${r.user}" alt="user1">
        <header class="flex">
          <div class="name">${r.name}</div>
          <div class="fl hidefl">Follow</div>
          <div class="elip"><i class="fa-solid fa-ellipsis"></i></div>
        </header>
        <article>
          <a title="Xem Bài Viết" class="next-page" href="assets/page/${r.page}" target="_parent">
            <img class="img-content" src="assets/img/${r.image}" alt="img1">
          </a>
          <div>${r.content}</div>
          <div>
            <a class="tag" href="#">${r.tag1}</a>
            <a class="tag" href="#">${r.tag2}</a>
            <a class="tag" href="#">${r.tag3}</a>
            <a class="tag" href="#">${r.tag4}</a><br>
            <button>
              <i class="fa-solid fa-fire"></i>
              <div>Blaze</div>                  
            </button>
          </div>
        </article>
        <footer>
          <div><b>${r.like}</b> notes</div>
          <ul class="flex">
            <li><i class="fa-regular fa-share-from-square"></i></li>
            <li><i class="fa-regular fa-comment"></i></li>
            <li><i class="fa-solid fa-repeat"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
          </ul>
        </footer>
      </div>
      `
    let s = document.getElementById("tab-pane-4");
    s.innerHTML = q;
  })
}




// $(document).ready(() => {
//   $(".righthd i").click(function() {
//     $(".righthd > a > i").removeClass("active-header");
//     $(this).addClass("active-header");

//     let h = $(this).attr("href");
//     $(".header-content > div").hide();
//     $(h).show();
//   })
// })



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
    loadTab1();
    loadTab2();
    loadTab3();
    loadTab4();
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
    


