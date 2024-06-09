const products = [
    // Electronics
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 1000,
      description: "Modern smart laptop.",
      rating: 4,
      image: "assets/pro/Electronics/1.jpg"
    },
    {
      id: 2,
      name: "Headphones",
      category: "Electronics",
      price: 200,
      description: "smart headphones.",
      rating: 5,
      image: "assets/pro/Electronics/2.jpg"
    },
    {
      id: 3,
      name: "Camera",
      category: "Electronics",
      price: 799,
      description: "A powerful smartcamera.",
      rating: 4.5,
      image: "assets/pro/Electronics/3.jpg"
    },
    {
      id: 4,
      name: " Carplay adapter",
      category: "Electronics",
      price: 499,
      description: "device with a USB connector.",
      rating: 4.2,
      image: "assets/pro/Electronics/4.jpg"
    },
    {
      id: 5,
      name: "power strip",
      category: "Electronics",
      price: 1500,
      description: "A powerful smartstrip.",
      rating: 4.7,
      image: "assets/pro/Electronics/5.jpg"
    },
    {
      id: 6,
      name: "HeadPhone",
      category: "Electronics",
      price: 299,
      description: "highy quality and smart.",
      rating: 4.3,
      image: "assets/pro/Electronics/6.jpg"
    },
    {
      id: 7,
      name: "Smartwatch",
      category: "Electronics",
      price: 150,
      description: "Powerful smart watch.",
      rating: 4.1,
      image: "assets/pro/Electronics/7.jpg"
    },
    {
      id: 8,
      name: "external battery pack",
      category: "Electronics",
      price: 80,
      description: "a rectangular, gray-colored.",
      rating: 4.4,
      image: "assets/pro/Electronics/8.jpg"
    },
    {
      id: 9,
      name: " smart TV interface",
      category: "Electronics",
      price: 399,
      description: "home screen of a smart TV device.",
      rating: 4.6,
      image: "assets/pro/Electronics/9.jpg"
    },
    {
      id: 10,
      name: "Bluetooth speaker",
      category: "Electronics",
      price: 799,
      description: "A high-quality bluetooth.",
      rating: 4.8,
      image: "assets/pro/Electronics/10.jpg"
    },
    {
      id: 11,
      name: "Phone",
      category: "Electronics",
      price: 150,
      description: "A powerful Smart phone.",
      rating: 4,
      image: "assets/pro/Electronics/11.jpg"
    },
    {
      id: 12,
      name: "boat speakers",
      category: "Electronics",
      price: 99,
      description: "highy quality smart speakers.",
      rating: 4.2,
      image: "assets/pro/Electronics/12.jpg"
    },
    {
      id: 13,
      name: "monopod",
      category: "Electronics",
      price: 99,
      description: "adjustable,collapsible metal or plastic shaft.",
      rating: 4.3,
      image: "assets/pro/Electronics/13.jpg"
    },
    {
      id: 14,
      name: "drum kit",
      category: "Electronics",
      price: 99,
      description: " designed to mimic the functionality .",
      rating: 4.1,
      image: "assets/pro/Electronics/14.jpg"
    },
    {
      id: 15,
      name: "car phone",
      category: "Electronics",
      price: 49,
      description: "highy quality and smart phone.",
      rating: 4.4,
      image: "assets/pro/Electronics/15.jpg"
    },
    {
      id: 16,
      name: "Beard shaving",
      category: "Electronics",
      price: 29,
      description: "highy quality and  comfortable shaving.",
      rating: 4,
      image: "assets/pro/Electronics/16.jpg"
    },
    {
      id: 17,
      name: "laptop bag",
      category: "Electronics",
      price: 69,
      description: "modern-looking black backpack or various strap.",
      rating: 4.5,
      image: "assets/pro/Electronics/17.jpg"
    },
    {
      id: 18,
      name: "electronic drum kit",
      category: "Electronics",
      price: 99,
      description: "set of circular pressure-sensitive pads.",
      rating: 4.6,
      image: "assets/pro/Electronics/18.jpg"
    },
    {
      id: 19,
      name: "Gitar",
      category: "Electronics",
      price: 49,
      description: "A high-quality webcam for video calls.",
      rating: 4.2,
      image: "assets/pro/Electronics/19.jpg"
    },
    {
      id: 20,
      name: "Charger",
      category: "Electronics",
      price: 79,
      description: "Portable and powerful charger.",
      rating: 4.3,
      image: "assets/pro/Electronics/20.jpg"
    },
    // Books
    {
      id: 21,
      name: "The Great Gatsby",
      category: "Books",
      price: 10,
      description: "A novel about classic American novel.",
      rating: 4.5,
      image: "assets/pro/Books/1.jpg"
    },
    {
      id: 22,
      name: "To Kill a Mockingbird",
      category: "Books",
      price: 12,
      description: "A poignant story of justice and racism.",
      rating: 4.8,
      image: "assets/pro/Books/2.jpg"
    },
    {
      id: 23,
      name: "Verity",
      category: "Books",
      price: 8,
      description: "A novel about dystopian masterpiece.",
      rating: 4.6,
      image: "assets/pro/Books/3.jpg"
    },
    {
      id: 24,
      name: "Pride and Prejudice",
      category: "Books",
      price: 9,
      description: "A novel about timeless romantic novel.",
      rating: 4.7,
      image: "assets/pro/Books/4.jpg"
    },
    {
      id: 25,
      name: "The Hobbit",
      category: "Books",
      price: 11,
      description: "The first book in the Middle-earth saga.",
      rating: 4.6,
      image: "assets/pro/Books/5.jpg"
    },
    {
      id: 26,
      name: "Fast and slow",
      category: "Books",
      price: 13,
      description: "The first book in the Harry Potter series.",
      rating: 4.8,
      image: "assets/pro/Books/6.jpg"
    },
    {
      id: 27,
      name: "Twiated book one",
      category: "Books",
      price: 8,
      description: "A novel about coming-of-age classic.",
      rating: 4.5,
      image: "assets/pro/Books/7.jpg"
    },
    {
      id: 28,
      name: "The Kite Runner",
      category: "Books",
      price: 10,
      description: "A powerful story of friendship and redemption.",
      rating: 4.5,
      image: "assets/pro/Books/8.jpg"
    },
    {
        id: 29,
        name: "Grow rich",
        category: "Books",
        price: 11,
        description: "A novel about set of in Nazi Germany.",
        rating: 4.6,
        image: "assets/pro/Books/8.jpg"
        },
        {
        id: 30,
        name: "Gone with the Wind",
        category: "Books",
        price: 12,
        description: "An epic novel set during American Civil War.",
        rating: 4.7,
        image: "assets/pro/Books/9.jpg"
        },
        {
        id: 31,
        name: "5 lover languages",
        category: "Books",
        price: 15,
        description: "The first book in the classic fantasy trilogy.",
        rating: 4.8,
        image: "assets/pro/Books/10.jpg"
        },
        {
        id: 32,
        name: "Fahrenheit 451",
        category: "Books",
        price: 9,
        description: "A dystopian novel about censorship.",
        rating: 4.5,
        image: "assets/pro/Books/11.jpg"
        },
        {
        id: 33,
        name: "Rich dad",
        category: "Books",
        price: 10,
        description: "novel about rich dad.",
        rating: 4.6,
        image: "assets/pro/Books/12.jpg"
        },
        {
        id: 34,
        name: "The Shining",
        category: "Books",
        price: 9,
        description: "A horror novel by Stephen King.",
        rating: 4.4,
        image: "assets/pro/Books/13.jpg"
        },
        {
        id: 35,
        name: "The Girl on the Train",
        category: "Books",
        price: 8,
        description: "A psychological thriller novel.",
        rating: 4.3,
        image: "assets/pro/Books/14.jpg"
        },
        {
        id: 36,
        name: "Flicker in the dark",
        category: "Books",
        price: 10,
        description: "A flicker in the dark novel.",
        rating: 4.7,
        image: "assets/pro/Books/15.jpg"
        },
        {
        id: 37,
        name: "The Alchemist",
        category: "Books",
        price: 9,
        description: "A inspirational fable by Paulo.",
        rating: 4.6,
        image: "assets/pro/Books/16.jpg"
        },
        {
        id: 38,
        name: "The Da Vinci Code",
        category: "Books",
        price: 11,
        description: "A thrilling mystery novel.",
        rating: 4.4,
        image: "assets/pro/Books/17.jpg"
        },
        // Fashion
        {
        id: 39,
        name: "T-Shirt",
        category: "Fashion",
        price: 20,
        description: "A comfortable cotton t-shirt.",
        rating: 4.2,
        image: "assets/pro/Fashion/1.jpg"
        },
        {
        id: 40,
        name: "Body",
        category: "Fashion",
        price: 40,
        description: "A classic pair of blue jeans.",
        rating: 4.5,
        image: "assets/pro/Fashion/2.jpg"
        },
        {
        id: 41,
        name: "Sweater",
        category: "Fashion",
        price: 50,
        description: "A stylish and elegant dress.",
        rating: 4.3,
        image: "assets/pro/Fashion/3.jpg"
        },
        {
        id: 42,
        name: "Trouser",
        category: "Fashion",
        price: 60,
        description: "A warm and cozy jacket.",
        rating: 4.4,
        image: "assets/pro/Fashion/4.jpg"
        },
        {
        id: 43,
        name: "Jaket",
        category: "Fashion",
        price: 70,
        description: "A comfortable pair of sneakers.",
        rating: 4.6,
        image: "assets/pro/Fashion/5.jpg"
        },
        {
        id: 44,
        name: "shose",
        category: "Fashion",
        price: 30,
        description: "A stylish and versatile shose.",
        rating: 4.1,
        image: "assets/pro/Fashion/6.jpg"
        },
        {
        id: 45,
        name: "Trouser",
        category: "Fashion",
        price: 40,
        description: "A smart Beutifull and warm trouser.",
        rating: 4.3,
        image: "assets/pro/Fashion/7.jpg"
        },
        {
        id: 46,
        name: "Shose",
        category: "Fashion",
        price: 35,
        description: "A pair of comfortable and stylish shose.",
        rating: 4.2,
        image: "assets/pro/Fashion/8.jpg"
        },
        {
        id: 47,
        name: "Sweater",
        category: "Fashion",
        price: 15,
        description: "A fashionable and practical sweater.",
        rating: 4.1,
        image: "assets/pro/Fashion/9.jpg"
        },
        {
        id: 48,
        name: "T-shirt",
        category: "Fashion",
        price: 20,
        description: "A Butifull and smart stylish t-shirt.",
        rating: 4.4,
        image: "assets/pro/Fashion/10.jpg"
        },
        {
        id: 49,
        name: "Shose",
        category: "Fashion",
        price: 8,
        description: "A pack of comfortable and durable shose.",
        rating: 4.2,
        image: "assets/pro/Fashion/11.jpg"
        },
        {
        id: 50,
        name: "Shose",
        category: "Fashion",
        price: 25,
        description: "A pack of comfortable and durable shose.",
        rating: 4.3,
        image: "assets/pro/Fashion/12.jpg"
        },
        // Sports
        {
        id: 51,
        name: "Wall Art",
        category: "Sports",
        price: 40,
        description: "A vibrant and unique wall art piece.",
        rating: 4.4,
        image: "assets/pro/Sports/1.jpg"
        },
        {
        id: 52,
        name: "Soccer ball",
        category: "Sports",
        price: 25,
        description: "A cozy and decorative throw pillow.",
        rating: 4.2,
        image: "assets/pro/Sports/2.jpg"
        },
        {
        id: 53,
        name: "Watche",
        category: "Sports",
        price: 30,
        description: "Smart and beutifull and elegant watche.",
        rating: 4.3,
        image: "assets/pro/Sports/3.jpg"
        },
        {
        id: 54,
        name: "Trouser",
        category: "Sports",
        price: 100,
        description: "A high-quality and durable area rug.",
        rating: 4.5,
        image: "assets/pro/Sports/4.jpg"
        },
        {
        id: 55,
        name: "Trouser",
        category: "Sports",
        price: 20,
        description: "A high-quality and durable area rug.",
        rating: 4.5,
        image: "assets/pro/Sports/4.jpg"
        },

        {
            id: 56,
            name: "Curtains",
            category: "Sports",
            price: 60,
            description: "A set of stylish and light-filtering.",
            rating: 4.4,
            image: "assets/pro/Sports/5.jpg"
            },
            {
            id: 57,
            name: "Wall Clock",
            category: "Sports",
            price: 35,
            description: "A modern and unique wall clock.",
            rating: 4.3,
            image: "assets/pro/Sports/6.jpg"
            },
            {
            id: 58,
            name: "Boys T-shirt",
            category: "Sports",
            price: 25,
            description: "Highy quality and beutifull t-shirts .",
            rating: 4.1,
            image: "assets/pro/Sports/7.jpg"
            },
            {
            id: 59,
            name: "Picture Frame",
            category: "Sports",
            price: 15,
            description: "A sleek and modern picture frame.",
            rating: 4.2,
            image: "assets/pro/Sports/8.jpg"
            },
            {
            id: 60,
            name: "Throw Blanket",
            category: "Sports",
            price: 35,
            description: "A highy cozy and soft throw blanket.",
            rating: 4.4,
            image: "assets/pro/Sports/9.jpg"
            },
            {
            id: 61,
            name: "Socks",
            category: "Sports",
            price: 25,
            description: "A stylish and functional decorative tray.",
            rating: 4.3,
            image: "assets/pro/Sports/10.jpg"
            },
            {
            id: 62,
            name: "Bookends",
            category: "Sports",
            price: 20,
            description: "A set of modern and minimalist bookends.",
            rating: 4.1,
            image: "assets/pro/Sports/11.jpg"
            },
            {
            id: 63,
            name: "Lamp",
            category: "Sports",
            price: 50,
            description: "A beautiful and energy-efficient table lamp.",
            rating: 4.4,
            image: "assets/pro/Sports/12.jpg"
            },
            {
            id: 64,
            name: "Throw Pillow",
            category: "Sports",
            price: 25,
            description: "A cozy and decorative throw pillow.",
            rating: 4.2,
            image: "assets/pro/Sports/13.jpg"
            },
            {
            id: 65,
            name: "watche",
            category: "Sports",
            price: 30,
            description: "Smart and beutifull stylish and elegant watche.",
            rating: 4.3,
            image: "assets/pro/Sports/14.jpg"
            },
            {
            id: 66,
            name: "Rug",
            category: "Sports",
            price: 100,
            description: "A high-quality and durable area rug.",
            rating: 4.5,
            image: "assets/pro/Sports/15.jpg"
            },
            {
            id: 67,
            name: "Black trouser",
            category: "Sports",
            price: 20,
            description: "A beautiful and functional candle holder.",
            rating: 4.2,
            image: "assets/pro/Sports/16.jpg"
            },
            {
            id: 68,
            name: "Curtains",
            category: "Sports",
            price: 60,
            description: "A set of stylish and light-filtering curtains.",
            rating: 4.4,
            image: "assets/pro/Sports/17.jpg"
            },
            {
            id: 69,
            name: "Wall Clock",
            category: "Sports",
            price: 35,
            description: "A modern and unique wall clock.",
            rating: 4.3,
            image: "assets/pro/Sports/18.jpg"
            },
            {
            id: 70,
            name: "Sock",
            category: "Sports",
            price: 25,
            description: " Beutifull different types of socks.",
            rating: 4.1,
            image: "assets/pro/Sports/19.jpg"
            },
            {
            id: 71,
            name: "Gloves",
            category: "Sports",
            price: 15,
            description: "A sleek and modern picture frame.",
            rating: 4.2,
            image: "assets/pro/Sports/20.jpg"
            },
            {
            id: 72,
            name: "Ball",
            category: "Sports",
            price: 35,
            description: "A cozy and decorative throw pillow.",
            rating: 4.4,
            image: "assets/pro/Sports/1.jpg"
            },
            {
            id: 73,
            name: "Ball",
            category: "Sports",
            price: 25,
            description: "A stylish and functional decorative tray.",
            rating: 4.3,
            image: "assets/pro/Sports/2.jpg"
            },
            {
            id: 74,
            name: "Bookends",
            category: "Sports",
            price: 20,
            description: "A set of modern and minimalist bookends.",
            rating: 4.1,
            image: "assets/pro/Sports/13.jpg"
            },
            {
            id: 75,
            name: "Children basketball",
            category: "Sports",
            price: 50,
            description: "A beautiful and energy-efficient table lamp.",
            rating: 4.4,
            image: "assets/pro/Sports/14.jpg"
            },
            {
            id: 76,
            name: "Adidas",
            category: "Sports",
            price: 40,
            description: "A vibrant and unique wall art piece.",
            rating: 4.4,
            image: "assets/pro/Sports/15.jpg"
            },
            {
            id: 77,
            name: "White headephone",
            category: "Sports",
            price: 25,
            description: "A cozy and decorative throw pillow.",
            rating: 4.2,
            image: "assets/pro/Sports/16.jpg"
            },
            {
            id: 78,
            name: "Headphone",
            category: "Sports",
            price: 30,
            description: "Smart and reliable headphone.",
            rating: 4.3,
            image: "assets/pro/Sports/17.jpg"
            },
            {
            id: 79,
            name: "Sport t-shirt",
            category: "Sports",
            price: 100,
            description: "A high-quality and durable area t-shirt.",
            rating: 4.5,
            image: "assets/pro/Sports/18.jpg"
            },
            {
            id: 80,
            name: "Sport gloves",
            category: "Sports",
            price: 20,
            description: "A beautiful and functional candle holder.",
            rating: 4.2,
            image: "assets/pro/Sports/20.jpg"
        }
       ]




