function loadFriends() {
  fetch("assets/data/friends.json").then(res => res.json()).then(data => {
    let d = "";
    for (let e of data)
      d += `
      <div class="friend flex" data-chat="${e.id}">
        <img class="img-friend" src="assets/img/${e.image}">
        <div class="infor" style="padding-left: 10px;"><b>${e.name}</b></div>
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

              // ẨN ACCOUNT
              $(".acc-close, .hidefl-acc").click(function() {
                var $account = $(this).closest(".account");
            
                $account.fadeOut(800);
              });
  })
}


function loadChats() {
  fetch("assets/data/chats.json").then(res => res.json()).then(data => {
    let g = "";
    for (let h of data)
      g += `
      <div class="chat" id="${h.id}">
        <header class="header-chat">
          <div class="flex">
            <img src="assets/img/${h.image}">
            <i class="fa-solid fa-circle"></i>
            <div>
              <b>${h.name}</b>
              <div style="font-size: 14px;">Đang hoạt động</div>
            </div>
          </div>
          <div class="right-chat">
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-xmark close-chat"></i>
          </div>
        </header>
        <article class="body-chat">
          <img src="assets/img/${h.image}">
          <div style="margin-bottom: 5px;"><b>${h.name}</b></div>
          <div>
            <div class="content-chat flex">
              <img src="assets/img/${h.image}">
              <div>${h.chat1}</div>
            </div>
            <div class="content-chat flex" style="justify-content: flex-end;">
              <div style="background: #001935; color: white;">${h.chat2}</div>
            </div>
            <div class="content-chat flex">
              <img src="assets/img/${h.image}">
              <div>${h.chat3}</div>
            </div>
            <div class="content-chat flex" style="justify-content: flex-end;">
              <div style="background: #001935; color: white;">${h.chat4}</div>
            </div>
          </div>
        </article>
        <footer class="footer-chat">
          <div class="chat-write flex">
            <img src="assets/img/user.png">
            <input type="text" placeholder="Nhập nội dung tin nhắn">
          </div>
          <div class="chat-footer-icon">
            <div>
              <i class="fa-solid fa-circle-plus"></i>
              <i class="fa-regular fa-image"></i>
              <i class="fa-regular fa-folder-open"></i>
              <i class="fa-solid fa-gear"></i>
            </div>
            <div><i class="fa-regular fa-paper-plane"></i></div>
          </div>
        </footer>
      </div>
      `
    let i = document.querySelector(".chats");
    i.innerHTML = g;


        $(document).ready(() => {
            // Bật và Tắt đoạn chat
            $('.friend').click(function() {
              var chatId = $(this).data('chat');
              $('.chat').hide();
              $('#' + chatId).show();
            });
          
            $('.close-chat').click(function() {
              $(this).parent().parent().parent().hide();
            })
          })
  })
}



window.onload = function() {
    loadBlogs();
    loadFriends();
    loadChats();

  
                 // START HIEN THI MODAL-NAV
    const Btns = document.querySelectorAll('.js-show-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')


    function showModals() {
      modal.classList.add('open')
    }

    function hideModals() {
      modal.classList.remove('open')
    }

    for(const Btn of Btns) {
      Btn.addEventListener('click', showModals)
    }

    modalClose.addEventListener('click', hideModals)

    modal.addEventListener('click', hideModals)

    modalContainer.addEventListener('click', function(event) {
      event.stopPropagation()
        })


        
        
              // START HIEN THI MODAL-PEN
    const pen = document.querySelector('.js-show-modal-pen')
    const modalpenContainer = document.querySelector('.js-modal-pen-container')
    const modalpen = document.querySelector('.js-modal-pen')
        
    function showModalPens() {
      modalpen.classList.add('open')
    }
        
    function hideModalPens() {
      modalpen.classList.remove('open')
    }
        
    pen.addEventListener('click', showModalPens)
        
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
                // Ẩn và hiển thị Dropdown-Header
    $('.fa-store').click(function() {
      toggleDropdown('.dropdown-store-content', '.fa-store');
    });
  
    $('.fa-facebook-messenger').click(function() {
      toggleDropdown('.dropdown-message-content', '.fa-facebook-messenger');
    });
  
    $('.fa-user').click(function() {
      toggleDropdown('.dropdown-user-content', '.fa-user');
    });
  
    $('.fa-bolt').click(function() {
      toggleDropdown('.dropdown-thunder-content', '.fa-bolt');
    });

    $('.fa-pencil').click(function() {
      toggleDropdown('.modal-pen-container', '.fa-pencil');
    });
  

    // Chọn phần tử dropdown và biểu tượng tương ứng dựa trên các selector được truyền vào khi gọi hàm
    function toggleDropdown(dropdownSelector, iconSelector) {
      var dropdown = $(dropdownSelector);
      var icon = $(iconSelector);
      
      //Kiểm tra trạng thái hiện tại của dropdown
      if (dropdown.is(':visible')) {
        dropdown.hide();
        icon.css('color', '#a6afb8');
      } else {
        hideAllDropdowns();
        dropdown.show();
        icon.css('color', 'white');
      }
    }
  
    function hideAllDropdowns() {
      $('.dropdown-store-content').hide();
      $('.dropdown-message-content').hide();
      $('.dropdown-user-content').hide();
      $('.dropdown-thunder-content').hide();
      $('.modal-pen-container').hide();

  
      $('.fa-store').css('color', '#a6afb8');
      $('.fa-facebook-messenger').css('color', '#a6afb8');
      $('.fa-user').css('color', '#a6afb8');
      $('.fa-bolt').css('color', '#a6afb8');
      $('.fa-pencil').css('color', '#001935');
    }

                   // Ẩn follow
    $(".fl").click(function() {
      $(this).hide();
    })

                   // Thả tim
    $(".fa-heart-pulse").click(function() {
      $(this).toggleClass('heart');
    })


                  // Ẩn và hiện elip
    $(".elip").click(function() {
      var $elip = $(this);
      var $dropdown = $elip.find(".elip-modal");

      $(".elip-modal").not($dropdown).hide();

      $dropdown.toggle();
    });

    $(document).click(function(event) {
      var $target = $(event.target);

      if (!$target.closest(".elip, .elip-modal").length) {
        $(".elip-modal").hide();
      }
    });



    // Hiển thị Modal-Reblog
    $(".js-show-modal-content").click(function() {
      var modal = $(this).closest(".content").find(".js-modal-content");
      modal.show();
    });
    
    $(".js-modal-content-close").click(function() {
      var modal = $(this).closest(".js-modal-content");
      modal.hide();
    });

    $(".js-modal-content").click(function(e) {
      if (e.target === this) {
        $(this).hide();
      }
    });



    // Ẩn và hiện Share
    $(".share").click(function() {
      var $elip = $(this);
      var $dropdown = $elip.find(".share-modal");
      
      $(".share-modal").not($dropdown).hide();
      
      $dropdown.toggle();
    });

    $(".share-modal").click(function(event) {
      event.stopPropagation();
    });

    $(document).click(function(event) {
      if (!$(event.target).closest(".share").length) {
        $(".share-modal").hide();
      }
    });
    
    

    // Search bài viết
    $("#search-input").on("keyup", function(event) {
      if (event.which === 13) { 
        var keyword = $(this).val().toLowerCase();
  
        $(".content").each(function() {
          var contentText = $(this).text().toLowerCase();
          
          // Kiểm tra từ khóa có nằm trong bài viết không
          if (contentText.indexOf(keyword) !== -1) {
            var scrollTop = $(this).offset().top - $(window).height() / 7;
            $("html, body").animate({ scrollTop: scrollTop }, 1000);
            return false; // Dừng vòng lặp sau khi tìm thấy bài viết
          }
        });
      }
    });
    
    
    
    // Search bạn bè
    $(".search-fr").on("input", function() {
      var searchTerm = $(this).val().toLowerCase();
      
      $("#friends .friend").each(function() {
        var friendName = $(this).text().toLowerCase();
        
        if (friendName.includes(searchTerm)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });



    //Ẩn và hiện elip-friends
    $(".show-elip-fr").click(function(e) {
      e.stopPropagation();
      $(".elip-friends").show();
    });
    
    $(document).click(function(e) {
      if (!$(e.target).closest(".elip-friends").length) {
        $(".elip-friends").hide();
      }
    });



    // Ẩn hiện Header khi Responsive
    $(".show-header").click(function(){
      $(".modal-nav").show();
    })

    $(".modal-nav-close").click(function() {
      var modalnav = $(this).closest(".modal-nav");
      modalnav.hide();
    });

    $(".modal-nav").click(function(e) {
      if (e.target === this) {
        $(this).hide();
      }
    });

})


