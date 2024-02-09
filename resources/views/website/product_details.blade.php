@include('website.layouts.header')
  {{-- @php 
  //dd($product) 
 @endphp --}}
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <img src="{{ asset('public/assets/images/' . $product->prod_img) }}" class="img-fluid" alt="{{ $product->prod_name }}">
            </div>
            <div class="col-md-6">
                <h2>{{ $product->prod_name }}</h2>
                <p>{{ $product->prod_description }}</p>
                
                <div class="grinding-options mt-4">
                  <label for="grinding-options" class="font-weight-bold">Type of Grinding</label>
                  <div class="form-check">
                      <input type="radio" class="form-check-input" id="fine-grind" name="grinding" value="fine-grind">
                      <label class="form-check-label" for="fine-grind">Fine Grind</label>
                  </div>
                  <div class="form-check">
                      <input type="radio" class="form-check-input" id="normal-grind" name="grinding" value="normal-grind">
                      <label class="form-check-label" for="normal-grind">Normal Grind</label>
                  </div>
                  <div class="form-check">
                      <input type="radio" class="form-check-input" id="coarse-grind" name="grinding" value="coarse-grind">
                      <label class="form-check-label" for="coarse-grind">Coarse Grind</label>
                  </div>
              </div>

                <div class="packing-options mt-4">
                    <label for="packing-options" class="font-weight-bold">Available Packing Options</label>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="10kg" name="packing" value="10kg">
                        <label class="form-check-label" for="10kg">10 Kg</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="5kg" name="packing" value="5kg">
                        <label class="form-check-label" for="5kg">5 Kg</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="2kg" name="packing" value="2kg">
                        <label class="form-check-label" for="2kg">2 Kg</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="1kg" name="packing" value="1kg">
                        <label class="form-check-label" for="1kg">1 Kg</label>
                    </div>
                </div>

                <div class="order-quantity mt-4">
                    <label for="quantity" class="font-weight-bold">Order Quantity</label>
                    <input type="number" class="form-control" id="quantity" name="quantity" placeholder="Enter quantity" required>
                </div>

                <div class="mt-4">
                    <button class="btn btn-success btn-rectangle" id="cartBtn" data-product-name="{{ $product->prod_name }}" data-product-price="{{ $product->prod_price }}">Add to Cart</button>
                    <button class="btn btn-primary btn-rectangle">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
{{-- </div> --}}

<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered text-center" style="width: 100%;" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="cartModalLabel">Shopping Cart</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body" id="cartItems">
              <!-- Cart items will be displayed here -->
          </div>
          <div class="modal-footer">
              <p class="total-price">Total Price: $0.00</p>
              <button type="button" class="btn btn-primary" id="checkoutBtn" onclick="location.href='/checkout'">Checkout</button>
          </div>
      </div>
  </div>
</div>

  <!-- app section -->
  @include('website.partials.app_section');
  <!-- end app section -->

  <!-- footer section -->
  @include('website.layouts.footer');
  <!-- footer section -->