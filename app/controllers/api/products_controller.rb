module Api
  class ProductsController < BaseController
    def index
      @products = Product.all
      if !@products.empty?
        render json: @products, status: :ok
      else
        record_not_found
      end
    end
  end
end