let cart = [];
function displayProducts(category) {
    let filteredProducts = products;
    if (category !== 'All') {
      filteredProducts = products.filter(product => product.category === category);
    }
    let productContainer = $('#productContainer');
    productContainer.empty();
    if (filteredProducts.length === 0) {
      productContainer.append('<p>Sorry! Currently, No product is found under this category!</p>');
  } else {
    filteredProducts.forEach(product => {
      let ratingStars = '';
      for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
          ratingStars += '<i class="fas fa-star"></i>';
        } else {
          ratingStars += '<i class="far fa-star"></i>';
        }
      }
      productContainer.append(`
        <div class="col-md-3">
            <div class="card product-card">
            <img class="card-img-top" width="261" height="261" src="${product.image}" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price} ETB</p>
                <div class="product-card-review">
                <div class="rating">${ratingStars}</div>
                </div>
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <br>
                <button class="btn btn-warning add-to-favorites" onclick="addToFavorites(${product.id})">
                            <i class="fas fa-bookmark"></i> Add to Favorites
                        </button>
            </div>
            </div>
        </div>
        `);
    });
  }
  }




  function updateFavoriteCount() {
    $('#favoriteCount').text(favorites.length);
  }

  function showFavorites() {
    let cartContainer = $('#productContainer');
    cartContainer.empty();
  
    if (favorites.length === 0) {
      cartContainer.append('<p>Your favorites list is empty!</p>');
    } else {
      favorites.forEach(item => {
        cartContainer.append(`
          <div class="cart-item">
            <img src="${item.image}" width="261" height = "261" alt="${item.name}">
            <div>
              <h5>${item.name}</h5>
              <p>${item.price} ETB</p>
            </div>
            <button class="btn btn-danger btn-sm remove-from-favorites" onclick="removeFromFavorites(${favorites.indexOf(item)})">
              <i class="fas fa-trash-alt"></i> Remove
            </button>
          </div>
        `);
      });
      cartContainer.append('<button class="btn btn-success" onclick="checkout()">Checkout</button>');
    }
  }

  function removeFromFavorites(index) {
    favorites.splice(index, 1);
    updateFavoriteCount();
    showFavorites();
  }

