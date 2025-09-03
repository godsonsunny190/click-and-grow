$(document).ready(function () {
  let cart = [];

  $(".add-to-cart").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const id = $(this).data("id");
    const name = $(this).data("name");
    const price = parseFloat($(this).data("price"));
    const image = $(this).data("image");

    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price, image, quantity: 1 });
    }

    updateCart();
    showNotification(`${name} added to cart`);
  });

  function updateCart() {
    const $cartItems = $(".cart-items");
    const $totalAmount = $(".total-amount");
    const $cartButton = $(".header_cart button");

    $cartItems.empty();

    if (cart.length === 0) {
      $cartItems.html(`
        <div class="empty-cart">
            <i class="fas fa-shopping-basket"></i>
            <p>Your cart is empty</p>
        </div>
      `);
      $totalAmount.text("$0.00");
      $(".cart-count").text("0").hide();
      $cartButton.removeClass("is-active");
      return;
    }

    let total = 0;
    let itemCount = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      itemCount += item.quantity;

      const $cartItem = $(`
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-image"><img src="${item.image}" alt="${
        item.name
      }"></div>
            <div class="cart-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <h6>3-pack</h6>
                <div class="cart-quantity">
                    <div>
                        <button class="quantity-btn decrease-qty">-</button>
                        <input type="number" class="quantity-input" value="${
                          item.quantity
                        }" min="1">
                        <button class="quantity-btn increase-qty">+</button>
                        <button class="remove-item"></button>
                    </div>
                    <h5 class="cart-item-price">$${(
                      item.price * item.quantity
                    ).toFixed(2)}</h5>
                </div>
            </div>
        </div>
      `);

      $cartItems.append($cartItem);
    });

    $totalAmount.text("$" + total.toFixed(2));
    $(".cart-count").text(itemCount).show();
    $cartButton.addClass("is-active");

    $(".decrease-qty").on("click", function () {
      const $input = $(this).siblings(".quantity-input");
      let quantity = parseInt($input.val());
      if (quantity > 1) {
        quantity--;
        $input.val(quantity);
        const id = $(this).closest(".cart-item").data("id");
        const item = cart.find((item) => item.id === id);
        item.quantity = quantity;
        updateCart();
      }
    });

    $(".increase-qty").on("click", function () {
      const $input = $(this).siblings(".quantity-input");
      let quantity = parseInt($input.val());
      quantity++;
      $input.val(quantity);
      const id = $(this).closest(".cart-item").data("id");
      const item = cart.find((item) => item.id === id);
      item.quantity = quantity;
      updateCart();
    });

    $(".quantity-input").on("change", function () {
      let quantity = parseInt($(this).val());
      if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        $(this).val(quantity);
      }
      const id = $(this).closest(".cart-item").data("id");
      const item = cart.find((item) => item.id === id);
      item.quantity = quantity;
      updateCart();
    });

    $(".remove-item").on("click", function () {
      const id = $(this).closest(".cart-item").data("id");
      cart = cart.filter((item) => item.id !== id);
      updateCart();
      showNotification("Item removed from cart");
    });
  }

  function showNotification(message) {
    const $notification = $("#notification");
    $notification.text(message);
    $notification.fadeIn();
    setTimeout(function () {
      $notification.fadeOut();
    }, 3000);
  }

  $(".checkout-btn").on("click", function () {
    if (cart.length === 0) {
      showNotification("Your cart is empty!");
      return;
    }
    showNotification("Order placed successfully!");
    cart = [];
    updateCart();
  });

  updateCart();
});
