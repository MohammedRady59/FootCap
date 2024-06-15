const cards = document.querySelector('.mainCards');
const btns = document.querySelectorAll('.select .btn');
const nike = document.querySelector('.nike'),
  adidas = document.querySelector('.adidas'),
  apex = document.querySelector('.apex'),
  bata = document.querySelector('.bata'),
  puma = document.querySelector('.puma'),
  all = document.querySelector('.all');
let allCard;

const shop = {
  price: [180.85, 190.85, 160.85, 170.85, 120.85, 100.85, 120.85, 100.85],
  nameProudct: [
    'Running Sneaker Shoes',
    'Leather Mens Slipper',
    'Simple Fabric Shoe',
    'Air Jordan 7 Retro',
    'Nike Air Max 270 SE ',
    'Adidas Sneakers Shoes',
    'Nike Basketball shoes ',
    'Simple Fabric Shoe    ',
  ],
  imgaes: [
    'product-1.jpg',
    'product-2.jpg',
    'product-3.jpg',
    'product-4.jpg',
    'product-5.jpg',
    'product-6.jpg',
    'product-7.jpg',
    'product-8.jpg',
  ],
  dataFilter: [
    'nike',
    'nike',
    'adidas',
    'apex',
    'nike',
    'adidas',
    'nike',
    'bata',
  ],
};
const arrShop = [shop];
console.log(arrShop);

const renderShop = function (obj) {
  obj.price.forEach((el, i) => {
    const html = `
    <div class=" col-md-6 col-lg-4 col-xl-3 cards"  data-filter=${obj.dataFilter[i]}>
    <div class="text-center   ">
      <div class="imgProuct position-relative overflow-hidden ">
        <img
          src="asset/images/${obj.imgaes[i]}"
          alt="product-1"
          class="w-100 rounded"
          loading="lazy"
        />
        <div class="icons row ">
          <div class="col-12 flex-row-reverse d-flex  py-2 ">
            <i class="bi bi-cart  rounded-circle "></i>
          </div>
          <div class="col-12 flex-row-reverse d-flex  py-2 ">
            <i class="bi bi-heart  rounded-circle "></i>
          </div>
        </div>
      </div>
      <span class="lead py-2">Men / Women</span>
      <p class="fs-5 fw-bold">${obj.nameProudct[i]}</p>
      <p class="price fs-5">$${el}</p>
    </div>
  </div>
    `;
    cards.insertAdjacentHTML('beforeend', html);
    allCard = document.querySelectorAll('.cards');
  });
};

const renderProject = function (element) {
  element.addEventListener('click', function () {
    allCard.forEach(el => {
      element.dataset.srcfilter === el.dataset.filter
        ? (el.style.display = 'flex')
        : (el.style.display = 'none');
    });
  });
};

renderProject(nike);
renderProject(adidas);
renderProject(apex);
renderProject(bata);
renderProject(puma);
renderProject(all);
renderShop(shop);

all.addEventListener('click', function () {
  allCard.forEach(el => {
    el.style.display = 'flex';
  });
});
btns.forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    btns.forEach(bt => {
      bt.classList.remove('active');
    });
    el.classList.add('active');
  });
});

$('.owl-carousel').owlCarousel({
  loop: true,

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});

/* Review */
const reviewCus = document.querySelectorAll('.reviewDetail');
reviewCus.forEach(el => {
  el.addEventListener('click', function () {
    el.classList.toggle('expand');
    if (el.classList.contains('expand')) {
      const iconRev = el.querySelector('.iconRev');
      iconRev.innerHTML = `<i class="bi bi-dash fs-3"></i>`;
    } else {
      const iconRev = el.querySelector('.iconRev');
      iconRev.innerHTML = `  <i class="bi bi-plus fs-3"></i>`;
    }
  });
});