function updateCartCount() {
    $('#productCounter').text(cart.length);
}

function cartBtnOnclick() {
  let cartContainer = $('#productContainer');
  cartContainer.empty();
  

  if (cart.length === 0) {
    cartContainer.append('<p>Your cart is empty.</p>');
  } else {
    cart.forEach((item, index) => {
      cartContainer.append(`
        <div class="cart-item">
          <img src="${item.image}" width="261" height = "261" alt="${item.name}">
          <div>
            <h5>${item.name}</h5>
            <p>${item.price} ETB</p>
          </div>
          <button class="btn btn-danger btn-sm remove-from-cart" onclick="removeFromCart(${index})">
            <i class="fas fa-trash-alt"></i> Remove
          </button>
        </div>
      `);
    });
    cartContainer.append('<button width="30" class="btn btn-success" onclick="checkout()">Checkout</button>');
  }
}

function checkout() {
    let cartContainer = $('#productContainer');
    cartContainer.empty();
  
    // Add some custom styles to the container
    cartContainer.addClass('checkout-container');
  
    cartContainer.append(`
      <h3 class="checkout-title mb-5 pb-5">Payment Options</h3>
      <br/>
      <h4 class="checkout-description">Select a payment method:</h4>
      <br/>
      <ul class="list-unstyled payment-options">
    <li>
        <button class="btn btn-warning payment-btn" onclick="selectPaymentMethod('Telebirr')">
        <img src="assets/partners/telebirr.png" alt="Telebirr" width="45px" height="45px">
        Telebirr
        </button>
    </li>
    <li>
        <button class="btn btn-warning payment-btn" onclick="selectPaymentMethod('Chapa')">
        <img src="assets/partners/chapa.png" alt="Chapa" width="45px" height="45px">
        Chapa
        </button>
    </li>
    <li>
        <button class="btn btn-warning payment-btn" onclick="selectPaymentMethod('Santim Pay')">
        <img src="assets/partners/santim.png" alt="Santim Pay" width="45px" height="45px">
        Santim Pay
        </button>
    </li>
    <li>
        <button class="btn btn-warning payment-btn" onclick="selectPaymentMethod('Dashen Bank')">
        <img src="assets/partners/Dashen_Bank.png" alt="Dashen Bank" width="45px" height="45px">
        Dashen Bank
        </button>
    </li>
    </ul>
      <button class="btn btn-primary confirm-btn" onclick="confirmCheckout()">
        <i class="fas fa-check-circle"></i>
        Confirm
      </button>
    `);
  
    // Add some custom styles and animations
    $('.payment-btn').hover(
      function() {
        $(this).addClass('btn-hover');
      },
      function() {
        $(this).removeClass('btn-hover');
      }
    );
  
    $('.confirm-btn').hover(
      function() {
        $(this).addClass('btn-hover');
      },
      function() {
        $(this).removeClass('btn-hover');
      }
    );
  
    $('.payment-btn, .confirm-btn').click(function() {
      $(this).addClass('btn-clicked');
      setTimeout(function() {
        $('.btn-clicked').removeClass('btn-clicked');
      }, 500);
    });
  }

