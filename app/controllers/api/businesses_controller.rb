class Api::BusinessesController < ApplicationController
    
    def index
        @businesses = Business.all
    end

  def create
    @business = Business.create!(business_params)
    render :show
  end

    def show 
        @business = Business.find(params[:id])
    end

    private

    def business_params
    params.require(:user).permit(:title, :description, :longitude, :latitude, :address, :price, :opening_hours, :closing_hours)
    end
end