function selectPaymentMethod(method) {
    $('.payment-btn').removeClass('selected');
    $(`button:contains(${method})`).addClass('selected');
}



function searchProducts() {
    let searchTerm = $('#searchBar').val().toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    let productContainer = $('#productContainer');
    productContainer.empty();
    if (filteredProducts.length === 0) {
        productContainer.append('<p>This product is currently not available.</p>');
    } else {
        filteredProducts.forEach(product => {
            let ratingStars = '';
            for (let i = 0; i < 5; i++) {
                if (i < product.rating) {
                    ratingStars += '<i class="fas fa-star"></i>';
                } else {
                    ratingStars += '<i class="far fa-star"></i>';
                }
            }
            productContainer.append(`
                <div class="col-md-3">
                    <div class="card">
                    <img class="card-img-top " width="261" height="261" src="${product.image}" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price} ETB</p>
                        <div class="product-card-review">
                        <div class="rating">${ratingStars}</div>
                        </div>
                        <div class="product-actions">
                        <button class="btn btn-primary add-to-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn btn-warning add-to-favorites" onclick="addToFavorites(${product.id})">
                            <i class="fas fa-bookmark"></i> Add to Favorites
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                `);
        });
    }
}

let favorites = [];
let transactions = [];

function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    updateFavoriteIcon();
}

function updateFavoriteIcon() {
    let favoriteIcon = $('#favoriteIcon');
    if (favorites.length > 0) {
        favoriteIcon.addClass('text-danger');
    } else {
        favoriteIcon.removeClass('text-danger');
    }
}


function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  cartBtnOnclick(); // Refresh the cart display
}

function addToFavoritesFromCart(productId) {
    favorites.push(productId);
    updateFavoriteIcon();
}

function updateCartView() {
    let cartContainer = $('#productContainer');
    cartContainer.empty();
    if (cart.length === 0) {
        cartContainer.append('<p>Your cart is empty.</p>');
    } else {
        cart.forEach(item => {
            cartContainer.append(`
                <div class="cart-item">
                    <img src="assets/pro/${item.category}/${item.image}" width="50" alt="${item.name}">
                    <div>
                        <h5>${item.name}</h5>
                        <p>$${item.price}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove from Cart</button>
                        <button class="btn btn-primary" onclick="addToFavoritesFromCart(${item.id})">Add to Favorites</button>
                    </div>
                </div>
            `);
        });
        cartContainer.append('<button class="btn btn-success" onclick="checkout()">Checkout</button>');
    }
}
function addToFavorites(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
      if (!favorites.includes(product)) {
        favorites.push(product);
        updateFavoriteCount();
        alert(`${product.name} has been added to your favorites!`);
      } else {
        alert(`${product.name} is already in your favorites.`);
      }
    }
  }

  function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    if (product) {
      if (!cart.includes(product)) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} has been added to your Cart!`);
      } else {
        alert(`${product.name} is already in your cart.`);
      }
    }
  }
function showTransactions() {
    let productContainer = $('#productContainer');
    productContainer.empty();
    if (transactions.length === 0) {
        productContainer.append('<p>No transactions found.</p>');
    } else {
        transactions.forEach(transaction => {
            productContainer.append(`
                <div class="transaction-item">
                    <p>Transaction ID: ${transaction.id}</p>
                    <p>Total Amount: ${transaction.amount} ETB</p>
                    <p>Date: ${transaction.date}</p>
                </div>
            `);
        });
    }
}

function showProfile() {
    let productContainer = $('#productContainer');
    productContainer.empty();
    productContainer.append(`
        <div class="profile">
            <h3>User Profile</h3>
            <p>Name: e-Commerce Team</p>
            <p>Email: ecommerce.team@gmail.com</p>
            <!-- Add more profile details here -->
        </div>
    `);
}

// Example function to add a transaction after checkout
function addTransaction(amount) {
    transactions.push({
        id: transactions.length + 1,
        amount: amount,
        date: new Date().toLocaleString()
    });
}

// Update the confirmCheckout function to add a transaction
function confirmCheckout() {
    $('#productContainer').append('<p class="text-success mt-3">Checkout completed successfully!</p>');
    addTransaction(cart.reduce((sum, item) => sum + item.price, 0));
    cart = [];
    updateCartCount();
    setTimeout(() => {
        $('#productContainer').empty();
        displayProducts('All');
    }, 3000);
}

$(document).ready(function() {
    displayProducts('All');
    $('#favoriteIcon').click(showFavorites);
    $('#historyIcon').click(showTransactions);
    $('#profileIcon').click(showProfile);

    $('#searchIcon').click(function() {
        searchProducts();
    });

    $('#searchBar').keypress(function(e) {
        if (e.which == 13) {
            searchProducts();
        }
    });

    $('#dropIcon').click(function() {
        $('#categoryList').slideToggle();
    });
});

